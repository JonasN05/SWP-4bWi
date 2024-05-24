use htld;
create table people (
    id int AUTO_INCREMENT NOT NULL,
    firstname varchar(100),
    lastname varchar(100),
    PRIMARY KEY (id)
)

use htld;
insert into people(firstname, lastname)
values ("jonas", "nigg")


use htld;
select * from people