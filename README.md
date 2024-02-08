User::create([
    "first_name" => "Роман", 
    "last_name" => "Клочков", 
    "middle_name" => "Анатольевич", 
    "email" => "romanrus98@mail.ru",
    "password" => Hash::make('admin')
]);
