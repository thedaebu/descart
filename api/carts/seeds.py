from api.models import Cart

baonKaonan = Cart(address='1080 SE Madison St', area_code='503',
                  city='Portland', google_id='ChIJleDwNjGhlVQR9ACRM6bbDAo',
                  instagram='', name='Dae Bap', phone_number='9084571',
                  state='OR', status=True, website='', zip_code='97214')
pelmeniPelmeni = Cart(address='1080 SE Madison St', area_code='503',
                      city='Portland', google_id='', instagram='pelmenipdx',
                      name='Pelmeni Pelmeni', phone_number='9084570',
                      state='OR', status=True, website='', zip_code='97214')
cartSeeds = [baonKaonan, pelmeniPelmeni]
