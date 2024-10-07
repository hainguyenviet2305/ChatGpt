// src/components/MovingLines.js
import React from "react";
import "./MovingLines.scss";

const lines = [
  "Give me ideas for what to do with my kids' art",
  "Help me study vocabulary for a college entrance exam",
  "Tell me a fun fact about the Roman Empire",
  "Write a text inviting my neighbors to a barbecue",
  "Improve my essay writing ask me to outline my thoughts",
  "Write a text asking a friend to be my plus-one at a wedding",
  "Test my knowledge on ancient civilizations",
  
  "Write a Python script to automate sending daily email reports",
  "Write an email to request a quote from local plumbers",
  "Create a personal webpage for me after asking me three questions",
  "Plan a 'mental health day' to help me relax",
  "Create a morning routine to boost my productivity",
  "Give me ideas about how to plan my New Years resolutions",
  "Help me pick an outfit that will look good on camera",

  "Write an email to request a quote from local plumbers",
  "Suggest fun activities to help me make friends in a new city",
  "Create a content calendar for a TikTok account",
  "Make a sandwich using ingredients from my kitchen",
  "Design a programming game teach basics in a fun way",
  "Quiz me on world capitals to enhance my geography skills",
  "Make up a story about Sharky, a tooth-brushing shark superhero",
];

const backgrounds = [
  'linear-gradient(90deg, #0D78B3, #0E76B7)',
  'linear-gradient(90deg, #0D78B2, #0C7CAB)',
  'linear-gradient(90deg, #0B7DAB, #0A80A6)',
  'linear-gradient(90deg, #0981A4, #08849E)',
  'linear-gradient(90deg, #08859D, #1193A2)',
  'linear-gradient(90deg, #1193A1, #0F979B)',
  'linear-gradient(90deg, #0F979A, #0E9B95)',

  'linear-gradient(90deg, #008D87, #008680)',
  'linear-gradient(90deg, #0E928D, #0E8A86)',
  'linear-gradient(90deg, #0E8985, #037774)',
  'linear-gradient(90deg, #037672, #036E6C)',
  'linear-gradient(90deg, #036D6B, #036664)',
  'linear-gradient(90deg, #036563, #035D5C)',
  'linear-gradient(90deg, #035C5B, #035454)',

  'linear-gradient(90deg, #035454, #045555)',
  'linear-gradient(90deg, #075558, #18596A)',
  'linear-gradient(90deg, #1A596D, #2B5D80)',
  'linear-gradient(90deg, #2D5D82, #3E6194)',
  'linear-gradient(90deg, #406197, #5C70B4)',
  'linear-gradient(90deg, #5E70B7, #6F74CA)',
  'linear-gradient(90deg, #7274CC, #7274CC)',
];

const MovingLines = () => {
  const handleButtonClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.chatgpt.aichat.gpt3.aichatbot', '_blank');
  };

  return (
    <div className="moving-lines-container">
      <div className="moving-lines row-1">
        {[...lines.slice(0, 7), ...lines.slice(0, 7)].map((line, index) => (
          <div 
            key={index} 
            className="line"
            style={{ background: backgrounds[index], cursor: 'pointer'}}
            onClick={handleButtonClick}
          >
            {line}
          </div>
        ))}
      </div>
      <div className="moving-lines row-2">
        {[...lines.slice(7, 14), ...lines.slice(7, 14)].map((line, index) => (
          <div 
            key={index + 7} 
            className="line"
            style={{ background: backgrounds[index], cursor: 'pointer'}}
            onClick={handleButtonClick}
          >
            {line}
          </div>
        ))}
      </div>
      <div className="moving-lines row-3">
        {[...lines.slice(14), ...lines.slice(14)].map((line, index) => (
          <div 
            key={index + 14} 
            className="line"
            style={{ background: backgrounds[index], cursor: 'pointer'}}
            onClick={handleButtonClick}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};



export default MovingLines;