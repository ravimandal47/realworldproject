import 'dart:developer';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'product_details.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';
import 'package:flutter/foundation.dart';

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
        child: ElevatedButton(
          onPressed: () {
            Navigator.of(context).push(MaterialPageRoute(
              builder: (context) => Body(),
            ));
          },
          child: Text('qrView'),
        ),
      ),
    );
  }
}
