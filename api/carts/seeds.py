from api.models import Cart

pelmeniPelmeni = Cart(address='1080 SE Madison St', area_code='503',
                      city='Portland', instagram='', name='Pelmeni Pelmeni',
                      phone_number='9084570', state='OR', status=True,
                      website='', zip_code='97214')
baonKaonan = Cart(address='1080 SE Madison St', area_code='503',
                  city='Portland',
                  instagram='https://www.instagram.com/pelmenipdx/',
                  name='Dae Bap', phone_number='9084571',
                  state='OR', status=True, website='', zip_code='97214')
cartSeeds = [baonKaonan, pelmeniPelmeni]
