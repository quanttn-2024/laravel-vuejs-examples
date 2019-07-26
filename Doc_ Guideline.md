# Ý nghĩa và chức năng của từng thư mục bên Client sử dụng VueJS + VueX

Tất cả các files liên quan đến Client đều được để trong thư mục **resources** của Laravel bao gồm ảnh, css, js, components, ...

## resources/views

-

## resources/assets/sass

Dùng để lưu những files scss sử dụng để thiết kế giao diện cho hệ thống, trong đó:

- Thư mục **components** sẽ chứa các files scss cho từng components một, chia ra để tiện quản lý hơn.

- File **_common.scss** là nơi chứa những scss dùng chung cho cả hệ thống.

- File **_variables.scss** là nơi khai báo các biến hay dùng cho các file scss khác như là các mã màu, background, font-family,...

- File **app.scss** dùng để import những files scss bên trên (components/*.scss, _common, _variables) mà mình đã tạo để mix chung ra thư mục public.

## resources/js

Thư mục này dùng để lưu những files js, components chính để tạo nên app SPA

### ./js/components

Đây sẽ chứa nhưng components dùng chung cho cả hệ thống, để tiện quản lý và rõ ràng hơn thì tốt nhất mỗi components nên để theo từng thư mục riêng rồi sẽ import vào 1 file Admin.vue để dùng. Thông thường thì sẽ các phần như header, footer, aside, errors,...

### .js/components/Admin.vue

Đây có thể gọi là bộ khung cho app SPA, trong file này sẽ import đủ các phần khung chính để tạo nên một trang web.

### .js/lang

Trong thư mục này sẽ chứa các file json dùng cho việc đa ngôn ngữ của trang web

### .js/library

Đây sẽ là nơi lưu các files js kiểu như **Helper.js** hoặc có thể có nhiểu files khác với mục đích là chứa những function mà mình phải dùng nhiều lần trong app

### .js/modules

Thư mục modules sẽ chứa những phần nhỏ theo từng chức năng hoặc là các page con một, trong mỗi một modules thì chia ra 3 thư mục nhỏ hơn (**api**, **store**, **views**) để phân tách rõ ràng chức năng giữa chúng:

- Thư mục `api`: Nhiệm vụ sẽ là dùng thư viện **axios** để tạo những function call api lên server để lấy dữ liệu.

- Thư mục `store`: Trong này sẽ import file js từ thư mục `api` rồi sử state, mutations, actions, store để commmit dữ liệu từ api trả về rồi lưu vào state.

- Thư mục `views`: Chứa các files `.vue` để hiển thị giao diện cũng như xử lý logic để hiển thị dữ liệu từ state ra ngoài.

### .js/app.js

Dùng để khai báo một vue instance cho toàn app và import những thư viện global hay dùng nhất. Và cũng dùng chính file này để Mix ra thư mục public.

### .js/App.vue

Dùng để import những layout và sử dụng router-view để gọi tới các modules khác nhau.

### .js/bootstrap.js

Đây là file có sẵn của Laravel khi chúng ta tạo mới một project, ở đây thì sẽ giữ nguyên chưa sửa gì đến nó.

### .js/routes.js

Dùng để import các components hoặc modules rồi khởi tạo các router để có thể gọi tới các components hoặc modules đó.

### .js/store.js

Ở đây sẽ cần import VueX và tập trung các store dữ liệu từ các modules khác bằng cách import các store đó vào.

## Ngoài ra có thể có thêm một số files và thư mục nữa để phục vụ cho trang web khi cần thiết.
