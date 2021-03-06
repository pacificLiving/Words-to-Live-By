app.controller("quotesController", function($scope) {
    $scope.quotes = [
        "Never cancel dinner plans by text message.",
        "Don't knock it 'till you try it.",
        "If a street performer makes you stop walking, you owe him a buck.",
        "Always use 'we' when referring to your home team.",
        "When entrusted with a secret, keep it.",
        "Don't underestimate free throws in a game of HORSE.",
        "Just because you can doesn't mean you should.",
        "Don't dumb yourself down.",
        "You only get one chance to notice a new haircut.",
        "If you’re staying more than one night, unpack.",
        "Never park in front of a bar.",
        "Expect the seat in front of you to recline. Prepare accordingly.",
        "Keep a picture of your first fish, first car, and first girlfriend / boyfriend.",
        "Hold your heroes to a high standard.",
        "A suntan is earned, not bought.",
        "Never lie to your doctor.",
        "All guns are loaded.",
        "Don't mention sunburns. Believe me, they know.",
        "The best way to show thanks is to wear it. Even if it's only once.",
        "Take a vacation of your cell phone, internet, and TV once a year.",
        "Don't fill up on bread, no matter how good.",
        "A handshake beats an autograph.",
        "Don't linger in the doorway. In or out.",
        "If you choose to go in drag, don't sell yourself short.",
        "If you want to know what makes you unique, sit for a caricature.",
        "Never get your haircut the day of a special event.",
        "Be mindful of what comes between you and the Earth. Always buy good shoes, tires and sheets.",
        "Never eat lunch at your desk if you can avoid it.",
        "When you're with new friends, don’t just talk about old friends.",
        "Eat lunch with the new kids.",
        "When traveling, keep your wits about you. No matter where you are.",
        "It's never too late for an apology.",
        "Don't pose with booze. It's unbecoming.",
        "If you have the right of way, take it.",
        "You don't get to choose your own nickname.",
        "When you marry someone, remember you marry their entire family.",
        "Never push someone off a dock.",
        "Under no circumstances should you ask a woman if she is pregnant.",
        "It's not enough to be proud of your ancestry, live up to it.",
        "Don't make a scene.",
        "When giving a thank you speech, short and sweet is best.",
        "Know when to ignore the camera.",
        "Never gloat.",
        "Invest in great luggage.",
        "Make time for your mother on your birthday. It's a special day for her too.",
        "When opening presents, no one likes a good guesser.",
        "Give credit. Take blame.",
        "Sympathy is a crutch. Never fake a limp.",
        "Suck it up every now and then.",
        "Never be the last one in the pool.",
        "Don't stare.",
        "Address everyone that carries a firearm professionally.",
        "Stand up to bullies. You only have to do it once.",
        "If you've made your point, stop talking.",
        "Admit it when you're wrong.",
        "If you offer to help, don't quit until the job is done.",
        "Look people in the eye when you thank them.",
        "Thank the bus driver.",
        "Never answer the phone at the dinner table.",
        "Forgive yourself for your mistakes.",
        "Know at least one good joke.",
        "Don't boo. Even the ref is somebody's son.",
        "Know how to cook one good meal.",
        "Learn to drive manual/stick shift.",
        "Be cool to younger kids. Reputations are built over a lifetime.",
        "It's okay to go to the movies by yourself.",
        "Dance with your mother / father.",
        "Don't lose your cool. Especially at work.",
        "Always thank the host.",
        "If you don't understand, ask before it's too late.",
        "Know the size of your boyfriend's / girlfriend's clothes.",
        "There is nothing wrong with a plain t-shirt.",
        "Be a good listener. Don't just take your turn to talk.",
        "Keep your word.",
        "In college always sit near the front. You'll stand out immediately and come grade time it will come in handy.",
        "Carry your mother's bags. She carried you for 9 months.",
        "Be patient with airport security. They are just doing their job.",
        "Don't be the talker in a movie.",
        "The opposite sex likes people who shower.",
        "You are what you do. Not what you say.",
        "Learn to change a tire.",
        "Be kind. Everyone has a hard fight ahead of them.",
        "An hour with grandparents is time well spent. Ask for advice when you need it.",
        "Don't litter.",
        "If you have a sister, get to know her boyfriend. Your opinion is important.",
        "You won't always be the strongest or fastest. But you can be the toughest.",
        "Never call someone before 9am or after 9pm.",
        "Buy the orange properties in Monopoly.",
        "Make the little things count.",
        "Always wear a bra to work.",
        "There is a fine line between looking sultry and slutty. Find it.",
        "You're never too old to need your Mom.",
        "Ladies, if you make the decision to wear heels on the first date commit to keeping them on and don't complain about how much your feet hurt.",
        "Know the words to your national anthem.",
        "Your dance moves might not be the best, but I promise making a fool of yourself is more fun than sitting on the bench alone.",
        "Smile at strangers.",
        "Make Goals.",
        "Being old is not dictated by your bedtime.",
        "If you have to fight, punch first and punch hard."
    ];
    $scope.currentQuote = "There are plenty of ways to enter a pool. The stairs is not one of them.";
    $scope.randomQuote = function() {
        var $newQuote = $scope.quotes[Math.floor(98 * Math.random() + 1)];
        var $quoteDiv = $("#quoteDiv");
        var $tbut = $("#tbut");
        $tbut.html("");
        twttr.widgets.createShareButton(
            'http://wordstoliveby.herobo.com/',
            document.getElementById('tbut'),
            {
              text: $newQuote,
              count: "none"
            }
          );
        $quoteDiv.hide();
        $scope.currentQuote = $newQuote;
        $quoteDiv.fadeIn(1000);
    };
});
