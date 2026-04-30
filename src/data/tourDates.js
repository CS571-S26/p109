const tourDates = [
    {
        id: 0,
        date: "May 22, 2026",
        city: "Barcelona",
        country: "Spain",
        venue:"Estadi Olimpic Lluis Companys",
        ticketLink: "https://www.livenation.es/bad-bunny-tickets-adp1124216"
    },
    {
        id: 1,
        date: "May 23, 2026",
        city: "Barcelona",
        country: "Spain",
        venue:"Estadi Olimpic Lluis Companys",
        ticketLink: "https://www.livenation.es/bad-bunny-tickets-adp1124216"
    },
    {
        id: 2,
        date: "May 26, 2026",
        city: "Lisbon",
        country: "Portugal",
        venue:"Estadio Da Luz",
        ticketLink: "https://www.livenation.pt/bad-bunny-tickets-adp1124216"
    },
    {
        id: 3,
        date: "May 27, 2026",
        city: "Lisbon",
        country: "Portugal",
        venue:"Estadio Da Luz",
        ticketLink:"https://www.livenation.pt/bad-bunny-tickets-adp1124216"
    },
    {
        id: 4,
        date: "May 30, 2026",
        city: "Madrid",
        country: "Spain",
        venue:"Riyadh Air Metropolitano",
        ticketLink:"https://www.livenation.es/bad-bunny-tickets-adp1124216"
    },
    {
        id: 5,
        date: "May 31, 2026",
        city: "Madrid",
        country: "Spain",
        venue:"Riyadh Air Metropolitano",
        ticketLink:"https://www.livenation.es/bad-bunny-tickets-adp1124216"
    },
    {
        id: 6,
        date: "June 02, 2026",
        city: "Madrid",
        country: "Spain",
        venue:"Riyadh Air Metropolitano",
        ticketLink:"https://www.livenation.es/bad-bunny-tickets-adp1124216"
    },
    {
        id: 7,
        date: "June 03, 2026",
        city: "Madrid",
        country: "Spain",
        venue:"Riyadh Air Metropolitano",
        ticketLink:"https://www.livenation.es/bad-bunny-tickets-adp1124216"
    },
    {
        id: 8,
        date: "June 06, 2026",
        city: "Madrid",
        country: "Spain",
        venue:"Riyadh Air Metropolitano",
        ticketLink:"https://www.livenation.es/bad-bunny-tickets-adp1124216"
    },
    {
        id: 9,
        date: "June 07, 2026",
        city: "Madrid",
        country: "Spain",
        venue:"Riyadh Air Metropolitano",
        ticketLink:"https://www.livenation.es/bad-bunny-tickets-adp1124216"
    },
    {
        id: 10,
        date: "June 10, 2026",
        city: "Madrid",
        country: "Spain",
        venue:"Riyadh Air Metropolitano",
        ticketLink:"https://www.livenation.es/bad-bunny-tickets-adp1124216"
    },
    {
        id: 11,
        date: "June 11, 2026",
        city: "Madrid",
        country: "Spain",
        venue:"Riyadh Air Metropolitano",
        ticketLink:"https://www.livenation.es/bad-bunny-tickets-adp1124216"
    },
    {
        id: 12,
        date: "June 14, 2026",
        city: "Madrid",
        country: "Spain",
        venue:"Riyadh Air Metropolitano",
        ticketLink:"https://www.livenation.es/bad-bunny-tickets-adp1124216"
    },
    {
        id: 13,
        date: "June 15, 2026",
        city: "Madrid",
        country: "Spain",
        venue:"Riyadh Air Metropolitano",
        ticketLink:"https://www.livenation.es/bad-bunny-tickets-adp1124216"
    },
    {
        id: 14,
        date: "June 20, 2026",
        city: "Dusseldorf",
        country: "Germany",
        venue:"Merkur Spiel-Arenao",
        ticketLink:"https://www.livenation.de/bad-bunny-tickets-adp1124216"
    },
    {
        id: 15,
        date: "June 21, 2026",
        city: "Dusseldorf",
        country: "Germany",
        venue:"Merkur Spiel-Arenao",
        ticketLink:"https://www.livenation.de/bad-bunny-tickets-adp1124216"
    },
    {
        id: 16,
        date: "June 23, 2026",
        city: "Arnhem",
        country: "The Netherlands",
        venue:"GelreDome",
        ticketLink:"https://www.livenation.nl/bad-bunny-tickets-adp1124216"
    },
    {
        id: 17,
        date: "June 24, 2026",
        city: "Arnhem",
        country: "The Netherlands",
        venue:"GelreDome",
        ticketLink:"https://www.livenation.nl/bad-bunny-tickets-adp1124216"
    },
    {
        id: 18,
        date: "June 27, 2026",
        city: "London",
        country: "United Kingdom",
        venue:"Tottenham Hotspur Stadium",
        ticketLink:"https://www.livenation.co.uk/bad-bunny-tickets-adp1124216"
    },
    {
        id: 19,
        date: "June 28, 2026",
        city: "London",
        country: "United Kingdom",
        venue:"Tottenham Hotspur Stadium",
        ticketLink:"https://www.livenation.co.uk/bad-bunny-tickets-adp1124216"
    },
    {
        id: 20,
        date: "July 01, 2026",
        city: "Marseille",
        country: "France",
        venue:"Orange Velodrome",
        ticketLink:"https://www.livenation.fr/bad-bunny-tickets-adp1124216"
    },
    {
        id: 21,
        date: "July 04, 2026",
        city: "Paris",
        country: "France",
        venue:"La Defense Arena",
        ticketLink:"https://www.livenation.fr/bad-bunny-tickets-adp1124216"
    },
    {
        id: 22,
        date: "July 05, 2026",
        city: "Paris",
        country: "France",
        venue:"La Defense Arena",
        ticketLink:"https://www.livenation.fr/bad-bunny-tickets-adp1124216"
    },
    {
        id: 23,
        date: "July 10, 2026",
        city: "Stockholm",
        country: "Sweden",
        venue:"Strawberry Arena",
        ticketLink:"https://www.livenation.se/bad-bunny-tickets-adp1124216"
    },
    {
        id: 24,
        date: "July 11, 2026",
        city: "Stockholm",
        country: "Sweden",
        venue:"Strawberry Arena",
        ticketLink:"https://www.livenation.se/bad-bunny-tickets-adp1124216"
    },
    {
        id: 25,
        date: "July 14, 2026",
        city: "Warsaw",
        country: "Poland",
        venue:"PGE Narodowy",
        ticketLink:"https://www.livenation.pl/bad-bunny-tickets-adp1124216"
    },
    {
        id: 26,
        date: "July 17, 2026",
        city: "Milan",
        country: "Italy",
        venue:"Ippodromo Snai La Maura",
        ticketLink:"https://www.livenation.it/bad-bunny-tickets-adp1124216"
    },
    {
        id: 27,
        date: "July 18, 2026",
        city: "Milan",
        country: "Italy",
        venue:"Ippodromo Snai La Maura",
        ticketLink:"https://www.livenation.it/bad-bunny-tickets-adp1124216"
    },
    {
        id: 28,
        date: "July 22, 2026",
        city: "Brussels",
        country: "Belgium",
        venue:"King Baudouin Stadium",
        ticketLink:"https://www.livenation.be/bad-bunny-tickets-adp1124216"
    }
]

export default tourDates;