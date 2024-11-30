# FUT_Champions

## Overview
FUT Team Builder is a web application designed for users to create their own FIFA Ultimate Team (FUT) squad. The app provides an interactive experience where users can add, position, and modify players while adhering to tactical formations such as 4-4-2 or 4-3-3. The project emphasizes a dynamic user interface, data management via localStorage, and responsive design.

## Features

**Dynamic Player Addition**:
- Add players using a form with fields for name, position, rating, statistics, and other details.
- Automatically adapt positions based on the selected tactical formation.
  
**Tactical Formations**:
*Supports predefined formations*:
- 4-3-3: Includes GK, CBs, LB, RB, CMs, LW, RW, and ST.
- 4-4-2: Includes GK, CBs, LB, RB, CMs, RM, LM, and STs.
- Automatically adjust player positions to match the selected formation.
  
**Player Card Management**:
Add, modify, and delete player cards via the UI.
Limit to 11 players in the main formation, with additional players reserved for substitutions.

**Team Chemistry Calculation**:
Dynamically calculate chemistry scores based on factors like:
Correct positioning.
Links between players from the same club, league, or nationality.
Highlight strong and weak chemistry links visually.

**Dynamic Form Handling**:
Add or remove players dynamically while respecting formation rules.

**Data Persistence with localStorage**:
Save formations and player data for later use.
Load saved data automatically when the application starts.
Responsive Design:

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript ,tailwind
- **Data Storage**: Local Storage (or database if applicable)

## Installation
- Clone this repository:
   git clone https://github.com/Taouil-abdo/FUT_Champions.git

## Usage
-  Enter your personal details, work experience, education, skills, and any other relevant information.
-  Preview the CV in real-time.
-  Customize the template style if desired.
-  Download the final CV as a PDF when you're ready.

## Contributing
------------

* We welcome contributions! To contribute to FUT_Champions, follow these steps:

 - Fork the repository.
 - Create a new branch (e.g., feature/your-feature-name).
 - Make your changes.
 - Submit a pull request for review.

## License
-------

* Youcode

## Authors
-------

* Taouil-abdo - Initial work and development.
* Aymane Benhima - Formateur and guidance.
