myData = [
[50.06688579999999,19.9136192, 'aleja Adama Mickiewicza 30, 30-059 Kraków, Poland'],
[52.2394019,21.0150792, 'Krakowskie Przedmieście 5, 00-068 Warszawa, Poland'],
[30.018923,31.499674, 'AUC Avenue، 11835, Egypt'],
[33.4242399,-111.9280527, 'Tempe, AZ 85281, USA'],
[33.9094132,-83.4603953, '300, 2500 Daniells Bridge Rd, Athens, GA 30606, USA'],
[28.3588163,75.58802039999999, 'Pilani, Rajasthan 333031, India'],
[6.8946472,3.7174267, 'Ilishan-Remo, Nigeria'],
[25.2677203,82.99125819999999, 'Ajagara, Varanasi, Uttar Pradesh 221005, India'],
[12.9527314,77.5157387, 'Gnana Bharathi Campus, Gnana Bharathi Main Rd, Teachers Colony, Nagarbhavi, Bengaluru, Karnataka 560056, India'],
[31.5497007,-97.1143046, '1301 S University Parks Dr, Waco, TX 76706, USA'],
[39.9619537,116.3662615, '19 Xinjiekou Outer St, BeiTaiPingZhuang, Haidian Qu, Beijing Shi, China, 100875'],
[53.8938988,27.5460609, 'Prospekt Nezavisimosti 4, Minsk, Belarus'],
[44.8184339,20.4575676, 'Studentski trg 1, Beograd, Serbia'],
[42.5030333,-89.0309048, '700 College St, Beloit, WI 53511, USA'],
[53.8938988,27.5460609, 'Prospekt Nezavisimosti 4, Minsk, Belarus'],
[31.262218,34.801461, 'שד בן-גוריון 1, באר שבע, Israel'],
[10.6779085,78.74454879999999, 'Palkalaiperur, Tiruchirappalli, Tamil Nadu 620024, India'],
[42.3504997,-71.1053991, 'Boston, MA 02215, USA'],
[35.3050053,-120.6624942, 'San Luis Obispo, CA 93407, USA'],
[34.1821786,-117.3235324, '5500 University Pkwy, San Bernardino, CA 92407, USA'],
[51.5210038,-0.1746353, '25 Paddington Green, London W2 1NB, UK'],
[40.8075355,-73.9625727, '116th St & Broadway, New York, NY 10027, United States'],
[52.0741818,-0.6278123, 'College Rd, Wharley End, Bedford MK43 0AL, UK'],
[50.1030364,14.3912841, 'Zikova 1903/4, 166 36 Praha 6, Czechia'],
[43.7044406,-72.2886935, 'Hanover, NH 03755, USA'],
[37.3201481,-122.0453953, '21250 Stevens Creek Blvd, Cupertino, CA 95014, USA'],
[46.8677579,-96.7623133, '600 11th St S, Moorhead, MN 56563, USA'],
[48.4331922,35.0427966, 'Haharina Ave, 72, Dnipropetrovsk, Dnipropetrovska oblast, Ukraine, 49000'],
[38.4306911,27.1369201, 'Kültür Mahallesi, Cumhuriyet Blv No:144, 35220 Konak/İzmir, Turkey'],
[45.5111102,-122.6833424, '1825 SW Broadway, Portland, OR 97201, USA'],
[39.7738832,-86.1763393, '420 University Blvd, Indianapolis, IN 46202, USA'],
[12.9244514,77.4989013, 'Mysore Rd, RV Vidyaniketan, R V Vidyanikethan Post, Bengaluru, Karnataka 560059, India'],
[42.730172,-73.67880300000002, '110 8th St, Troy, NY 12180, USA'],
[41.0819323,-74.1758157, '505 Ramapo Valley Rd, Mahwah, NJ 07430, USA'],
[43.0845894,-77.67434449999999, '1 Lomb Memorial Dr, Rochester, NY 14623, USA'],
[10.7285151,79.0184082, 'Trichy-Tanjore Road, Thirumalaisamudram, Thanjavur, Tamil Nadu 613401, India'],
[59.941894,30.2989199, 'University Embankment, 7/9, Sankt-Peterburg, Russia, 199034'],
[59.929491,30.2966081, 'Bolshaya Morskaya Ulitsa, 67, Sankt-Peterburg, Russia, 190000'],
[60.007357,30.372899, 'Politekhnicheskaya Ulitsa, 29, Sankt-Peterburg, Russia, 195251'],
[37.721897,-122.4782094, '1600 Holloway Ave, San Francisco, CA 94132, USA'],
[37.3351874,-121.8810715, '1 Washington Sq, San Jose, CA 95192, USA'],
[31.201001,121.432841, '1954 Huashan Rd, JiaoTong DaXue, Xuhui Qu, Shanghai Shi, China, 200030'],
[35.7036366,51.351593, 'خیابان آزادی، تهران بزرگ،، Iran'],
[10.408363,-66.8755735, 'Sartenejas, Caracas, Miranda, Venezuela'],
[49.2780937,-122.9198833, '8888 University Dr, Burnaby, BC V5A 1S6, Canada'],
[54.7845032,32.0452469, 'Ulitsa Przhevalskogo, 4, Smolensk, Smolenskaya oblast, Russia, 214000'],
[38.3409236,-122.6730656, '1801 E Cotati Ave, Rohnert Park, CA 94928, USA'],
[41.8348731,-87.6270059, '10 W 35th St, Chicago, IL 60616, USA'],
[44.4332166,26.1009718, 'Strada Ion Ghica 13, București 030167, Romania'],
[34.7448064,-79.48007109999999, '1700 Dogwood Mile St, Laurinburg, NC 28352, USA'],
[37.4274745,-122.169719, '450 Serra Mall, Stanford, CA 94305, USA'],
[-22.8184393,-47.0647206, 'Cidade Universitária Zeferino Vaz - Barão Geraldo, Campinas - SP, 13083-970, Brazil'],
[43.4514291,-76.5443166, '7060 NY-104, Oswego, NY 13126, USA'],
[34.3647324,-89.538443, 'University, MS 38677, USA'],
[42.0590153,-71.0806276, '320 Washington St, North Easton, MA 02357, USA'],
[59.438742,24.771645, 'Narva maantee 25, 10120 Tallinn, Estonia'],
[59.395884,24.671431, 'Ehitajate tee 5, 12616 Tallinn, Estonia'],
[61.4492961,23.8585814, 'Korkeakoulunkatu 6, 33720 Tampere, Finland'],
[30.7924391,30.9991409, 'El-Gaish, Tanta Qism 2, Tanta, Gharbia Governorate, Egypt'],
[32.7474661,-97.3278753, '1500 Houston St, Fort Worth, TX 76102, USA'],
[46.769299,23.585613, 'Strada Memorandumului 28, Cluj-Napoca 400114, Romania'],
[32.7767783,35.0231271, 'Haifa, 3200003, Israel'],
[32.1133141,34.8043877, 'Tel Aviv-Yafo, Israel'],
[31.7691587,35.1937099, 'יעקב שרייבום 26, ירושלים, 9103501, Israel'],
[31.7691587,35.1937099, 'יעקב שרייבום 26, ירושלים, 9103501, Israel'],
[56.95080979999999,24.1163132, 'Raiņa bulvāris 19, Centra rajons, Rīga, LV-1586, Latvia'],
[56.95080979999999,24.1163132, 'Raiņa bulvāris 19, Centra rajons, Rīga, LV-1586, Latvia'],
[53.4668498,-2.2338837, 'Oxford Rd, Manchester M13 9PL, UK'],
[53.4668498,-2.2338837, 'Oxford Rd, Manchester M13 9PL, UK'],
[-25.7676588,28.1992637, 'Preller St, Muckleneuk, Pretoria, 0002, South Africa'],
[-25.7676588,28.1992637, 'Preller St, Muckleneuk, Pretoria, 0002, South Africa'],
[38.053147,-84.4936508, '300 N Broadway, Lexington, KY 40508, USA'],
[38.053147,-84.4936508, '300 N Broadway, Lexington, KY 40508, USA'],
[42.4074843,-71.1190232, '419 Boston Ave, Medford, MA 02155, USA'],
[42.4074843,-71.1190232, '419 Boston Ave, Medford, MA 02155, USA'],
[37.8718992,-122.2585399, 'Berkeley, CA, USA'],
[37.8718992,-122.2585399, 'Berkeley, CA, USA'],
[34.068921,-118.4451811, 'Los Angeles, CA 90095, USA'],
[34.068921,-118.4451811, 'Los Angeles, CA 90095, USA'],
[32.8800604,-117.2340135, '9500 Gilman Dr, La Jolla, CA 92093, USA'],
[32.8800604,-117.2340135, '9500 Gilman Dr, La Jolla, CA 92093, USA'],
[40.1019523,-88.2271615, 'Champaign, IL, USA'],
[40.1019523,-88.2271615, 'Champaign, IL, USA'],
[46.8186613,-92.0835669, '1049 University Dr, Duluth, MN 55812, USA'],
[46.8186613,-92.0835669, '1049 University Dr, Duluth, MN 55812, USA'],
[25.7778385,-80.3051723, 'Miami, FL 33126, USA'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, C1053 CABA, Argentina'],
[40.785212,-77.82307039999999, '101 Regent Ct, State College, PA 16801, USA'],
[34.0223519,-118.285117, 'Los Angeles, CA 90007, USA'],
[43.076592,-89.4124875, 'Madison, WI 53706, USA'],
[10.4883502,-66.8891696, 'Caracas, Capital District, Venezuela'],
[40.4478246,-3.728587199999999, 'Av. Séneca, 2, 28040 Madrid, Spain'],
[6.2464426,-75.5612621, 'Colombia #41-26, Medellín, Antioquia, Colombia'],
[29.419657,-98.485243, '600 Hemisfair Plaza Way, San Antonio, TX 78205, USA'],
[9.998686099999999,-84.11118580000002, 'Avenida 1, Calle 9 Heredia 86, 3000, Costa Rica']
];
