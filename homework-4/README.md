# Odev-4

## Kurallar
* Başlangıçta hiç yorum yoktur ve bu durumda ekrana "Hiç yorum yok" çıktısı verilir.
* Yıldız seviyesi 1-5 arasındadır ve başlangıçta oy durumunu tutan state numerik ve default değeri 0 olmalıdır.
* Yeni bir yorum eklemeden önce yıldız verilmesi zorunludur. Aksi durumda "Yorum yapmadan önce oy vermelisiniz." gibi bir hata mesajı gösterilecektir.
* Yorum alanı boş olamaz ve en az 3 karakter olmalıdır. Yorum inputu boş iken yorum yap butonu tıklanırsa "Boş olamaz" gibi bir hata mesajı gösterilmelidir. Yorum inputundaki karakter sayısı 3 karakterden az ise "Yorumunuz çok kısa" gibi bir hata mesajı verilmelidir.
* İlgili validation'lar sağlandığında yorumları barındıran array tipindeki state içerisine, yeni yorum, object olarak eklenmelidir. 
* Yorumları listelemek için farklı bir component oluşturulmalıdır.
* Yorum ekle kısmındaki rating component, submit button ve text input farklı bir component'in içerisinde olmalıdır.
* State App.js component'inde oluşturulmalı ve güncellenmelidir. Yani tüm aksiyon App.js üzerinden yönetilmelidir. Haliyle diğer component'ler props ile beslenmelidir.
* App.js component'i class tipinde, diğer component'ler function tipinde olmalıdır.
* Style konusunda her zamanki gibi özgürsünüz fakat ödevlerin kontrolünü zorlaştırmamak adına, yukarıda belirttiğim "star rating" haricinde bir package'ı projenize eklememenizi rica ederim.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
