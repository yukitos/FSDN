/// <reference path="../../typings/main.d.ts" />
"use strict";
import Vue = require("vue");
import * as request from "superagent";
import {baseUrl} from "./util";

let app = new Vue({
  el: "#app",
  data: {
    libraries: [],
    error_message: undefined
  },
  computed: {
    raised_error: function(): boolean {
      return this.error_message !== undefined;
    }
  }
});

request
  .get(baseUrl + "/api/libraries")
  .end((err, res) => {
    if (err || !res.ok) {
      app.$set("error_message", res.text);
    } else {
      app.$set("error_message", undefined);
      app.$set("libraries", JSON.parse(res.text).values);
    }
  });
