var quote = document.getElementById("quote");
var author = document.getElementById("author");
var newQuote = document.getElementById("newQuote");
var blockQuote = document.getElementById("blockQuote");

var quotes = [
  {
    content: "Be the change you wish to see in the world",
    author: "Mahatma Gandhi",
  },
  {
    content: "I think, therefore I am",
    author: "René Descartes",
  },
  {
    content:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: "Albert Einstein",
  },
  {
    content:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
    author: "Ralph Waldo Emerson",
  },
  {
    content:
      "It is during our darkest moments that we must focus to see the light",
    author: "Aristotle",
  },
  {
    content: "Life is what happens when you're busy making other plans",
    author: "John Lennon",
  },
  {
    content: "The only way to do great work is to love what you do",
    author: "Steve Jobs",
  },
  {
    content:
      "In three words I can sum up everything I've learned about life: it goes on",
    author: "Robert Frost",
  },
  {
    content:
      "Success is not final, failure is not fatal: it is the courage to continue that counts",
    author: "Winston Churchill",
  },
  {
    content:
      "The future belongs to those who believe in the beauty of their dreams",
    author: "Eleanor Roosevelt",
  },
  {
    content: "The journey of a thousand miles begins with one step",
    author: "Lao Tzu",
  },
  {
    content: "It does not matter how slowly you go as long as you do not stop",
    author: "Confucius",
  },
  {
    content: "Everything you can imagine is real",
    author: "Pablo Picasso",
  },
  {
    content: "The only impossible journey is the one you never begin",
    author: "Tony Robbins",
  },
  {
    content:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us",
    author: "Ralph Waldo Emerson",
  },
  {
    content:
      "Happiness is not something ready made. It comes from your own actions",
    author: "Dalai Lama",
  },
  {
    content: "You must be the change you wish to see in the world",
    author: "Mahatma Gandhi",
  },
  {
    content: "The best way to predict the future is to create it",
    author: "Peter Drucker",
  },
  {
    content:
      "The only person you are destined to become is the person you decide to be",
    author: "Ralph Waldo Emerson",
  },
  {
    content:
      "When you reach the end of your rope, tie a knot in it and hang on",
    author: "Franklin D. Roosevelt",
  },
  {
    content:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn",
    author: "Benjamin Franklin",
  },
  {
    content: "The best revenge is massive success",
    author: "Frank Sinatra",
  },
  {
    content: "Nothing is impossible, the word itself says 'I'm possible'",
    author: "Audrey Hepburn",
  },
  {
    content: "If you want to lift yourself up, lift up someone else",
    author: "Booker T. Washington",
  },
  {
    content: "You miss 100% of the shots you don't take",
    author: "Wayne Gretzky",
  },
  {
    content: "Whether you think you can or you think you can't, you're right",
    author: "Henry Ford",
  },
  {
    content:
      "I have learned over the years that when one's mind is made up, this diminishes fear",
    author: "Rosa Parks",
  },
  {
    content: "Everything has beauty, but not everyone sees it",
    author: "Confucius",
  },
  {
    content:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world",
    author: "Anne Frank",
  },
  {
    content:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it",
    author: "Henry Ford",
  },
  {
    content: "Change your thoughts and you change your world",
    author: "Norman Vincent Peale",
  },
  {
    content:
      "The question isn't who is going to let me; it's who is going to stop me",
    author: "Ayn Rand",
  },
  {
    content: "It is never too late to be what you might have been",
    author: "George Eliot",
  },
  {
    content: "If you can dream it, you can do it",
    author: "Walt Disney",
  },
  {
    content:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck",
    author: "Dalai Lama",
  },
  {
    content: "Life is either a daring adventure or nothing at all",
    author: "Helen Keller",
  },
  {
    content: "The mind is everything. What you think you become",
    author: "Buddha",
  },
  {
    content: "The only true wisdom is in knowing you know nothing",
    author: "Socrates",
  },
  {
    content:
      "If you want to go fast, go alone. If you want to go far, go together",
    author: "African Proverb",
  },
  {
    content: "What we think, we become",
    author: "Buddha",
  },
  {
    content:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandela",
  },
  {
    content: "Life shrinks or expands in proportion to one's courage",
    author: "Anaïs Nin",
  },
  {
    content: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    content: "If you look at what you have in life, you'll always have more",
    author: "Oprah Winfrey",
  },
  {
    content: "Life is 10% what happens to you and 90% how you react to it",
    author: "Charles R. Swindoll",
  },
  {
    content:
      "Keep your face always toward the sunshine - and shadows will fall behind you",
    author: "Walt Whitman",
  },
  {
    content:
      "Do not go where the path may lead, go instead where there is no path and leave a trail",
    author: "Ralph Waldo Emerson",
  },
  {
    content:
      "Success usually comes to those who are too busy to be looking for it",
    author: "Henry David Thoreau",
  },
  {
    content: "The future depends on what you do today",
    author: "Mahatma Gandhi",
  },
  {
    content: "Believe you can and you're halfway there",
    author: "Theodore Roosevelt",
  },
  {
    content:
      "Don't judge each day by the harvest you reap but by the seeds that you plant",
    author: "Robert Louis Stevenson",
  },
  {
    content: "The secret of getting ahead is getting started",
    author: "Mark Twain",
  },
  {
    content:
      "All our dreams can come true if we have the courage to pursue them",
    author: "Walt Disney",
  },
  {
    content: "It always seems impossible until it's done",
    author: "Nelson Mandela",
  },
  {
    content: "The power of imagination makes us infinite",
    author: "John Muir",
  },
  {
    content: "Try to be a rainbow in someone's cloud",
    author: "Maya Angelou",
  },
  {
    content:
      "Never let the fear of striking out keep you from playing the game",
    author: "Babe Ruth",
  },
  {
    content: "Life is really simple, but we insist on making it complicated",
    author: "Confucius",
  },
  {
    content: "We may encounter many defeats but we must not be defeated",
    author: "Maya Angelou",
  },
  {
    content: "Love all, trust a few, do wrong to none",
    author: "William Shakespeare",
  },
  {
    content: "When you cease to dream you cease to live",
    author: "Malcolm Forbes",
  },
  {
    content: "A person who never made a mistake never tried anything new",
    author: "Albert Einstein",
  },
  {
    content:
      "The only limit to our realization of tomorrow will be our doubts of today",
    author: "Franklin D. Roosevelt",
  },
  {
    content: "Creativity is intelligence having fun",
    author: "Albert Einstein",
  },
  {
    content: "Do what you can, with what you have, where you are",
    author: "Theodore Roosevelt",
  },
  {
    content: "Hope is a waking dream",
    author: "Aristotle",
  },
  {
    content: "Everything you've ever wanted is on the other side of fear",
    author: "George Addair",
  },
  {
    content: "Make each day your masterpiece",
    author: "John Wooden",
  },
  {
    content: "No one can make you feel inferior without your consent",
    author: "Eleanor Roosevelt",
  },
  {
    content: "Happiness depends upon ourselves",
    author: "Aristotle",
  },
  {
    content: "Dream big and dare to fail",
    author: "Norman Vaughan",
  },
  {
    content: "It is never too late to be what you might have been",
    author: "George Eliot",
  },
  {
    content: "You must do the thing you think you cannot do",
    author: "Eleanor Roosevelt",
  },
  {
    content: "Light tomorrow with today",
    author: "Elizabeth Barrett Browning",
  },
  {
    content: "The purpose of our lives is to be happy",
    author: "Dalai Lama",
  },
  {
    content: "Don't wait. The time will never be just right",
    author: "Napoleon Hill",
  },
  {
    content:
      "Life is a succession of lessons which must be lived to be understood",
    author: "Helen Keller",
  },
  {
    content: "Turn your wounds into wisdom",
    author: "Oprah Winfrey",
  },
  {
    content: "The past cannot be changed. The future is yet in your power",
    author: "Mary Pickford",
  },
  {
    content: "Victory belongs to the most persevering",
    author: "Napoleon Bonaparte",
  },
  {
    content:
      "Live as if you were to die tomorrow. Learn as if you were to live forever",
    author: "Mahatma Gandhi",
  },
  {
    content: "What we achieve inwardly will change outer reality",
    author: "Plutarch",
  },
  {
    content: "Action is the foundational key to all success",
    author: "Pablo Picasso",
  },
  {
    content: "Every moment is a fresh beginning",
    author: "T.S. Eliot",
  },
  {
    content: "Never regret anything that made you smile",
    author: "Mark Twain",
  },
  {
    content: "You must expect great things of yourself before you can do them",
    author: "Michael Jordan",
  },
  {
    content: "Magic is believing in yourself",
    author: "Johann Wolfgang von Goethe",
  },
  {
    content: "Peace begins with a smile",
    author: "Mother Teresa",
  },
  {
    content: "Life is made of ever so many partings welded together",
    author: "Charles Dickens",
  },
  {
    content: "Happiness is not by chance, but by choice",
    author: "Jim Rohn",
  },
  {
    content: "Life is trying things to see if they work",
    author: "Ray Bradbury",
  },
  {
    content: "The key to success is action",
    author: "Tony Robbins",
  },
  {
    content: "Make your life a masterpiece",
    author: "Leonardo da Vinci",
  },
  {
    content: "Time is always right to do what is right",
    author: "Martin Luther King Jr.",
  },
  {
    content: "Stars can't shine without darkness",
    author: "Unknown",
  },
  {
    content: "What you do speaks so loudly that I cannot hear what you say",
    author: "Ralph Waldo Emerson",
  },
  {
    content:
      "To succeed in life, you need two things: ignorance and confidence",
    author: "Mark Twain",
  },
  {
    content: "Strive not to be a success, but rather to be of value",
    author: "Albert Einstein",
  },
  {
    content:
      "The harder you work for something, the greater you'll feel when you achieve it",
    author: "Unknown",
  },
  {
    content:
      "The best time to plant a tree was 20 years ago. The second best time is now",
    author: "Chinese Proverb",
  },
  {
    content: "Rise above the storm and you will find the sunshine",
    author: "Mario Fernández",
  },
  {
    content: "Wherever you go, go with all your heart",
    author: "Confucius",
  },
  {
    content:
      "Yesterday is not ours to recover, but tomorrow is ours to win or lose",
    author: "Lyndon B. Johnson",
  },
  {
    content: "The only way to have a friend is to be one",
    author: "Ralph Waldo Emerson",
  },
  {
    content:
      "Life is not about finding yourself. Life is about creating yourself",
    author: "George Bernard Shaw",
  },
  {
    content: "Every strike brings me closer to the next home run",
    author: "Babe Ruth",
  },
  {
    content:
      "The difference between ordinary and extraordinary is that little extra",
    author: "Jimmy Johnson",
  },
  {
    content: "Don't count the days, make the days count",
    author: "Muhammad Ali",
  },
];

// This code works normally, but the random number can repeat itself.
// =================================================================//

/* function addnewQuote() {
  blockQuote.classList.remove("d-none");
  var randomNum = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNum];
  quote.innerText = `"${randomQuote.content}"`;
  author.innerText = `📌
   "${randomQuote.author}".`;
}
 */

// ======================= Solving this problem ======================//

// Here I will Create a newArray to push the random Number in it.
var newArray = [];

function addnewQuote() {
  blockQuote.classList.remove("d-none");
  // then this if condition, to empty newArray.
  if (newArray.length === quotes.length) {
    newArray = [];
  }
  //  I use a do ...while loop to check if a random number is in the newArray.
  var randomNum;
  do {
    randomNum = Math.floor(Math.random() * quotes.length);
  } while (newArray.includes(randomNum));
  // in every click push the random number in newArray
  newArray.push(randomNum);
  // display Quotes
  var randomQuote = quotes[randomNum];
  quote.innerText = `" ${randomQuote.content} "`;
  author.innerText = `📌
   "${randomQuote.author}".`;
}
