# welcome-screen

- kullanıcının adını aldık ve o anki tarih ve saatle ekrana yazdırdık

# Nasıl Yaptık?

- Öncelikle kullanıcıdan adını alabilmek için prompt kullandık ve document.querySelector ile ulaştığımız id ye kullanıcıdan aldığımız adı innerHTML özelliğini kullanarak web sayfamıza yazdırdık.
- Zaman özelliğini eklemk için Date() nesnesini kullandık.

## Date() Nesnesi Nasıl Kullanılır?

- öncelikle date nesnemizi oluşturuyoruz.

`let now = new Date(); `

- Sonrasında date nesnemizden ihtiyacımız olan özellikleri çağırdık. get<istenilen özellik>()

````
let hours = dateTime.getHours();
let minutes = dateTime.getMinutes();
let seconds = dateTime.getSeconds();
let day = dateTime.getDay(); ```

- Girilen andaki günü göstermek için küçük bir dönüştürme işlemi yaptık.
  ```let gunler = ["pazar", "pazartesi" .... ]
     let gunAdi = gunler[day];  ```

- Sonrasında innerHTML kullanarak Web sayfamıza yazdırdık.

### Önemli!!

- Ekranımızda saatin akışını görmek istersek setIntervial kullandık. bu ShowTime() functionumuzu sürekli günceller.
  `setInterval(showTime, 1000); `
````
