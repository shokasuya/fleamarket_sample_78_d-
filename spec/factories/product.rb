FactoryBot.define do

  factory :product do
    name                  {"パンツ"}
    description           {"かっこいいです"}
    price                 {100}
    condition             {2}
    status                {1}
    send_price            {1}
    shipping_date          {1}
    brand                 {"エルメス"}
    prefecture_id         {1}
    size                 {1}
    user
  end

end