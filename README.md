# Authors

- Yegizbayev Arlan  
- Batyrbaeva Balzhan  
- Alpamys Aisulu  

---

**Restaurant review platform
Project description
A web-based platform designed to allow users to discover restaurants, view their menus, and leave reviews. The platform supports search functionality, user-generated content (reviews), and displays detailed restaurant information.
**Restaurant review platform REST API
GET /api/restaurants/
GET /api/restaurants/:id/menu/
GET /api/restaurants/:id/reviews/
DB Structure

**Table restaurant {
    id bigserial [primary key]
    name text
    description text
    image_url text [nullable]
}
**Table menu {
    id bigserial [primary key]
    restaurant_id bigint NOT NULL REFERENCES restaurant
    name text
}
Table dish_category {
    id bigserial [primary key]
    name text
}
Table dish {
    id bigserial [primary key]
    menu_id bigint NOT NULL REFERENCES menu
    category_id bigint NOT NULL REFERENCES dish_category
    name text
    description text [nullable]
    price decimal(6,2)
}
Table review {
    id bigserial [primary key]
    restaurant_id bigint NOT NULL REFERENCES restaurant
    user_id bigint NOT NULL REFERENCES users
    text text
    rating integer [default: 5]
    created_at timestamp [default: current_timestamp]
}
