# import bcrypt
from app.models import db, User
import random

profile_pictures = ['https://cdn-icons-png.flaticon.com/512/4681/4681664.png', 'https://cdn-icons-png.flaticon.com/512/4681/4681414.png', 'https://cdn-icons-png.flaticon.com/512/4681/4681611.png', 'https://cdn-icons-png.flaticon.com/512/4681/4681561.png', 'https://cdn-icons-png.flaticon.com/512/4681/4681691.png', 'https://cdn-icons-png.flaticon.com/512/4681/4681769.png', 'https://cdn-icons-png.flaticon.com/512/4681/4681741.png', 'https://cdn-icons-png.flaticon.com/512/4681/4681673.png', 'https://cdn-icons-png.flaticon.com/512/4681/4681538.png', 'https://cdn-icons-png.flaticon.com/512/4681/4681628.png']

# Adds a demo user, you can add other users here if you want
def seed_users():
    owner1 = User(first_name='Angel',
                   last_name='Cortese',
                   email='angelcortese@user.io',
                   username='angelcortese',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner2 = User(first_name='Adam',
                  last_name='Smith',
                  email='adamsmith@user.io',
                  username='adamsmith',
                  password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner3 = User(first_name='Sean',
                  last_name='Wang',
                  email='seanwang@user.io',
                  username='seanwang',
                  password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner4 = User(first_name='Alexander',
                  last_name='Trent',
                  email='alexandertrent@user.io',
                  username='alexandertrent',
                  password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner5 = User(first_name='Andrea',
                  last_name='Hall',
                  email='andreahall@user.io',
                  username='andreahall',
                  password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner6 = User(first_name='Brandon',
                  last_name='Smith',
                  email='brandonsmith@user.io',
                  username='brandonsmith',
                  password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner7 = User(first_name='Christopher',
                  last_name='Lamar',
                  email='christopherlamar@user.io',
                  username='christopherlamar',
                  password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner8 = User(first_name='Jacob',
                  last_name='Ray',
                  email='jacobray@user.io',
                  username='jacobray',
                  password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner9 = User(first_name='Paul',
                  last_name='Blart',
                  email='paulblart@user.io',
                  username='paulblart',
                  password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner10 = User(first_name='Jake',
                   last_name='Joe',
                   email='jakejoe@user.io',
                   username='jakejoe',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner11 = User(first_name='James',
                   last_name='Lee',
                   email='jameslee@user.io',
                   username='jameslee',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner12 = User(first_name='Jason',
                   last_name='Kong',
                   email='jasonkong@user.io',
                   username='jasonkong',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner13 = User(first_name='Jason',
                   last_name='Arnold',
                   email='jasonarnold@user.io',
                   username='jasonarnold',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner14 = User(first_name='Jessie',
                   last_name='James',
                   email='jessiejames@user.io',
                   username='jessiejames',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner15 = User(first_name='Marie',
                   last_name='Gilbert',
                   email='mariegilbert@user.io',
                   username='mariegilbert',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner16 = User(first_name='John',
                   last_name='Bon',
                   email='johnbon@user.io',
                   username='johnbon',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner17 = User(first_name='Logan',
                   last_name='Pork',
                   email='loganpork@user.io',
                   username='loganpork',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner18 = User(first_name='Joe',
                   last_name='Joe',
                   email='joejoe@user.io',
                   username='joejoe',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner19 = User(first_name='Kyle',
                   last_name='Roglith',
                   email='kyleroglith@user.io',
                   username='kyleroglith',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner20 = User(first_name='Michael',
                   last_name='Pop',
                   email='michaelpop@user.io',
                   username='michaelpop',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner21 = User(first_name='Ryan',
                   last_name='Chen',
                   email='ryanchen@user.io',
                   username='ryanchen',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner22 = User(first_name='Samuel',
                   last_name='Suh',
                   email='samuelsuh@user.io',
                   username='samuelsuh',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner23 = User(first_name='Bryson',
                   last_name='Ahn',
                   email='brysonahn@user.io',
                   username='brysonahn',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner24 = User(first_name='Sean',
                   last_name='Kennedy',
                   email='seankennedy@user.io',
                   username='seankennedy',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner25 = User(first_name='George',
                   last_name='Vien',
                   email='georgevien@user.io',
                   username='georgevien',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner26 = User(first_name='Smitty',
                   last_name='Yang',
                   email='smittyyang@user.io',
                   username='smittyyang',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner27 = User(first_name='Fred',
                   last_name='Guo',
                   email='fredguo@user.io',
                   username='fredguo',
                   password='password',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )

    owner28 = User(first_name="Demo",
                  last_name="User",
                  email="demo@user.io",
                  username="demo",
                  password="password",
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))]
                  )


    db.session.add(owner1)
    db.session.add(owner2)
    db.session.add(owner3)
    db.session.add(owner4)
    db.session.add(owner5)
    db.session.add(owner6)
    db.session.add(owner7)
    db.session.add(owner8)
    db.session.add(owner9)
    db.session.add(owner10)
    db.session.add(owner11)
    db.session.add(owner12)
    db.session.add(owner13)
    db.session.add(owner14)
    db.session.add(owner15)
    db.session.add(owner16)
    db.session.add(owner17)
    db.session.add(owner18)
    db.session.add(owner19)
    db.session.add(owner20)
    db.session.add(owner21)
    db.session.add(owner22)
    db.session.add(owner23)
    db.session.add(owner24)
    db.session.add(owner25)
    db.session.add(owner26)
    db.session.add(owner27)
    db.session.add(owner28)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
