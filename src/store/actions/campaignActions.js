export const createProject = (project) => {
  // returning a function which is halting a dispatch
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .doc("fundraisers")
      .collection(project.category)
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};

export const saveCampaignFor = (values, condition) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "SAVE_CAMPAIGN_FOR", values, condition });
  };
};

export const saveCauseDetails = (values, condition) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "SAVE_CAUSE_DETAILS", values, condition });
  };
};

export const saveElaborateCause = (values) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const campaign = getState().campaign;
    let campaignFor = {};
    let causeDetails = {};

    // campaignFor
    if (campaign.campaignFor == "Myself") {
      const {
        myselfFirstName,
        myselfLastName,
        myselfAge,
        myselfGender,
      } = campaign;
      campaignFor = {
        myselfFirstName,
        myselfLastName,
        myselfAge,
        myselfGender,
      };
    } else if (campaign.campaignFor == "Project") {
      const {
        projectOrganiserName,
        projectOrganiserAddress,
        projectOrganiserGender,
        projectOrganiserContact,
        projectOrganiserCnic,
      } = campaign;
      campaignFor = {
        projectOrganiserName,
        projectOrganiserAddress,
        projectOrganiserGender,
        projectOrganiserContact,
        projectOrganiserCnic,
      };
    } else if (campaign.campaignFor == "Beneficiary") {
      const {
        beneficiaryFirstName,
        beneficiaryLastName,
        beneficiaryAge,
        beneficiaryGender,
        beneficiaryCnic,
        beneficiaryAddress,
        beneficiaryContact,
      } = campaign;
      campaignFor = {
        beneficiaryFirstName,
        beneficiaryLastName,
        beneficiaryAge,
        beneficiaryGender,
        beneficiaryCnic,
        beneficiaryAddress,
        beneficiaryContact,
      };
    }

    // causeDetails
    if (campaign.causeDetails == "Education") {
      const {
        schoolName,
        schoolEmail,
        schoolAddress,
        schoolContact,
        schoolId,
        campaignType,
        amount,
        expiry,
      } = campaign;
      causeDetails = {
        schoolName,
        schoolEmail,
        schoolAddress,
        schoolContact,
        schoolId,
        campaignType,
        amount,
        expiry,
      };
    } else if (campaign.causeDetails == "Health") {
      if (campaign.hospital) {
        const {
          campaignType,
          amount,
          expiry,
          hospital,
          hospitalName,
          hospitalEmail,
          hospitalAddress,
          hospitalContact,
          patientId,
        } = campaign;
        causeDetails = {
          campaignType,
          amount,
          expiry,
          hospital,
          hospitalName,
          hospitalEmail,
          hospitalAddress,
          hospitalContact,
          patientId,
        };
      } else {
        const { hospital } = campaign;
        causeDetails = {
          hospital,
        };
      }
    } else if (campaign.causeDetails == "Other") {
      const { campaignType, amount, expiry } = campaign;
      causeDetails = {
        campaignType,
        amount,
        expiry,
      };
    }

    const campaignOwnerId = getState().firebase.auth.uid;

    // Final Campaign...
    let finalCampaign = {
      ...campaignFor,
      ...causeDetails,
      campaignFor: campaign.campaignFor,
      causeDetails: campaign.causeDetails,
      campaignTitle: values.campaignTitle,
      story: values.story,
      // campaignCreater information
      createdAt: new Date(),
      campaignOwnerId,
    };

    console.log("FINAL CAMPAIGN=> ", finalCampaign);

    // Saving data in database
    const firestore = getFirestore();
    firestore
      .collection("campaigns")
      .add({
        ...finalCampaign,
      })
      .then(() => {
        dispatch({ type: "CREATING_CAMPAIGN", finalCampaign });
      })
      .catch((err) => {
        dispatch({ type: "CREATING_CAMPAIGN_ERROR", err });
      });
  };
};
