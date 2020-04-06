const initState = {
  // CampaignFor State
  myselfFirstName: "",
  myselfLastName: "",
  myselfAge: "",
  myselfGender: "",

  projectOrganiserName: "",
  projectOrganiserAddress: "",
  projectOrganiserGender: "",
  projectOrganiserContact: "+92-   -       ",
  projectOrganiserCnic: "     -       - ",

  beneficiaryFirstName: "",
  beneficiaryLastName: "",
  beneficiaryAge: "",
  beneficiaryGender: "",
  beneficiaryCnic: "     -       - ",
  beneficiaryAddress: "",
  beneficiaryContact: "+92-   -       ",

  //

  // CampaignDetails
  campaignType: "",
  amount: "",
  expiry: new Date(),

  schoolName: "",
  schoolEmail: "",
  schoolAddress: "",
  schoolContact: "+92-   -       ",
  schoolId: "",

  hospital: false,
  hospitalName: "",
  hospitalEmail: "",
  hospitalAddress: "",
  hospitalContact: "+92-   -       ",
  patientId: "",

  //

  //Elaborate Cause
  campaignTitle: "",
  story:
    "<p>Write your story. Keep it simple, personal, and about the specific use of funds.</p></br></br><p>Write About: Who is this campaign for? When do you need funds? How do you plan to use the funds</p>",
  //
};

// reducer passed into store which manipulates the state
const campaignReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    case "SAVE_CAMPAIGN_FOR":
      return { ...action.values, campaignFor: action.condition };
    case "SAVE_CAUSE_DETAILS":
      return { ...state, ...action.values, causeDetails: action.condition };
    case "SAVE_ELABORATE_CAUSE":
      return { ...state, ...action.values };
    default:
      return state;
  }
};

export default campaignReducer;
