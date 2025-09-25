def handle_shop(text):
    text = text.strip()
    return text


def handle_price(text):
    text = text.strip()
    text = text.split()[0]
    return text