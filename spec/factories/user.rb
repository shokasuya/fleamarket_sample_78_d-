FactoryBot.define do

  factory :user do
    nickname              {"taro"}
    email                 {"kkk@gmail.com"}
    password              {"aaaaaaa1"}
    password_confirmation {"aaaaaaa1"}
    first_name            {"太郎"}
    last_name             {"田中"}
    first_name_kana       {"タロウ"}
    last_name_kana        {"タナカ"}
    birthday              {20201213}
  end

end

