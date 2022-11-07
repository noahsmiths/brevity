# brevity

## What it does
Brevity is a chrome extension that programmatically ranks your emails based on their urgency and importance. 
Additionally, Brevity provides a short summary of each email, captured by only a few sentences.

## How we built it
Brevity was built using a suite of technologies including OpenAI's GPT3 model, React, Tailwind, Javascript, etc. For the frontend, we started by storyboarding our design, implementing our design in React, and ultimately integrating the GPT3 API to create visual indicators and summarize email contents. For the backend, we began by implementing an OAuth flow to connect to Gmail, and built wrappers for the GPT3 API. We decided to package it as a Chrome extension as it provided a good middle ground between the accessibility of a website and the power of a standalone application.
