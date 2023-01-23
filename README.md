# Poc-Ts

Exists 6 categories: 

1	"Ação"
2	"Comédia"
3	"Romance"
4	"Aventura"
5	"Infantil"
6	"Terror"

#Routes

GET(/films) - List all films

GET(/films/categoryId/:id) - List all films of this category

POST(/film) - Post a film with this body
/
  {
  
    name: name,
    
    image: image,
    
    categoryId: categoryID
  }
  
PUT(/conclued/:id) - set finshed true for a specific film

DELETE(/film/:id) - delete a specific film
