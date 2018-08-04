const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp()
const db = admin.firestore();

exports.aggregate = functions.firestore
    .document('donations/{donationId}', ).onCreate(async(snapshot, context) => {

        const donation = snapshot.data();

        const aggRef = db.doc('aggregation/donations');

        const aggDoc = await aggRef.get();
        const aggData = aggDoc.data();


        // Aggregate New Data

        const next = {
            total: aggData.total + donation.amount,
            count: aggData.count + 1,
            last5: [donation, ...aggData.last5.slice(0, 4)]
        }

        return aggRef.set(next)

    });