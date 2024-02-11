
// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    [
        {
            "name": "Anuj Verma",
            "course": "Btech",
            "branch": "CS-AIML",
            "Sem": "Sixth",
            "Session": "2023-2024"
        },
        {
            "name": "Sakshi Gupta",
            "course": "Btech",
            "branch": "CS-AIML",
            "Sem": "Sixth",
            "Session": "2023-2024"
        },
        {
            "name": "Rahul Sharma",
            "course": "Btech",
            "branch": "CSE",
            "Sem": "Sixth",
            "Session": "2023-2024"
        },
        {
            "name": "Priya Singh",
            "course": "Btech",
            "branch": "IT",
            "Sem": "Sixth",
            "Session": "2023-2024"
        },
        {
            "name": "Amit Patel",
            "course": "Btech",
            "branch": "CS-AIML",
            "Sem": "Sixth",
            "Session": "2023-2024"
        },
        {
            "name": "Kriti Tiwari",
            "course": "Btech",
            "branch": "ECE",
            "Sem": "Sixth",
            "Session": "2023-2024"
        },
        {
            "name": "Rajesh Kumar",
            "course": "Btech",
            "branch": "CSE",
            "Sem": "Sixth",
            "Session": "2023-2024"
        },
        {
            "name": "Neha Sharma",
            "course": "Btech",
            "branch": "CS-AIML",
            "Sem": "Sixth",
            "Session": "2023-2024"
        },
        {
            "name": "Manish Yadav",
            "course": "Btech",
            "branch": "ME",
            "Sem": "Sixth",
            "Session": "2023-2024"
        },
        {
            "name": "Pooja Mishra",
            "course": "Btech",
            "branch": "CS-AIML",
            "Sem": "Sixth",
            "Session": "2023-2024"
        }
    ]
    
]);

// Print a message to the output window.
console.log(`Done`);

