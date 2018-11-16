import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { User } from '../model/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  textArray = ["Life isn’t about getting and having, it’s about giving and being.", "Whatever the mind of man can conceive and believe, it can achieve.", "Strive not to be a success, but rather to be of value.", "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "I attribute my success to this: I never gave or took any excuse.", "You miss 100% of the shots you don’t take.", "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "The most difficult thing is the decision to act, the rest is merely tenacity.", "Every strike brings me closer to the next home run.", "Definiteness of purpose is the starting point of all achievement.", "We must balance conspicuous consumption with conscious capitalism.", "Life is what happens to you while you’re busy making other plans.", "We become what we think about.", "14.Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "15.Life is 10% what happens to me and 90% of how I react to it.", "The most common way people give up their power is by thinking they don’t have any.", "The mind is everything. What you think you become.", "The best time to plant a tree was 20 years ago. The second best time is now.", "An unexamined life is not worth living.", "Eighty percent of success is showing up.", "Your time is limited, so don’t waste it living someone else’s life.", "Winning isn’t everything, but wanting to win is.", "I am not a product of my circumstances. I am a product of my decisions.", "Every child is an artist.  The problem is how to remain an artist once he grows up.", "You can never cross the ocean until you have the courage to lose sight of the shore.", "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Either you run the day, or the day runs you.", "Whether you think you can or you think you can’t, you’re right.", "The two most important days in your life are the day you are born and the day you find out why.", "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.", "The best revenge is massive success.", "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.", "Life shrinks or expands in proportion to one’s courage.", "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", "The only person you are destined to become is the person you decide to be.", "Go confidently in the direction of your dreams.  Live the life you have imagined.", "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", "Certain things catch your eye, but pursue only those that capture the heart.", "Believe you can and you’re halfway there.", "Everything you’ve ever wanted is on the other side of fear.", "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."];
  randomText = this.textArray[Math.floor(Math.random() * this.textArray.length)];

  showButtons: boolean = false;
  form: boolean = false;

  user: User = new User();
  
  constructor(private loginService: LoginService) { }
  
  ngOnInit() {
    //console.log(this.randomText)
  }

  doLogin() {
    this.loginService.doLogin(this.user);
  }

  valueChanged(e) {
    //console.log('valor', e);
    if (e == 0) {
      //console.log('chegou em 0');
      this.showButtons = !this.showButtons;
    }
  }

  showForm() {
    this.form = !this.form;
    this.showButtons = !this.showButtons;
  }

  back() {
    this.form = !this.form;
    this.showButtons = !this.showButtons;
  }
  
}
