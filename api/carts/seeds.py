from api.models import Cart

pelmeniPelmeni = Cart(address='1080 SE Madison St', areaCode='503',
                      city='Portland', name='Pelmeni Pelmeni',
                      phoneNumber='9084570', state='OR', status=True,
                      website='', zipCode='97214')
baonKaonan = Cart(address='1080 SE Madison St', areaCode='503',
                  city='Portland', name='Dae Bap', phoneNumber='9084571',
                  state='OR', status=True, website='', zipCode='97214')
cartSeeds = [baonKaonan, pelmeniPelmeni]
