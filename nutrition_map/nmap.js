$(function(){
    window.PLOTLYENV=window.PLOTLYENV || {};
    window.PLOTLYENV.BASE_URL='https://plotly.geoplot.com';

    if (document.getElementById("nut_plot")) {
        Plotly.newPlot(
            'nut_plot',
            [
                {
                    "autocolorscale": false,
                    "colorscale": "Hot",
                    "locationmode": "country names", 
                    "locations": ["Australia", "New Zealand", "Belgium", "Netherlands", "Canada", "Cuba", "Jamaica", "Puerto Rica", "Antigua and Barbuda", "Trinidad and Tobago", "Barbados", "Dominica", "Grenada", "Haiti", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "The Bahamas", "Costa Rica", "Guatemala", "Honduras", "China", "Mongolia", "Austria", "Germany", "Switzerland", "Czech Republic", "Hungary", "Poland", "Moldova", "Russia", "Belarus", "Bulgaria", "Slovakia", "Romania", "Ukraine", "France", "Greece", "Bangladesh", "India", "Nepal", "Pakistan", "Ireland", "Italy", "Japan", "Korea", "Mexico", "Egypt", "Iraq", "Israel", "Jordan", "Lebanon", "Palestine", "Yemen", "Saudi Arabia", "Turkey", "Bahrain", "Kuwait", "Oman", "Qatar", "Syria", "United Arab Emirates", "Libya", "Morocco", "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Comoros", "Cunha", "Democratic Republic of the Congo", "Djibouti", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Mayotte", "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo", "Runion", "Rwanda", "Saint Helena, Ascension and Tristan da", "Senegal", "Seychelles", "Sierra Leone", "So Tom and Prncipe", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Western Sahara", "Zambia", "Zimbabwe", "Denmark", "Finland", "Iceland", "Norway", "Sweden", "Argentina", "Brazil", "Chile", "Colombia", "Ecuador", "Peru", "Venezuela", "Suriname", "Guyana", "Bolivia", "Paraguay", "Uruguay", "Venezuela", "Cambodia", "Laos", "Philippenes", "Indonesia", "Malaysia", "Vietnam", "Portugal", "Spain", "Thailand", "England", "Scotland", "UK", "Welsh", "US"],
                    "marker": {
                        "line": {
                        "color": "rgb(255,255,255)", 
                        "width": 0.1
                        }
                    },

                    "reversescale": true, 
                    "showscale": true, 
                    "text": ["Australian<br>", "Australian<br>", "Belgian<br>", "Belgian<br>", "Canadian<br>", "Caribbean<br>", "Caribbean<br>", "Caribbean<br>", "Caribbean<br>", "Caribbean<br>", "Caribbean<br>", "Caribbean<br>", "Caribbean<br>", "Caribbean<br>", "Caribbean<br>", "Caribbean<br>", "Caribbean<br>", "Caribbean<br>", "Central American<br>", "Central American<br>", "Central American<br>", "Chinese and Mongolian<br>", "Chinese and Mongolian<br>", "Deutschland<br>", "Deutschland<br>", "Deutschland<br>", "Eastern European<br>", "Eastern European<br>", "Eastern European<br>", "Eastern European<br>", "Eastern European<br>", "Eastern European<br>", "Eastern European<br>", "Eastern European<br>", "Eastern European<br>", "Eastern European<br>", "French<br>", "Greek<br>", "Indian Subcontinent<br>", "Indian Subcontinent<br>", "Indian Subcontinent<br>", "Indian Subcontinent<br>", "Irish<br>", "Italian<br>", "Japanese<br>", "Korean<br>", "Mexican<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Middle Eastern<br>", "Northern Africa<br>", "Northern Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Rest Africa<br>", "Scandinavian<br>", "Scandinavian<br>", "Scandinavian<br>", "Scandinavian<br>", "Scandinavian<br>", "South American<br>", "South American<br>", "South American<br>", "South American<br>", "South American<br>", "South American<br>", "South American<br>", "South American<br>", "South American<br>", "South American<br>", "South American<br>", "South American<br>", "South American<br>", "Southeast Asian<br>", "Southeast Asian<br>", "Southeast Asian<br>", "Southeast Asian<br>", "Southeast Asian<br>", "Southeast Asian<br>", "Spanish and Portuguese<br>", "Spanish and Portuguese<br>", "Thai<br>", "UK<br>", "UK<br>", "UK<br>", "UK<br>", "US<br>"],
                    "type": "choropleth", 
                    "uid": "616d2202-3fab-400d-8f2b-f514b1125ebc", 
                    "z": [28140.89, 28140.89, 16200.11, 16200.11, 3048.93, 4331.08, 4331.08, 4331.08, 4331.08, 4331.08, 4331.08, 4331.08, 4331.08, 4331.08, 4331.08, 4331.08, 4331.08, 4331.08, 3809.65, 3809.65, 3809.65, 6625.6, 6625.6, 15425.71, 15425.71, 15425.71, 7865.88, 7865.88, 7865.88, 7865.88, 7865.88, 7865.88, 7865.88, 7865.88, 7865.88, 7865.88, 6127.18, 12592.21, 14730.32, 14730.32, 14730.32, 14730.32, 5416.38, 6053.78, 9602.47, 6791.62, 2745.09, 14377.5, 14377.5, 14377.5, 14377.5, 14377.5, 14377.5, 14377.5, 14377.5, 14377.5, 14377.5, 14377.5, 14377.5, 14377.5, 14377.5, 14377.5, 23072.1, 23072.1, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 21700.32, 15576.31, 15576.31, 15576.31, 15576.31, 15576.31, 8151.2, 8151.2, 8151.2, 8151.2, 8151.2, 8151.2, 8151.2, 8151.2, 8151.2, 8151.2, 8151.2, 8151.2, 8151.2, 17707.57, 17707.57, 17707.57, 17707.57, 17707.57, 17707.57, 6807.69, 6807.69, 16662.59, 17211.18, 17211.18, 17211.18, 17211.18, 2152.8]
                }
            ],
            {
                "geo": {
                    "lakecolor": "rgb(0, 191, 200)", 
                    "oceancolor": "#c5ebeb", 
                    "projection": {"type": "natural earth"}, 
                    "scope": "world", 
                    "showlakes": true, 
                    "showocean": true
                },

                "title": {
                    "text": "<b>Average calories across cuisines<b>"
                }
            },

            {
                "showLink": false, 
                "linkText": "Export to plotly.geoplot.com", 
                "responsive": false, 
                "plotlyServerURL": "https://plotly.geoplot.com"
            }
        )
    };
});