from flask import Flask, request, jsonify
import os
import requests
from dotenv import load_dotenv

app = Flask(__name__)

# Load environment variables from .env file
load_dotenv()
API_KEY = os.getenv("CAREER_API_KEY")

@app.route('/api/career-guidance', methods=['POST'])
def career_guidance():
    user_query = request.json.get('query')

    # Replace with an actual API request or your own logic
    response = get_career_response(user_query)

    return jsonify({'response': response})

def get_career_response(query):
    # Convert the query to lowercase to make it case-insensitive
    query = query.lower()
    
    # Predefined responses for specific career-related keywords
    responses = {
        "doctor": "A career in medicine requires dedication. You'll need to complete a medical degree followed by residency.",
        "engineer": "Engineering offers fields like software, civil, mechanical, etc. Consider your strengths and interests!",
        "artist": "Art is a creative field. You can pursue careers in digital art, fine arts, animation, etc."
    }
    
    # Check if any keyword exists in the query
    for key, response in responses.items():
        if key in query:
            return response
    
    # Default message if no keywords are matched
    return "I'm here to help! Can you tell me more about your interests?"

if __name__ == "__main__":
    app.run(debug=True)