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
  console.log(values, condition, "PROJECT ACTIONS -> SAVE CAMPAIGN");
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "SAVE_CAMPAIGN_FOR", values, condition });
  };
};

export const saveCauseDetails = (values, condition) => {
  console.log(values, condition, "PROJECT ACTIONS -> SAVE CAUSE DETAILS");
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "SAVE_CAUSE_DETAILS", values, condition });
  };
};

export const saveElaborateCause = (values) => {
  console.log(values, "PROJECT_ACTIONS", "SAVE ELABORATE");
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(getState().campaign);
    // Save Data in Database!
    dispatch({ type: "SAVE_ELABORATE_CAUSE", values });
  };
};
