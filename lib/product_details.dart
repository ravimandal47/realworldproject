import 'package:flutter/material.dart';
import 'product_identity.dart';

class ProductDetails extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xFFF3D657),
        leading: IconButton(
          icon: Icon(Icons.menu),
          onPressed: () {},
          color: Colors.black,
        ),
        title: new Text(
          'Product',
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
          children: [
            Container(
              alignment: Alignment.center,
              margin: EdgeInsets.all(20),
              padding: EdgeInsets.all(20),
              width: 150,
              height: 150,
              child: Text('QR Code'),
              color: Color(0xFFF3D657),
            ),
            Container(
              alignment: Alignment.center,
              padding: EdgeInsets.all(20),
              margin: EdgeInsets.all(20),
              width: 300,
              height: 150,
              child: Text('Product Identity'),
              color: Color(0xFFF3D657),
            ),
            Container(
              alignment: Alignment.center,
              margin: EdgeInsets.all(20),
              width: 300,
              height: 50,
              child:
                  Text('Click the below button to know the product details.'),
            ),
            GestureDetector(
              onTap: () {
                Navigator.of(context).push(MaterialPageRoute(
                  builder: (context) => ProductIdentity(),
                ));
              },
              child: Container(
                alignment: Alignment.center,
                margin: EdgeInsets.all(20),
                width: 100,
                height: 50,
                color: Color(0xFFF3D657),
                child: Text('Click'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
