var quotes = [
  'Perfection is not attainable. But if we chase perfection, we can catch excellence. - Vince Lombardi - Head Coach, Green Bay Packers (1959-67)',
  'Success isn\'t measured by money or social rank. Success is measured by your discipline and inner peace. - Mike Ditka - Head Coach, Chicago Bears (1982-92), New Orleans Saints (1997-99)',
 'Leadership is a matter of having people look at you and gain confidence ... If you\'re in control, they\'re in control. - Tom Landry - Head Coach, Dallas Cowboys (1960-88)',
  'Self-praise is for losers. Be a winner. Stand for something. Always have class, and be humble. - John Madden - Head Coach, Oakland Raiders (1969-78)',
  'You fail all the time. But you aren\'t a failure until you start blaming someone else. - Bum Phillips - Head Coach, Houston Oilers (1975-80), New Orleans Saints (1981-85)',
  'If you\'re afraid of confrontation, you\'re not going to do very well. - Bill Parcells - Head Coach, New York Giants (1983-90), New England Patriots (1993-96), New York Jets (1997-00), Dallas Cowboys (2003-06)',
  'Stay focused. Your start does not determine how you are going to finish. - Herm Edwards - Head Coach, New York Jets (2001-05), Kansas City Chiefs (2006-08)',
  'I\'ve observed that if individuals who prevail in a highly competitive environment have any one thing in common besides success, it is failure--and their ability to overcome it. - Bill Walsh - Head Coach, San Francisco 49ers (1979-88)',
  'Adversity is an opportunity for heroism. - Marv Levy - Head Coach, Kansas City Chiefs (1978-82), Buffalo Bills (1986-97)',
  'The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson - Head Coach, Dallas Cowboys (1989-93), Miami Dolphins (1996-99)',
  'The superior man blames himself. The inferior man blames others. - Don Shula - Head Coach, Baltimore Colts (1963-69), Miami Dolphins (1970-95)',
  'Confidence is a very fragile thing, and it certainly is something that has to start with your mental approach and your ability to respond and stay focused and not allow negative thoughts to enter into your own mind. When you\'re successful, it\'s easier to expect success. All of a sudden it\'s not there, it becomes more of a challenge. - Bill Cowher - Head Coach, Pittsburgh Steelers (1992-2006)',
  'There is an old saying about the strength of the wolf is the pack, and I think there is a lot of truth to that. On a team, it\'s not the strength of the individual players, but it is the strength of the unit and how they all function together. - Bill Belichick - Head Coach, New England Patriots (2000-Present), New York Jets (1999), Cleveland Browns (1991-95)',
  'Failures are expected by losers, ignored by winners. - Joe Gibbs - Head Coach, Washington Redskins (1981-92, 2004-07)',
  'Pressure is something that you feel when you don\'t know what you\'re doing. - Chuck Noll - Head Coach, Pittsburgh Steelers (1969-91)',
  'Nobody who ever gave his best regretted it. - George S. Halas - Head Coach, Chicago Bears (1933-42, 1946-55, 1958-67)',
  'When you go into the lion\'s den, you don\'t tippy toe in. You carry a spear, you go in screaming like a banshee, you kick whatever doors in, and say, \'Where\'s the son of a bitch!\' If you go in any other way you\'re just going to lose. - Brian Billick - Head Coach, Baltimore Ravens (1999-2007)',
  'Try to not do too many things at once. Know what you want, the number one thing today and tomorrow. Persevere and get it done. - George Allen - Head Coach, Los Angeles Rams (1957, 1966-70), Chicago Bears (1958-65), Washington Redskins (1971-77)',
  'When you win, say nothing. When you lose, say less. - Paul Brown - Head Coach, Cleveland Browns (1950-62), Cincinnati Bengals (1968-75)',
  'My philosophy? Simplicity plus variety. - Hank Stram - Dallas Texans (1960-74), New Orleans Saints (1976-77)'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
