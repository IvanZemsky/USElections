import type { Election } from '../types/election'

export const elections: Election[] = [
  {
    id: '1',
    type: 'Presidential',
    date: '2024-11-05',
    desc: "Presidential elections were held in the United States on November 5, 2024. The Republican Party's ticket— Donald Trump, who was the 45th president of the United States from 2017 to 2021, and JD Vance, the junior U.S. senator from Ohio — defeated the Democratic Party's ticket — Kamala Harris, the U.S. vice president, and Tim Walz, the governor of Minnesota.",
    sides: [
      {
        party: 'Republican',
        candidate: 'Trump',
        logo: './republicanLogo2024.jpg',
        popularVotes: 77797070,
        electoralVotes: 312,
        color: 'red-500',
      },
      {
        party: 'Democratic',
        candidate: 'Harris',
        logo: './democraticLogo2024.jpg',
        popularVotes: 75221315,
        electoralVotes: 226,
        color: 'blue-400',
      },
    ],
  },
]
