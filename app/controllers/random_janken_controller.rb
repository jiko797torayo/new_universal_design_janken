class RandomJankenController < ApplicationController
  def rock
  end

  def scissors
  end

  def paper
  end

  def random
    random_hands = ["rock", "scissors", "paper"]
    @random_hand = random_hands[rand(3)]
  end
end

