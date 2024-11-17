import { db, firebaseConfig } from './firebase.js'; // Adjust the path as needed
import { collection, addDoc } from "firebase/firestore";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('surveyForm');

    console.log(firebaseConfig.apiKey)

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);  // Collect form data

        // Convert FormData into a plain object
        const surveyData = {};
        formData.forEach((value, key) => {
            surveyData[key] = value; // Assign each form field's name and value
        });

        try {
            // Save survey data directly to Firestore
            await addDoc(collection(db, "surveyResponses"), surveyData);
            alert("Survey submitted successfully!");
        } catch (error) {
            console.error("Error submitting survey:", error);
            alert("Error submitting survey: " + error.message);
        }

        // try {
        //     // Send the JSON data to your server
        //     const res = await fetch('http://localhost:3000/submit-survey', {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/json",  // Specify JSON content type
        //         },

        //         body: jsonString,  // Send the data as JSON
        //     });

        //     if (res.ok) {
        //         alert("Survey submitted successfully!");
        //     } else {
        //         throw new Error("Failed to submit survey.");
        //     }
        // } catch (error) {
        //     alert("Error submitting survey: " + error.message);
        // }
    });
});