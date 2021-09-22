# FMSKINCAREA

A community website that contains a range of local skincare products that do not contain alcohol, synthetic fragrances, essential oils and have an official distribution license from BPOM for gentle skincare users.

---

## Models:

_Category_

```
- name : string, required
```

_Product_

```
- brand_name : string, required
- product_name : string, required
- bpom_number : string, required
- description : text, required
- how_to_use : text, required
- ingredients_list : text, required
- image_URL : string, required
- marketplace_URL : string, required
- social_media_URL : string, required
- CategoryId : integer, required
```

_Message_
```
- name : string, required
- email : string, required
- subject : string, required
- message : text, required
```

---

## Associations :
>### **One-To-Many**
>- Categories and Product = **One-To-Many**

---

## Endpoints :

List of available endpoints:

- `POST /messages`
- `DELETE /messages/:id`

- `GET /products`
- `GET /products/:categoryId`
- `GET /products/:categoryId/:id`
- `POST /products`
- `PUT /products/:id`
- `DELETE /products/:id`

---

## POST /messages
Description: Sending suggestion from user to admin

Request:

- Data:

```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "text"
}
```

Response:

- Status: 201
- Body:

```json
{
  "name": "user's name",
  "email": "user's email",
  "subject": "user's subject message",
  "message": "user's message"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name is required"
}
OR
{
  "message": "Invalid email format"
}
```
---

## DELETE /messages/:id
Description: Delete user's suggestion message by id

Request:

- Params:
    - id: "integer"

Response:

- Status: 200
- Body:

```json
{
  "message": "Message has successfully been deleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Message is not found"
}
```

---

## GET /products
Description: Show all products

Response:

- Status: 200
- Body:

```json
[
  {
    "id": 1,
    "brand_name": "HALE",
    "product_name": "Honey, I Dew",
    "size": "85 ml",
    "bpom_number": "NA18201204813",
    "description": "A mildly acidic (pH: 5.00-6.00) sulfate-free cleanser that thoroughly removes impurities without irritating the skin; with honey extract and glycerin as hydrators, making the skin feel soft and supple",
    "how_to_use": "Rub the gel cleanser between your hands with water to lather into a gentle foam. Massage onto wet face, and then rinse with water",
    "ingredients_list": "Aqua, Sodium Methyl Cocoyl Taurate, Cocamidopropyl Betaine, Glycerin, Hydroxyethylcellulose, Honey Extract, Poly Acrylate Crospolymer, Citric Acid, Phenoxyethanol, Caprylhydroxamic Acid, Methylpropanediol, Imidazolidinyl Urea, Disodium EDTA",
    "image_URL": "https://cdn.shopify.com/s/files/1/2588/0486/products/fb829e3d-733d-4020-86bf-65169ade9ef7_900x.jpg?v=1611050671",
    "marketplace_URL": "https://shopee.co.id/hale.id",
    "social_media_URL": "https://www.instagram.com/think.hale/",
    "CategoryId": 1
  },
  {
    "id": 2,
    "brand_name": "FOR SKIN'S SAKE",
    "product_name": "Gentle Cleansing Foam",
    "size": "150 ml",
    "bpom_number": "NA26211200155",
    "description": "A perfect low pH daily cleanser that is specially developed with minimal ingredients to be compatible even with the most sensitive skins while effectively cleanses without over-stripping it. Featuring Ceramide Complex to fortify the skin barrier, preventing dryness and irritation.",
    "how_to_use": "Pump generously and gently massage in a circular motion onto a damp face.",
    "ingredients_list": "Water, Disodium Laureth Sulfossucinate, Glycerin, 1,2-Hexanediol, Citric Acid, Ethylhexylglycerin, Sodium Benzoate, Butylene Glycol, Disodium EDTA, Hydrogenated Lecithin, Propanediol, Centella Asiatica Extract, Ficus Carica (Fig) Fruit Extract, Amaranthus Caudatus Seed Extract, Ulmus Davidiana Root Extract, Ceramide NP, Acmella Oleracea Extract, Tocopherol (Vitamin E), Dipropylene Glycol, Glyceryl Stearate, Ceramide NS, Ceramide AS, Cholesterol, Ceramide AP, Ceramide EOP",
    "image_URL": "https://images.soco.id/8857a33f-322c-4b94-8366-5785694193a8-image-0-1630322239044",
    "marketplace_URL": "https://shopee.co.id/forskinssake",
    "social_media_URL": "https://www.instagram.com/forskinssake/",
    "CategoryId": 1
  },
  .
  .
  .
]
```

---

## GET /products/:categoryId
Description: Show all products by Category ID

Request:

- Params:
    - categoryId: "integer"

Response:

- Status: 200
- Body:

```json
[
  {
    "id": 1,
    "brand_name": "HALE",
    "product_name": "Honey, I Dew",
    "size": "85 ml",
    "bpom_number": "NA18201204813",
    "description": "A mildly acidic (pH: 5.00-6.00) sulfate-free cleanser that thoroughly removes impurities without irritating the skin; with honey extract and glycerin as hydrators, making the skin feel soft and supple",
    "how_to_use": "Rub the gel cleanser between your hands with water to lather into a gentle foam. Massage onto wet face, and then rinse with water",
    "ingredients_list": "Aqua, Sodium Methyl Cocoyl Taurate, Cocamidopropyl Betaine, Glycerin, Hydroxyethylcellulose, Honey Extract, Poly Acrylate Crospolymer, Citric Acid, Phenoxyethanol, Caprylhydroxamic Acid, Methylpropanediol, Imidazolidinyl Urea, Disodium EDTA",
    "image_URL": "https://cdn.shopify.com/s/files/1/2588/0486/products/fb829e3d-733d-4020-86bf-65169ade9ef7_900x.jpg?v=1611050671",
    "marketplace_URL": "https://shopee.co.id/hale.id",
    "social_media_URL": "https://www.instagram.com/think.hale/",
    "CategoryId": 1
  },
  {
    "id": 2,
    "brand_name": "FOR SKIN'S SAKE",
    "product_name": "Gentle Cleansing Foam",
    "size": "150 ml",
    "bpom_number": "NA26211200155",
    "description": "A perfect low pH daily cleanser that is specially developed with minimal ingredients to be compatible even with the most sensitive skins while effectively cleanses without over-stripping it. Featuring Ceramide Complex to fortify the skin barrier, preventing dryness and irritation.",
    "how_to_use": "Pump generously and gently massage in a circular motion onto a damp face.",
    "ingredients_list": "Water, Disodium Laureth Sulfossucinate, Glycerin, 1,2-Hexanediol, Citric Acid, Ethylhexylglycerin, Sodium Benzoate, Butylene Glycol, Disodium EDTA, Hydrogenated Lecithin, Propanediol, Centella Asiatica Extract, Ficus Carica (Fig) Fruit Extract, Amaranthus Caudatus Seed Extract, Ulmus Davidiana Root Extract, Ceramide NP, Acmella Oleracea Extract, Tocopherol (Vitamin E), Dipropylene Glycol, Glyceryl Stearate, Ceramide NS, Ceramide AS, Cholesterol, Ceramide AP, Ceramide EOP",
    "image_URL": "https://images.soco.id/8857a33f-322c-4b94-8366-5785694193a8-image-0-1630322239044",
    "marketplace_URL": "https://shopee.co.id/forskinssake",
    "social_media_URL": "https://www.instagram.com/forskinssake/",
    "CategoryId": 1
  },
  .
  .
  .
]
```

_Response (404 - Not Found)_

```json
{
  "message": "Category ID is not found"
}
```
---

## GET /products/:categoryId/:id
Description: Show one product by its ID from certain Category ID

Request:

- Params:
    - categoryId: "integer"
    - id: "integer"

Response:

- Status: 200
- Body:

```json
[
  {
    "id": 1,
    "brand_name": "HALE",
    "product_name": "Honey, I Dew",
    "size": "85 ml",
    "bpom_number": "NA18201204813",
    "description": "A mildly acidic (pH: 5.00-6.00) sulfate-free cleanser that thoroughly removes impurities without irritating the skin; with honey extract and glycerin as hydrators, making the skin feel soft and supple",
    "how_to_use": "Rub the gel cleanser between your hands with water to lather into a gentle foam. Massage onto wet face, and then rinse with water",
    "ingredients_list": "Aqua, Sodium Methyl Cocoyl Taurate, Cocamidopropyl Betaine, Glycerin, Hydroxyethylcellulose, Honey Extract, Poly Acrylate Crospolymer, Citric Acid, Phenoxyethanol, Caprylhydroxamic Acid, Methylpropanediol, Imidazolidinyl Urea, Disodium EDTA",
    "image_URL": "https://cdn.shopify.com/s/files/1/2588/0486/products/fb829e3d-733d-4020-86bf-65169ade9ef7_900x.jpg?v=1611050671",
    "marketplace_URL": "https://shopee.co.id/hale.id",
    "social_media_URL": "https://www.instagram.com/think.hale/",
    "CategoryId": 1,
    "createdAt": "2021-09-21T14:48:21.047Z",
    "updatedAt": "2021-09-21T14:48:21.047Z"
  }
]
```

_Response (404 - Not Found)_

```json
{
  "message": "Product is not found"
}
```
---

## POST /products
Description: Add new product to database

Request:

- Data:

```json
{
  "id": "string",
  "brand_name": "string",
  "product_name": "string",
  "size": "string",
  "bpom_number": "string",
  "description": "text",
  "how_to_use": "text",
  "ingredients_list": "text",
  "image_URL": "string",
  "marketplace_URL": "string",
  "social_media_URL": "string",
  "CategoryId": "integer",
}
```

Response:

- Status: 201
- Body:

```json
{
  "id": 3,
  "brand_name": "HAUM",
  "product_name": "WASH ON",
  "size": "180 ml",
  "bpom_number": "NA18201203051",
  "description": "Facial cleanser with 1.5% Tranexamic Acid which helps brighten the skin and Hyaluronic Acid to provide moisture.",
  "how_to_use": "Lather the gel on hands with a little water, massage gently all over the face, then rinse thoroughly.",
  "ingredients_list": "Aqua, Glycerin, Potassium Cocoyl Glycinate, Sodium Laureth Sulfate, PEG-120 Methyl Glucose Dioleate, Cocamidopropyl Betaine, Hydroxyethyl Urea, Tranexamic Acid, Hyaluronic Acid, Pentylene Glycol, Ethylhexylglycerin, Disodium EDTA, Allantoin, Sarcosine, Cinnamomum Zeylanicum Bark Extract, Capryloyl Glycine, Collagen, DMDM Hydantoin",
  "image_URL": "https://cdn.shopify.com/s/files/1/0533/1288/0837/products/ProductWEB_WashOn_1024x1024@2x.png?v=1611822089",
  "marketplace_URL": "https://shopee.co.id/haumskincare",
  "social_media_URL": "https://www.instagram.com/haumskincare",
  "CategoryId": 1,
    "createdAt": "2021-09-21T14:48:21.047Z",
  "updatedAt": "2021-09-21T14:48:21.047Z"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Product is not found"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Brand Name is required"
}
```

---

## PUT /products/:id
Description: Update several informations on selected product

Request:

- Params:
    - id: "integer"

- Data:

```json
{
  "id": "string",
  "brand_name": "string",
  "product_name": "string",
  "size": "string",
  "bpom_number": "string",
  "description": "text",
  "how_to_use": "text",
  "ingredients_list": "text",
  "image_URL": "string",
  "marketplace_URL": "string",
  "social_media_URL": "string",
  "CategoryId": "integer",
}
```

Response:

- Status: 200
- Body:

```json
{
  "id": 3,
  "brand_name": "HAUM",
  "product_name": "WASH ON",
  "size": "180 ml",
  "bpom_number": "NA18201203051",
  "description": "Facial cleanser with 1.5% Tranexamic Acid which helps brighten the skin and Hyaluronic Acid to provide moisture.",
  "how_to_use": "Lather the gel on hands with a little water, massage gently all over the face, then rinse thoroughly.",
  "ingredients_list": "Aqua, Glycerin, Potassium Cocoyl Glycinate, Sodium Laureth Sulfate, PEG-120 Methyl Glucose Dioleate, Cocamidopropyl Betaine, Hydroxyethyl Urea, Tranexamic Acid, Hyaluronic Acid, Pentylene Glycol, Ethylhexylglycerin, Disodium EDTA, Allantoin, Sarcosine, Cinnamomum Zeylanicum Bark Extract, Capryloyl Glycine, Collagen, DMDM Hydantoin",
  "image_URL": "https://cdn.shopify.com/s/files/1/0533/1288/0837/products/ProductWEB_WashOn_1024x1024@2x.png?v=1611822089",
  "marketplace_URL": "https://shopee.co.id/haumskincare",
  "social_media_URL": "https://www.instagram.com/haumskincare",
  "CategoryId": 1,
  "createdAt": "2021-09-21T14:48:21.047Z",
  "updatedAt": "2021-09-21T14:48:21.047Z"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Product is not found"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Brand Name is required"
}
```
---

## DELETE /products/:id
Description: Delete product by its ID

Request:

- Params:
    - id: "integer"

Response:

- Status: 200
- Body:

```json
{
  "message": "Product has successfully been deleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Product is not found"
}
```
---

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```
---