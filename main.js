canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width=100;
car1_height=100;
car2_width=100;
car2_height=100;
 car1_x=10;
 car1_y=10;
 car2_x=20;
car2_y=20;
car_image_1 = "car1.png";
car_image_2 = "car 2.png";
function add(){
    car1_imgtag = new Image();
    car2_imgtag = new Image();
    car_image_2.onload = upload_car2;
    car_image_2.src = "car2_imgtag";
    car_image_1.onload = upload_car1;
    car_image_1.src = "car1_imgtag";
function upload_car1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}
