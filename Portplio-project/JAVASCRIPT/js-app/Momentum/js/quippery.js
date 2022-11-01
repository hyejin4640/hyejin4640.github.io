const quipperys =[
  {
    quote : 'Nothing in more despicable than respect based on fear. ',
    author : ' -Albert camus-',
  },
  {
    quote: 'Life is a mountain. Your goal is to find your path, not to reach the top.  ',
    author : '–Maxime Lagacé-',
  },
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall. ',
    author : '– Nelson Mandela-',
  },
  {
    quote: 'This too shall pass.',
    author : '-Et hoc transibit-',
  },
  {
    quote : 'Only I can change me life, no one can do it for me. ',
    author : '-Carol Burnett-',
  },
]



const tagQuoteText = document.querySelector('.quote_text');
const tagQuoteAuthor = document.querySelector('.quote_author');
const btnQuoteNext = document.querySelector('.quote > button');


const handlerChaneQuote =()=>{
  const idx = Math.floor(Math.random()*quipperys.length);
  tagQuoteText.textContent=quipperys[idx].quote;
  tagQuoteAuthor.textContent=quipperys[idx].author;
}

const quote_init =()=>{
 handlerChaneQuote();
  btnQuoteNext.addEventListener('click', handlerChaneQuote);
}

quote_init();


