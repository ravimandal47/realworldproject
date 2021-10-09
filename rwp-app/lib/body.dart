import 'package:flutter/material.dart';
import 'product_details.dart';

class Body extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Color(0xFFF3D657),
          leading: IconButton(
              icon: Icon(Icons.menu), onPressed: () {}, color: Colors.black),
          title: new Text(
            'Scanner',
            style: TextStyle(color: Colors.black),
          ),
          actions: [
            IconButton(
                icon: Icon(Icons.more_vert),
                onPressed: () {},
                color: Colors.black),
          ],
        ),
        backgroundColor: Colors.black,
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                alignment: Alignment.center,
                width: 350,
                height: 200,
                child: Text('QR Code Scanner'),
                color: Color(0xFFF3D657),
              ),
              GestureDetector(
                child: Padding(
                  padding: EdgeInsets.all(10.0),
                  child: FlatButton(
                    onPressed: () {
                      Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => ProductDetails(),
                      ));
                    },
                    padding: EdgeInsets.symmetric(
                      horizontal: 25.0,
                      vertical: 10.0,
                    ),
                    color: Color(0xFFF3D657),
                    textColor: Colors.black,
                    child: Text('Click to Scan'),
                  ),
                ),
              )
            ],
          ),
        ));
  }
}
