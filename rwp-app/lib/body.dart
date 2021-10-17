import 'dart:developer';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'product_details.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';
import 'package:flutter/foundation.dart';

class Body extends StatelessWidget {
  const Body({Key? key, required this.code}) : super(key: key);

  final String code;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xFFF3D657),
        title: new Text(
          'Product Details',
          style: TextStyle(color: Colors.black),
        ),
      ),
      backgroundColor: Colors.white,
      body: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Text(
              code,
              style: TextStyle(
                fontSize: 16,
                color: Color(0xFF1C1C1C),
                height: 2,
              ),
              textAlign: TextAlign.center,
            ),
            Text(
              code,
              style: TextStyle(
                fontSize: 16,
                color: Color(0xFF1C1C1C),
                height: 2,
              ),
              textAlign: TextAlign.center,
            ),
            Text(
              code,
              style: TextStyle(
                fontSize: 16,
                color: Color(0xFF1C1C1C),
                height: 2,
              ),
              textAlign: TextAlign.center,
            ),
            Text(
              code,
              style: TextStyle(
                fontSize: 16,
                color: Color(0xFF1C1C1C),
                height: 2,
              ),
              textAlign: TextAlign.center,
            ),
            Text(
              code,
              style: TextStyle(
                fontSize: 16,
                color: Color(0xFF1C1C1C),
                height: 2,
              ),
              textAlign: TextAlign.center,
            ),
          ]),
    );
  }
}
