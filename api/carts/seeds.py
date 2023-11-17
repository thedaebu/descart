from api.models import Cart

# Cart(address='', area_code='', city='', google_id='',instagram='', name='',
# phone_number='', state='', status=True, website='', zip_code='')

baon_kainan = Cart(address='1027 NE Alberta St', area_code='', city='Portland', 
                   google_id='ChIJi5oW7wSnlVQRwMMmysMVzW4',
                   instagram='baonkainan',
                   name='Baon Kainan', phone_number='', state='', status=True,
                   website='https://baonkainan.com/', zip_code='97211')
dae_bap = Cart(address='1080 SE Madison St', area_code='503', city='Portland',
               google_id='ChIJobRPC_ahlVQR9UxVr80iTrE', instagram='',
               name='Dae Bap', phone_number='9084571', state='OR',
               status=True, website='', zip_code='97214')
pelmeni_pelmeni = Cart(address='1080 SE Madison St', area_code='503',
                       city='Portland',
                       google_id='ChIJleDwNjGhlVQR9ACRM6bbDAo',
                       instagram='pelmenipdx', name='Pelmeni Pelmeni',
                       phone_number='9084570', state='OR', status=True,
                       website='', zip_code='97214')

cartSeeds = [baon_kainan, dae_bap, pelmeni_pelmeni]
