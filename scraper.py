from bs4 import BeautifulSoup
import requests

from helpers import *


class Scraper():
    def __init__(self):
        self.url = "https://www.kupi.cz/sleva/energeticky-napoj-monster-energy"
        
    def get_sales(self):
        html = requests.get(self.url).text
        soup = BeautifulSoup(html, "lxml")
        sales = list(soup.find_all(class_="discount_row"))
        return sales
    
    def convert_to_json(self, sales):
        result = []
        for listing in sales:
            shop = listing.select_one(".discounts_shop_name span").text
            price = listing.select_one(".discounts_price strong").text

            shop = handle_shop(shop)
            price = handle_price(price)

            data = {
                "price":price,
                "shop":shop,
            }

            if data not in result:
                result.append(data)

        return result

    