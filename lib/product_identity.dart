import 'package:flutter/material.dart';

class ProductIdentity extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Color(0xFFF3D657),
          leading: IconButton(
              icon: Icon(Icons.menu), onPressed: () {}, color: Colors.black),
          title: new Text(
            'Product Identity',
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
        body: Container(
          child: Text(
            'Product Identity',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          margin: EdgeInsets.fromLTRB(20, 20, 20, 20),
          color: Color(0xFFF3D657),
          alignment: Alignment.center,
        ));
  }
}
