const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const cors = require("cors")({ origin: true });
const Busboy = require("busboy");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { Storage } = require("@google-cloud/storage");
const projectId = "react-redux-firebase-d53cd";
const keyFilename =
  "react-redux-firebase-d53cd-firebase-adminsdk-piikq-9503adcb14.json";
let gcs = new Storage({
  projectId,
  keyFilename,
});

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => {
      console.log("notification added", doc);
    });
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc) => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };

      return createNotification(notification);
    });
});

exports.uploadFile = functions.https.onRequest((req, res) => {
  console.log("runningFile Upload");
  alert(12)
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(500).json({
        message: "Not allowed",
      });
    }
    const busboy = new Busboy({ headers: req.headers });
    let uploadData = null;

    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = { file: filepath, type: mimetype };
      file.pipe(fs.createWriteStream(filepath));
    });

    busboy.on("finish", () => {
      const bucket = gcs.bucket("react-redux-firebase-d53cd.appspot.com");
      bucket
        .upload(uploadData.file, {
          uploadType: "media",
          metadata: {
            metadata: {
              contentType: uploadData.type,
            },
          },
        })
        .then(() => {
          res.status(200).json({
            message: "It worked!",
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    });
    busboy.end(req.rawBody);
  });
});
