var _a = Object.defineProperty,
  ha = Object.defineProperties;
var xa = Object.getOwnPropertyDescriptors;
var qe = Object.getOwnPropertySymbols;
var ka = Object.prototype.hasOwnProperty,
  wa = Object.prototype.propertyIsEnumerable;
var we = (e, a, o) =>
    a in e
      ? _a(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[a] = o),
  X = (e, a) => {
    for (var o in a || (a = {})) ka.call(a, o) && we(e, o, a[o]);
    if (qe) for (var o of qe(a)) wa.call(a, o) && we(e, o, a[o]);
    return e;
  },
  nt = (e, a) => ha(e, xa(a));
var ya = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports);
var Kt = (e, a, o) => (we(e, typeof a != "symbol" ? a + "" : a, o), o);
var A = (e, a, o) =>
  new Promise((n, s) => {
    var m = (u) => {
        try {
          f(o.next(u));
        } catch (c) {
          s(c);
        }
      },
      b = (u) => {
        try {
          f(o.throw(u));
        } catch (c) {
          s(c);
        }
      },
      f = (u) => (u.done ? n(u.value) : Promise.resolve(u.value).then(m, b));
    f((o = o.apply(e, a)).next());
  });
import {
  d as te,
  a as T,
  c as H,
  u as y,
  o as i,
  b as r,
  e as t,
  t as k,
  n as Gt,
  f as $,
  r as ut,
  g as z,
  h as ct,
  i as It,
  j as M,
  w as q,
  k as Lt,
  l as Fa,
  m as F,
  p as At,
  q as Wt,
  s as Ca,
  v as Ea,
  x as $a,
  y as Da,
  z as Ba,
  A as Ya,
  B as Aa,
  C as it,
  T as xt,
  D as O,
  E as N,
  F as tt,
  G as L,
  H as P,
  I as Q,
  J as V,
  K as J,
  L as Sa,
  M as rt,
  N as Ft,
  O as K,
  P as Vt,
  Q as bt,
  R as ue,
  S as Ee,
  U as za,
  V as Pa,
  W as le,
  X as Je,
  Y as Ta,
  Z as Ia,
  _ as La,
} from "./vendor.js?v=ecba491a";
var Kw = ya((Ce) => {
  const Ma = function () {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
      n(s);
    new MutationObserver((s) => {
      for (const m of s)
        if (m.type === "childList")
          for (const b of m.addedNodes)
            b.tagName === "LINK" && b.rel === "modulepreload" && n(b);
    }).observe(document, { childList: !0, subtree: !0 });
    function o(s) {
      const m = {};
      return (
        s.integrity && (m.integrity = s.integrity),
        s.referrerpolicy && (m.referrerPolicy = s.referrerpolicy),
        s.crossorigin === "use-credentials"
          ? (m.credentials = "include")
          : s.crossorigin === "anonymous"
          ? (m.credentials = "omit")
          : (m.credentials = "same-origin"),
        m
      );
    }
    function n(s) {
      if (s.ep) return;
      s.ep = !0;
      const m = o(s);
      fetch(s.href, m);
    }
  };
  Ma();
  const Oa = (e, a) =>
    A(Ce, null, function* () {
      return new Promise((o, n) =>
        A(Ce, null, function* () {
          try {
            const s = yield fetch(e, a);
            if (Math.floor(s.status / 100) != 2)
              throw s.status + " " + s.statusText;
            const m = X({}, s);
            (m.data = yield s.json()), o(m);
          } catch (s) {
            n(s);
          }
        })
      );
    });
  class $e {
    constructor(a) {
      Kt(this, "config", { baseURL: "", headers: {} });
      Kt(this, "useRequest", (a) => a);
      Kt(this, "useResponse", (a) => a);
      Kt(this, "useError", (a) => a);
      a.baseURL && (this.config.baseURL = a.baseURL),
        a.headers && (this.config.headers = a.headers);
    }
    static create(a) {
      return new $e(a);
    }
    Do(a, o) {
      return A(this, null, function* () {
        return new Promise((n, s) =>
          A(this, null, function* () {
            try {
              const m = this.useRequest({
                baseURL: this.config.baseURL,
                headers: this.config.headers,
              });
              (a = `${m.baseURL || ""}${a}`),
                o.headers == null && (o.headers = {}),
                m.headers && (o.headers = X({}, m.headers));
              const f = yield fetch(a, o),
                u = X({}, f);
              (u.data = yield f.json()), n(this.useResponse(u));
            } catch (m) {
              this.useError(m), s(m);
            }
          })
        );
      });
    }
    TEXT(a, o) {
      return A(this, null, function* () {
        return new Promise((n, s) =>
          A(this, null, function* () {
            try {
              const m = this.useRequest({
                baseURL: this.config.baseURL,
                headers: this.config.headers,
              });
              (a = `${m.baseURL || ""}${a}`),
                o.headers == null && (o.headers = {}),
                m.headers && (o.headers = X({}, m.headers));
              const f = yield fetch(a, o),
                u = X({}, f);
              (u.data = yield f.text()), n(u);
            } catch (m) {
              this.useError(m), s(m);
            }
          })
        );
      });
    }
    interceptors() {
      const a = this;
      return {
        requset: {
          use(o) {
            a.useRequest = o;
          },
        },
        response: {
          use(o, n) {
            (a.useResponse = o), n && (a.useError = n);
          },
        },
      };
    }
  }
  const Ke = $e.create({});
  Ke.interceptors().requset.use((e) => e);
  Ke.interceptors().response.use(
    (e) => (e.data && e.data.success == null && e.data.success == 0, e)
  );
  const Na = "/cgi-bin/luci/istore";
  let Re = !1;
  const I = (e, a) => (
      e.indexOf("//") == -1 && (e = `${Na}${e}`),
      Oa(e, a).then(
        (o) => (
          o != null &&
            o.data &&
            o.data.success == -1001 &&
            o.data.error == "Forbidden" &&
            (Re ||
              ((Re = !0),
              alert(
                "\u767B\u5F55\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"
              ),
              location.reload())),
          o
        )
      )
    ),
    ja = {
      Statistics: {
        GET() {
          return I("/network/statistics/", { method: "GET" });
        },
      },
      Status: {
        GET() {
          return I("/network/status/", { method: "GET" });
        },
      },
      Device: {
        List: {
          GET() {
            return I("/network/device/list/", { method: "GET" });
          },
        },
      },
      Homebox: {
        Enable: {
          POST() {
            return I("/network/homebox/enable/", {
              method: "POST",
              headers: { "Content-Type": "application/json;charset=utf-8" },
            });
          },
        },
      },
      CheckPublickNet: {
        POST(e) {
          return I("/network/checkPublicNet/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      GetInterfaceConfig: {
        GET() {
          return I("/network/interface/config/", {
            method: "GET",
            headers: { "Content-Type": "application/json;charset=utf-8" },
          });
        },
      },
      POSTInterfaceConfig: {
        POST(e) {
          return I("/network/interface/config/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      PortList: {
        GET() {
          return I("/network/port/list/", {
            method: "GET",
            headers: { "Content-Type": "application/json;charset=utf-8" },
          });
        },
      },
    },
    qa = {
      Version: {
        GET() {
          return I("/system/version/", { method: "GET" });
        },
      },
      CheckUpdate: {
        GET() {
          return I("/system/check-update/", { method: "GET" });
        },
      },
      Reboot: {
        POST(e) {
          return I("/system/reboot/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      Status: {
        GET() {
          return I("/system/status/", { method: "GET" });
        },
      },
    },
    Ra = {
      Disk: {
        Status: {
          GET() {
            return I("/nas/disk/status/", { method: "GET" });
          },
        },
        Erase: {
          POST(e) {
            return I("/nas/disk/erase", {
              method: "POST",
              headers: { "Content-Type": "application/json;charset=utf-8" },
              body: JSON.stringify(e),
            });
          },
        },
        Init: {
          POST: (e) =>
            I("/nas/disk/init/", {
              method: "POST",
              headers: { "Content-Type": "application/json;charset=utf-8" },
              body: JSON.stringify(e),
            }),
        },
        InitRest: {
          POST: (e) =>
            I("/nas/disk/initrest/", {
              method: "POST",
              headers: { "Content-Type": "application/json;charset=utf-8" },
              body: JSON.stringify(e),
            }),
        },
        Partition: {
          Format: {
            POST: (e) =>
              I("/nas/disk/partition/format", {
                method: "POST",
                headers: { "Content-Type": "application/json;charset=utf-8" },
                body: JSON.stringify(e),
              }),
          },
          Mount: {
            POST: (e) =>
              I("/nas/disk/partition/mount", {
                method: "POST",
                headers: { "Content-Type": "application/json;charset=utf-8" },
                body: JSON.stringify(e),
              }),
          },
        },
      },
      Service: {
        Status: {
          GET() {
            return I("/nas/service/status/", { method: "GET" });
          },
        },
      },
      Samba: {
        Create: {
          POST(e) {
            return I("/nas/samba/create", {
              method: "POST",
              headers: { "Content-Type": "application/json;charset=utf-8" },
              body: JSON.stringify(e),
            });
          },
        },
      },
      Webdav: {
        Create: {
          POST(e) {
            return I("/nas/webdav/create", {
              method: "POST",
              headers: { "Content-Type": "application/json;charset=utf-8" },
              body: JSON.stringify(e),
            });
          },
        },
        Status: {
          GET() {
            return I("/nas/webdav/status/", { method: "GET" });
          },
        },
      },
      Linkease: {
        Enable: {
          POST() {
            return I("/nas/linkease/enable", {
              method: "POST",
              headers: { "Content-Type": "application/json;charset=utf-8" },
            });
          },
        },
      },
      Sandbox: {
        POST(e) {
          return I("/nas/sandbox/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      GetSandbox: {
        GET() {
          return I("/nas/sandbox/", { method: "GET" });
        },
      },
      SandboxDisks: {
        GET() {
          return I("/nas/sandbox/disks/", { method: "GET" });
        },
      },
      SandboxCommit: {
        POST() {
          return I("/nas/sandbox/commit/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({}),
          });
        },
      },
      SandboxReset: {
        POST() {
          return I("/nas/sandbox/reset/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
          });
        },
      },
      SandboxExit: {
        POST() {
          return I("/nas/sandbox/exit/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
          });
        },
      },
    },
    Ga = {
      Check: {
        POST(e) {
          return I("/app/check/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      Install: {
        POST(e) {
          return I("/app/install/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
    },
    Va = {
      Pppoe: {
        GET() {
          return I("/guide/pppoe/", { method: "GET" });
        },
        POST(e) {
          return I("/guide/pppoe/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      DnsConfig: {
        GET() {
          return I("/guide/dns-config/", { method: "GET" });
        },
        POST(e) {
          return I("/guide/dns-config/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      DhcpClient: {
        POST(e) {
          return I("/guide/dhcp-client/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      ClientModel: {
        GET() {
          return I("/guide/client-mode/", { method: "GET" });
        },
        POST(e) {
          return I("/guide/client-mode/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      GatewayRouter: {
        POST(e) {
          return I("/guide/gateway-router/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      DockerStatus: {
        GET() {
          return I("/guide/docker/status/", { method: "GET" });
        },
      },
      DockerPartitionList: {
        GET() {
          return I("/guide/docker/partition/list/", { method: "GET" });
        },
      },
      DockerTransfer: {
        POST(e) {
          return I("/guide/docker/transfer/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      DockerSwitch: {
        POST(e) {
          return I("/guide/docker/switch/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      DownloadService: {
        Status: {
          GET() {
            return I("/guide/download-service/status/", { method: "GET" });
          },
        },
      },
      DownloadpPartition: {
        List: {
          GET() {
            return I("/guide/download/partition/list/", { method: "GET" });
          },
        },
      },
      Aria2Init: {
        POST(e) {
          return I("/guide/aria2/init/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      qbitorrentInit: {
        POST(e) {
          return I("/guide/qbittorrent/init/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      transmissionInit: {
        POST(e) {
          return I("/guide/transmission/init/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      GetLan: {
        GET() {
          return I("/guide/lan/", { method: "GET" });
        },
      },
      LanIp: {
        POST(e) {
          return I("/guide/lan/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      SoftSource: {
        POST(e) {
          return I("/guide/soft-source/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      GetSoftSource: {
        GET() {
          return I("/guide/soft-source/", { method: "GET" });
        },
      },
      SoftSourceList: {
        GET() {
          return I("/guide/soft-source/list/", { method: "GET" });
        },
      },
      PostDdns: {
        POST(e) {
          return I("/guide/ddns/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      GetDdns: {
        GET() {
          return I("/guide/ddns/", { method: "GET" });
        },
      },
      Ddnsto: {
        POST(e) {
          return I("/guide/ddnsto/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      DdntoConfig: {
        GET() {
          return I("/guide/ddnsto/config/", { method: "GET" });
        },
      },
      DdnstoAddress: {
        POST(e) {
          return I("/guide/ddnsto/address/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
    },
    Ua = {
      Create: {
        POST(e) {
          return I("/raid/create/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      Delete: {
        POST(e) {
          return I("/raid/delete/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      Add: {
        POST(e) {
          return I("/raid/add/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      Remove: {
        POST(e) {
          return I("/raid/remove/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      Recover: {
        POST(e) {
          return I("/raid/recover/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      Detail: {
        POST(e) {
          return I("/raid/detail/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      List: {
        GET() {
          return I("/raid/list/", { method: "GET" });
        },
      },
      CreateList: {
        GET() {
          return I("/raid/create/list/", { method: "GET" });
        },
      },
      Autofix: {
        GET() {
          return I("/raid/autofix/", { method: "GET" });
        },
      },
    },
    Wa = {
      Log: {
        GET() {
          return I("/smart/log/", { method: "GET" });
        },
      },
      List: {
        GET() {
          return I("/smart/list/", { method: "GET" });
        },
      },
      Config: {
        GET() {
          return I("/smart/config/", { method: "GET" });
        },
        POST(e) {
          return I("/smart/config/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
      },
      Test: {
        POST(e) {
          return I("/smart/test/", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(e),
          });
        },
        Result: {
          POST(e) {
            return I("/smart/test/result/", {
              method: "POST",
              headers: { "Content-Type": "application/json;charset=utf-8" },
              body: JSON.stringify(e),
            });
          },
        },
      },
      Attribute: {
        Result: {
          POST(e) {
            return I("/smart/attribute/result/", {
              method: "POST",
              headers: { "Content-Type": "application/json;charset=utf-8" },
              body: JSON.stringify(e),
            });
          },
        },
      },
      Extend: {
        Result: {
          POST(e) {
            return I("/smart/extend/result/", {
              method: "POST",
              headers: { "Content-Type": "application/json;charset=utf-8" },
              body: JSON.stringify(e),
            });
          },
        },
      },
    };
  var Za = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          Network: ja,
          System: qa,
          Nas: Ra,
          App: Ga,
          Guide: Va,
          Raid: Ua,
          Smart: Wa,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    Y = X({}, Za);
  const Xe = te("app", {
    state: () => ({
      portitemStyle: {
        show: !1,
        left: 0,
        top: 0,
        portitem: {
          name: "",
          macAddress: "",
          linkSpeed: "",
          linkState: "",
          rx_packets: "",
          tx_packets: "",
          interfaceNames: [],
          master: "",
          duplex: "",
        },
      },
    }),
  });
  te("guide", {});
  const Qe = te("nas", { state: () => ({ webdav: {} }) }),
    ta = te("network", {
      state: () => ({ status: {}, statistics: {}, deviceList: {} }),
      getters: {},
      actions: {
        updateNetworkStatus(e) {
          this.status = e;
        },
        requestNetworkStatistics() {
          return A(this, null, function* () {
            try {
              const e = yield Y.Network.Statistics.GET();
              e != null &&
                e.data &&
                e.data.result &&
                (this.statistics = e.data.result);
            } catch (e) {
              console.log(e);
            }
          });
        },
        requestDeviceList() {
          Y.Network.Device.List.GET().then((e) => {
            if (e != null && e.data) {
              const { result: a } = e == null ? void 0 : e.data;
              a && (this.deviceList = a);
            }
          });
        },
        incrTime() {
          this.status.uptimeStamp && this.status.uptimeStamp++;
        },
      },
    }),
    De = te("system", {
      state: () => ({ version: {}, checkUpdate: {}, systemStatus: {} }),
      getters: {},
      actions: {
        incrTime() {
          var e;
          (e = this.systemStatus) != null &&
            e.uptime &&
            this.systemStatus.uptime++;
        },
        requestVersion() {
          Y.System.Version.GET().then((e) => {
            var a;
            (a = e == null ? void 0 : e.data) != null &&
              a.result &&
              (this.version = e.data.result);
          });
        },
        requestCheckUpdate() {
          Y.System.CheckUpdate.GET().then((e) => {
            var a;
            (a = e == null ? void 0 : e.data) != null &&
              a.result &&
              (this.checkUpdate = e.data.result);
          });
        },
        updateSystemStatus(e) {
          this.systemStatus = e;
        },
      },
    }),
    Ha = () => {
      let e = !0,
        a = !0;
      const o = ta(),
        n = De(),
        s = function () {
          return Y.System.Status.GET()
            .then((b) => {
              b != null && b.data.result && n.updateSystemStatus(b.data.result);
            })
            .then(() => {
              setTimeout(s, 5e3),
                e &&
                  (setInterval(() => {
                    n.incrTime();
                  }, 1e3),
                  (e = !1));
            });
        },
        m = function () {
          return Y.Network.Status.GET()
            .then((b) => {
              if (b != null && b.data) {
                const { result: f } = b == null ? void 0 : b.data;
                f && o.updateNetworkStatus(f);
              }
            })
            .then(() => {
              setTimeout(m, 5e3),
                a &&
                  (setInterval(() => {
                    o.incrTime();
                  }, 1e3),
                  (a = !1));
            });
        };
      m(),
        o.requestDeviceList(),
        n.requestVersion(),
        s(),
        n.requestCheckUpdate();
    };
  var S = (e, a) => {
    const o = e.__vccOpts || e;
    for (const [n, s] of a) o[n] = s;
    return o;
  };
  const Ja = T({
    setup(e) {
      const a = Xe(),
        o = H(() => a.portitemStyle.portitem),
        n = H(() => a.portitemStyle.show),
        s = H(() => ({
          bottom: `calc(100% - ${a.portitemStyle.top}px)`,
          left: `${a.portitemStyle.left}px`,
        })),
        m = (u) => {
          switch (u) {
            case "full":
              return "\u5168\u53CC\u5DE5";
            case "half":
              return "\u534A\u53CC\u5DE5";
          }
        },
        b = (u) => {
          a.portitemStyle.show = !0;
        },
        f = (u) => {
          a.portitemStyle.show = !1;
        };
      return (u, c) =>
        y(n)
          ? (i(),
            r(
              "div",
              {
                key: 0,
                class: "disk-item-tooltip",
                style: Gt(y(s)),
                onMouseenter: b,
                onMouseleave: f,
              },
              [
                t("div", null, k(m(y(o).duplex)), 1),
                t("div", null, "\u540D\u79F0\uFF1A" + k(y(o).name || "--"), 1),
                t("div", null, "MAC\uFF1A" + k(y(o).macAddress || "--"), 1),
                t(
                  "div",
                  null,
                  "\u63A5\u6536\uFF1A" + k(y(o).rx_packets || "--"),
                  1
                ),
                t(
                  "div",
                  null,
                  "\u53D1\u9001\uFF1A" + k(y(o).tx_packets || "--"),
                  1
                ),
              ],
              36
            ))
          : $("", !0);
    },
  });
  var Ka = S(Ja, [["__scopeId", "data-v-b85404ba"]]);
  const Xa = { id: "main" },
    Qa = T({
      setup(e) {
        return (a, o) => {
          const n = ut("router-view");
          return i(), r("div", Xa, [z(n), z(Ka)]);
        };
      },
    });
  var to = S(Qa, [["__scopeId", "data-v-2d97dedc"]]);
  const eo = {},
    ao = {
      t: "1640593669834",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "54870",
      width: "128",
      height: "128",
    },
    oo = t(
      "path",
      {
        d: "M148.7872 57.4464h177.152c64.9216 0 118.0672 53.1456 118.0672 118.0672v295.2192H148.7872C83.8656 470.7328 30.72 417.5872 30.72 352.5632v-177.152C30.72 110.592 83.8656 57.4464 148.7872 57.4464z m0 531.3536h295.2192v295.2192c0 64.9216-53.1456 118.0672-118.0672 118.0672h-177.152C83.8656 1001.984 30.72 948.9408 30.72 883.9168v-177.152C30.72 641.9456 83.8656 588.8 148.7872 588.8z m0 0M768.7168 559.2064L562.0736 346.7264c-23.6544-17.7152-35.4304-53.1456-35.4304-82.6368s11.776-59.0848 35.4304-82.6368L686.08 57.4464C733.2864 10.24 810.0864 10.24 851.3536 57.4464l124.0064 124.0064c23.6544 23.6544 35.4304 53.1456 35.4304 82.6368s-11.776 59.0848-35.4304 82.6368L768.7168 559.2064z m0-478.208c-17.7152 0-29.4912 5.9392-41.3696 17.7152l-123.904 124.0064c-11.776 11.776-17.7152 23.6544-17.7152 41.3696s5.9392 29.4912 17.7152 41.3696l165.2736 165.2736 165.2736-165.2736c11.776-11.776 17.7152-23.6544 17.7152-41.3696s-5.9392-29.4912-17.7152-41.3696L809.984 98.7136c-11.776-11.776-23.552-17.7152-41.2672-17.7152z m0 0",
        "p-id": "54871",
      },
      null,
      -1
    ),
    no = t(
      "path",
      {
        d: "M562.0736 588.8h295.2192c64.9216 0 118.0672 53.1456 118.0672 118.0672v177.152c0 64.9216-53.1456 118.0672-118.0672 118.0672h-177.152c-64.9216 0-118.0672-53.1456-118.0672-118.0672V588.8z m0 0",
        "p-id": "54872",
      },
      null,
      -1
    ),
    io = [oo, no];
  function ro(e, a) {
    return i(), r("svg", ao, io);
  }
  var so = S(eo, [["render", ro]]);
  const co = {},
    uo = {
      t: "1640598743438",
      class: "icon",
      viewBox: "0 0 1036 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "65341",
      width: "128",
      height: "128",
    },
    lo = t(
      "path",
      {
        d: "M984.177778 432.355556l-45.511111 0c-22.755556 0-45.511111-17.066667-51.2-39.822222l-28.444444-68.266667C847.644444 312.888889 853.333333 284.444444 870.4 267.377778l34.133333-34.133333c17.066667-17.066667 17.066667-39.822222 0-56.888889l-56.888889-56.888889c-17.066667-17.066667-39.822222-17.066667-56.888889 0l-34.133333 34.133333C739.555556 170.666667 711.111111 176.355556 694.044444 164.977778L625.777778 136.533333c-22.755556-5.688889-39.822222-28.444444-39.822222-51.2L585.955556 39.822222c0-22.755556-17.066667-39.822222-39.822222-39.822222L472.177778 0C449.422222 0 432.355556 17.066667 432.355556 39.822222l0 45.511111c0 22.755556-17.066667 45.511111-39.822222 51.2L329.955556 164.977778C312.888889 176.355556 284.444444 170.666667 267.377778 153.6L233.244444 119.466667c-17.066667-17.066667-39.822222-17.066667-56.888889 0l-56.888889 56.888889c-17.066667 17.066667-17.066667 39.822222 0 56.888889l34.133333 34.133333C170.666667 284.444444 176.355556 312.888889 164.977778 329.955556L136.533333 398.222222C130.844444 415.288889 108.088889 432.355556 85.333333 432.355556l-45.511111 0C17.066667 432.355556 0 449.422222 0 472.177778l0 79.644444c0 22.755556 17.066667 39.822222 39.822222 39.822222l45.511111 0c22.755556 0 45.511111 17.066667 51.2 39.822222l28.444444 68.266667C176.355556 711.111111 170.666667 739.555556 153.6 756.622222l-34.133333 34.133333c-17.066667 17.066667-17.066667 39.822222 0 56.888889l56.888889 56.888889c17.066667 17.066667 39.822222 17.066667 56.888889 0l34.133333-34.133333C284.444444 853.333333 312.888889 847.644444 329.955556 859.022222L398.222222 887.466667c22.755556 5.688889 39.822222 28.444444 39.822222 51.2l0 45.511111c0 22.755556 17.066667 39.822222 39.822222 39.822222l79.644444 0c22.755556 0 39.822222-17.066667 39.822222-39.822222l0-45.511111c0-22.755556 17.066667-45.511111 39.822222-51.2l68.266667-28.444444c17.066667-11.377778 45.511111-5.688889 62.577778 11.377778l34.133333 34.133333c17.066667 17.066667 39.822222 17.066667 56.888889 0l56.888889-56.888889c17.066667-17.066667 17.066667-39.822222 0-56.888889l-34.133333-34.133333c-17.066667-17.066667-17.066667-45.511111-11.377778-62.577778l28.444444-68.266667c5.688889-22.755556 28.444444-39.822222 51.2-39.822222l45.511111 0c22.755556 0 39.822222-17.066667 39.822222-39.822222L1035.377778 472.177778C1024 449.422222 1006.933333 432.355556 984.177778 432.355556L984.177778 432.355556zM711.111111 512c0 108.088889-91.022222 199.111111-199.111111 199.111111-108.088889 0-199.111111-85.333333-199.111111-199.111111 0-108.088889 85.333333-199.111111 199.111111-199.111111C620.088889 312.888889 711.111111 403.911111 711.111111 512L711.111111 512zM711.111111 512",
        "p-id": "65342",
      },
      null,
      -1
    ),
    po = [lo];
  function fo(e, a) {
    return i(), r("svg", uo, po);
  }
  var mo = S(co, [["render", fo]]);
  const vo = {},
    bo = {
      t: "1640599890701",
      class: "icon",
      viewBox: "0 0 1565 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "76947",
      width: "128",
      height: "128",
    },
    go = t(
      "path",
      {
        d: "M1206.477959 299.331595c-27.357038 0-53.867311 3.354494-79.465683 9.151581C1078.518669 130.792698 916.428217 0 723.365689 0 492.068443 0 304.575027 187.493416 304.575027 418.790662c0 16.055976 1.074741 31.786273 2.865975 47.386299-9.184149-0.911901-18.400865-1.40042-27.812989-1.40042C125.191018 464.743973 0 589.934991 0 744.371987c0 154.469563 125.191018 279.628013 279.595446 279.628013 59.990077 0 221.233764 0 394.527575 0l0-302.295274L496.986197 721.704726l285.457668-339.031868 285.457668 339.031868-177.136823 0 0 302.295274c139.748871 0 262.204185 0 315.71325 0 197.947713 0 358.40977-168.34349 358.40977-366.291203S1404.425673 299.331595 1206.477959 299.331595z",
        "p-id": "76948",
      },
      null,
      -1
    ),
    _o = [go];
  function ho(e, a) {
    return i(), r("svg", bo, _o);
  }
  var xo = S(vo, [["render", ho]]);
  const ko = {},
    wo = {
      t: "1640599792937",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "68605",
      width: "128",
      height: "128",
    },
    yo = t(
      "path",
      {
        d: "M512 825.6c-211.2 0-377.6-57.6-377.6-128l0 0L134.4 896l0 0c6.4 70.4 172.8 128 377.6 128 204.8 0 371.2-57.6 377.6-128l0 0 0-204.8 0 0C889.6 768 723.2 825.6 512 825.6L512 825.6z",
        "p-id": "68606",
      },
      null,
      -1
    ),
    Fo = t(
      "path",
      {
        d: "M512 544c-211.2 0-377.6-57.6-377.6-128l0 0 0 204.8 0 0c6.4 70.4 172.8 128 377.6 128 204.8 0 371.2-57.6 377.6-128l0 0L889.6 416l0 0C889.6 486.4 723.2 544 512 544L512 544z",
        "p-id": "68607",
      },
      null,
      -1
    ),
    Co = t(
      "path",
      {
        d: "M889.6 128 889.6 128c0-70.4-166.4-128-377.6-128C300.8 0 134.4 57.6 134.4 128l0 0 0 0 0 204.8 0 0c6.4 70.4 172.8 128 377.6 128 204.8 0 371.2-57.6 377.6-128l0 0L889.6 128 889.6 128 889.6 128zM512 217.6c-153.6 0-281.6-44.8-281.6-96 0-51.2 128-96 281.6-96 153.6 0 281.6 44.8 281.6 96C793.6 179.2 665.6 217.6 512 217.6L512 217.6z",
        "p-id": "68608",
      },
      null,
      -1
    ),
    Eo = [yo, Fo, Co];
  function $o(e, a) {
    return i(), r("svg", wo, Eo);
  }
  var Do = S(ko, [["render", $o]]);
  const Bo = {},
    Yo = {
      t: "1640575557247",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4211",
      width: "128",
      height: "128",
    },
    Ao = t(
      "path",
      {
        d: "M560 800l-10.464-416h-75.072L464 800h96z m-14.144-493.984c9.44-9.312 14.144-20.672 14.144-34.016 0-13.6-4.704-24.992-14.144-34.208A46.784 46.784 0 0 0 512 224c-13.12 0-24.448 4.608-33.856 13.792A45.856 45.856 0 0 0 464 272c0 13.344 4.704 24.704 14.144 34.016 9.408 9.312 20.704 13.984 33.856 13.984 13.12 0 24.448-4.672 33.856-13.984zM512 32C246.912 32 32 246.912 32 512c0 265.088 214.912 480 480 480 265.088 0 480-214.912 480-480 0-265.088-214.912-480-480-480z m0 64c229.76 0 416 186.24 416 416s-186.24 416-416 416S96 741.76 96 512 282.24 96 512 96z",
        "p-id": "4212",
      },
      null,
      -1
    ),
    So = [Ao];
  function zo(e, a) {
    return i(), r("svg", Yo, So);
  }
  var Po = S(Bo, [["render", zo]]);
  const To = {},
    Io = {
      t: "1640681742480",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "80687",
      width: "128",
      height: "128",
    },
    Lo = t(
      "path",
      {
        d: "M899.892468 123.889088c0-44.342099-36.286708-80.620486-80.624646-80.620486H204.728017C160.385918 43.268602 124.107532 79.546988 124.107532 123.889088v802.847056c0 44.342099 36.278386 80.620486 80.620485 80.620486h614.539805c44.337938 0 80.624646-36.278386 80.624646-80.620486V123.889088z",
        fill: "#D0D0DB",
        "p-id": "80688",
      },
      null,
      -1
    ),
    Mo = t(
      "path",
      {
        d: "M169.8768 977.7772V174.930143c0-44.342099 36.278386-80.620486 80.620486-80.620485h614.539804c9.936092 0 19.426974 1.905666 28.239639 5.23434-11.525534-30.507298-40.996782-52.389169-75.398629-52.389169H203.342457c-44.342099 0-80.620486 36.278386-80.620486 80.620486v802.851217c0 34.410168 21.881871 63.873094 52.385008 75.381985A79.730065 79.730065 0 0 1 169.8768 977.7772z",
        fill: "#FFFFFF",
        "p-id": "80689",
      },
      null,
      -1
    ),
    Oo = t(
      "path",
      {
        d: "M820.657543 40.497481H206.117739c-44.342099 0-80.620486 36.278386-80.620486 80.620485v802.847057c0 44.342099 36.278386 80.620486 80.620486 80.620486h614.539804c44.337938 0 80.624646-36.278386 80.624647-80.620486V121.117966c0-44.342099-36.286708-80.620486-80.624647-80.620485z m19.60173 828.785749c0 40.846992-33.43237 74.279362-74.287684 74.279361H199.780776c-40.855313 0-74.279362-33.424048-74.279362-74.279361V129.593603c0-40.855313 33.424048-74.279362 74.279362-74.279362h566.203296c40.842831 0 74.283522 33.424048 74.283522 74.279362l-0.008321 739.689627z",
        fill: "#6E6E96",
        "p-id": "80690",
      },
      null,
      -1
    ),
    No = t(
      "path",
      {
        d: "M815.106979 1024H200.567175C146.933914 1024 103.303319 980.369405 103.303319 926.736144V123.889088C103.303319 70.255827 146.933914 26.625232 200.567175 26.625232h614.539804c53.633261 0 97.268017 43.630595 97.268017 97.263856v802.847056c0 53.633261-43.634756 97.263856-97.268017 97.263856zM200.567175 59.911972C165.287391 59.911972 136.590059 88.609303 136.590059 123.889088v802.847056c0 35.279784 28.697331 63.977115 63.977116 63.977115h614.539804c35.279784 0 63.981276-28.697331 63.981276-63.977115V123.889088c0-35.279784-28.701492-63.977115-63.981276-63.977116H200.567175z",
        fill: "#6E6E96",
        "p-id": "80691",
      },
      null,
      -1
    ),
    jo = t(
      "path",
      {
        d: "M301.946104 941.515457h429.985632v65.841173H301.946104z",
        fill: "#8A8AA1",
        "p-id": "80692",
      },
      null,
      -1
    ),
    qo = t(
      "path",
      {
        d: "M731.931736 1024H301.946104a16.64337 16.64337 0 0 1-16.64337-16.64337V941.515457a16.64337 16.64337 0 0 1 16.64337-16.64337h429.985632a16.64337 16.64337 0 0 1 16.64337 16.64337v65.841173a16.64337 16.64337 0 0 1-16.64337 16.64337z m-413.342262-33.286741h396.698892v-32.554432H318.589474v32.554432z",
        fill: "#6E6E96",
        "p-id": "80693",
      },
      null,
      -1
    ),
    Ro = t(
      "path",
      {
        d: "M337.230049 960.318304h20.804213v47.038326h-20.804213zM386.565159 960.318304h20.804213v47.038326h-20.804213zM435.891948 960.318304h20.804213v47.038326h-20.804213zM485.231219 960.318304h20.804213v47.038326h-20.804213zM534.558008 960.318304h20.804213v47.038326h-20.804213zM583.897279 960.318304h20.804213v47.038326h-20.804213zM633.224068 960.318304h20.804213v47.038326h-20.804213zM682.563339 960.318304h20.804213v47.038326h-20.804213z",
        fill: "#FFE599",
        "p-id": "80694",
      },
      null,
      -1
    ),
    Go = t(
      "path",
      {
        d: "M219.153659 140.794591m-26.874883 0a26.874882 26.874882 0 1 0 53.749765 0 26.874882 26.874882 0 1 0-53.749765 0Z",
        fill: "#ADADD1",
        "p-id": "80695",
      },
      null,
      -1
    ),
    Vo = t(
      "path",
      {
        d: "M219.153659 184.312843c-23.995579 0-43.518252-19.522673-43.518253-43.518252s19.522673-43.518252 43.518253-43.518253 43.518252 19.522673 43.518252 43.518253-19.522673 43.518252-43.518252 43.518252z m0-53.749764c-5.642103 0-10.231512 4.589409-10.231512 10.231512s4.589409 10.231512 10.231512 10.231512 10.231512-4.589409 10.231511-10.231512-4.589409-10.231512-10.231511-10.231512z",
        fill: "#6E6E96",
        "p-id": "80696",
      },
      null,
      -1
    ),
    Uo = t(
      "path",
      {
        d: "M801.28466 140.794591m-26.870721 0a26.870721 26.870721 0 1 0 53.741442 0 26.870721 26.870721 0 1 0-53.741442 0Z",
        fill: "#ADADD1",
        "p-id": "80697",
      },
      null,
      -1
    ),
    Wo = t(
      "path",
      {
        d: "M801.28466 184.308683c-23.995579 0-43.514092-19.518512-43.514091-43.514092s19.518512-43.514092 43.514091-43.514092 43.514092 19.518512 43.514092 43.514092-19.518512 43.514092-43.514092 43.514092z m0-53.741443c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
        fill: "#6E6E96",
        "p-id": "80698",
      },
      null,
      -1
    ),
    Zo = t(
      "path",
      {
        d: "M801.280499 905.23291m-26.870721 0a26.870721 26.870721 0 1 0 53.741443 0 26.870721 26.870721 0 1 0-53.741443 0Z",
        fill: "#ADADD1",
        "p-id": "80699",
      },
      null,
      -1
    ),
    Ho = t(
      "path",
      {
        d: "M801.280499 948.747001c-23.995579 0-43.514092-19.518512-43.514091-43.514091s19.518512-43.514092 43.514091-43.514092 43.514092 19.518512 43.514092 43.514092-19.518512 43.514092-43.514092 43.514091z m0-53.741442c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
        fill: "#6E6E96",
        "p-id": "80700",
      },
      null,
      -1
    ),
    Jo = t(
      "path",
      {
        d: "M219.153659 905.23291m-26.870722 0a26.870721 26.870721 0 1 0 53.741443 0 26.870721 26.870721 0 1 0-53.741443 0Z",
        fill: "#ADADD1",
        "p-id": "80701",
      },
      null,
      -1
    ),
    Ko = t(
      "path",
      {
        d: "M219.153659 948.747001c-23.995579 0-43.514092-19.518512-43.514092-43.514091s19.518512-43.514092 43.514092-43.514092 43.514092 19.518512 43.514091 43.514092-19.522673 43.514092-43.514091 43.514091z m0-53.741442c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
        fill: "#6E6E96",
        "p-id": "80702",
      },
      null,
      -1
    ),
    Xo = t(
      "path",
      {
        d: "M520.972857 777.43263c-142.542145 0-258.508988-115.971004-258.508988-258.52147a16.64337 16.64337 0 0 1 33.28674 0c0 124.19699 101.033579 225.23473 225.222248 225.23473s225.222248-101.03774 225.222248-225.23473c0-124.188668-101.033579-225.218087-225.222248-225.218087a16.64337 16.64337 0 0 1 0-33.286741c142.542145 0 258.508988 115.966843 258.508988 258.504828 0 142.550466-115.966843 258.521471-258.508988 258.52147z",
        fill: "#6E6E96",
        "p-id": "80703",
      },
      null,
      -1
    ),
    Qo = t(
      "path",
      {
        d: "M520.968696 518.919481m-83.312551 0a83.312551 83.312551 0 1 0 166.625102 0 83.312551 83.312551 0 1 0-166.625102 0Z",
        fill: "#A9A9BA",
        "p-id": "80704",
      },
      null,
      -1
    ),
    tn = t(
      "path",
      {
        d: "M520.968696 618.875402c-55.114521 0-99.955921-44.83724-99.955921-99.95176 0-55.118682 44.8414-99.955921 99.955921-99.955921s99.95176 44.8414 99.95176 99.955921c0 55.11036-44.83724 99.95176-99.95176 99.95176z m0-166.625101c-36.761044 0-66.669181 29.908136-66.66918 66.66918s29.908136 66.66502 66.66918 66.66502 66.66502-29.908136 66.66502-66.66502c0-36.761044-29.903976-66.669181-66.66502-66.66918z",
        fill: "#6E6E96",
        "p-id": "80705",
      },
      null,
      -1
    ),
    en = t(
      "path",
      {
        d: "M301.946104 941.515457h429.985632v36.977408H301.946104z",
        fill: "#6E6E96",
        "p-id": "80706",
      },
      null,
      -1
    ),
    an = [
      Lo,
      Mo,
      Oo,
      No,
      jo,
      qo,
      Ro,
      Go,
      Vo,
      Uo,
      Wo,
      Zo,
      Ho,
      Jo,
      Ko,
      Xo,
      Qo,
      tn,
      en,
    ];
  function on(e, a) {
    return i(), r("svg", Io, an);
  }
  var nn = S(To, [["render", on]]);
  const rn = {},
    sn = {
      t: "1640775712185",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "2996",
      width: "128",
      height: "128",
    },
    dn = t(
      "path",
      {
        d: "M894.185422 128.023792 129.814578 445.743994 445.99982 577.744353 571.860343 893.929596Z",
        "p-id": "2997",
      },
      null,
      -1
    ),
    cn = [dn];
  function un(e, a) {
    return i(), r("svg", sn, cn);
  }
  var ln = S(rn, [["render", un]]);
  const pn = { class: "progress" },
    fn = T({
      props: { value: { type: Number, required: !0 }, text: { type: String } },
      setup(e) {
        const a = e,
          o = H(() =>
            a.value >= 80
              ? "#e45e5e"
              : a.value >= 70
              ? "#ff9800"
              : a.value >= 60
              ? "#297ff3"
              : a.value > 0
              ? "#53c31b"
              : ""
          );
        return (n, s) => (
          i(),
          r("div", pn, [
            t(
              "div",
              {
                class: ct(["progress-value", `${e.value > 50}`]),
                style: Gt({ width: `${e.value}%`, backgroundColor: y(o) }),
              },
              [t("span", null, k(e.text), 1)],
              6
            ),
            It(n.$slots, "default", {}, void 0, !0),
          ])
        );
      },
    });
  var ea = S(fn, [["__scopeId", "data-v-64850ab4"]]);
  const mn = {},
    vn = {
      t: "1641369474206",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "7685",
      width: "128",
      height: "128",
    },
    bn = t(
      "path",
      {
        d: "M757.76 637.44l-218.88 245.76c-14.72 16.64-40.32 16.64-54.4 0L265.6 637.44C244.48 613.76 261.12 576 293.12 576l437.76 0C762.24 576 779.52 613.76 757.76 637.44z",
        "p-id": "7686",
      },
      null,
      -1
    ),
    gn = [bn];
  function _n(e, a) {
    return i(), r("svg", vn, gn);
  }
  var hn = S(mn, [["render", _n]]);
  const xn = {},
    kn = {
      t: "1641369492518",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "7831",
      width: "128",
      height: "128",
    },
    wn = t(
      "path",
      {
        d: "M758.4 385.92 539.52 140.16c-14.72-16.64-40.32-16.64-54.4 0L266.24 385.92C244.48 409.6 261.76 448 293.12 448l437.76 0C762.88 448 779.52 409.6 758.4 385.92z",
        "p-id": "7832",
      },
      null,
      -1
    ),
    yn = [wn];
  function Fn(e, a) {
    return i(), r("svg", kn, yn);
  }
  var Cn = S(xn, [["render", Fn]]);
  const En = {};
  function $n(e, a) {
    return i(), r("article", null, [It(e.$slots, "default", {}, void 0, !0)]);
  }
  var Dn = S(En, [
    ["render", $n],
    ["__scopeId", "data-v-995510fc"],
  ]);
  const Bn = { class: "cover" },
    Yn = { class: "thumbnail" },
    An = T({
      emits: ["click"],
      setup(e, { emit: a }) {
        const o = () => {
          a("click");
        };
        return (n, s) => (
          i(),
          M(Dn, null, {
            default: q(() => [
              t("a", { onClick: o }, [
                t("div", Bn, [
                  t("div", Yn, [It(n.$slots, "default", {}, void 0, !0)]),
                ]),
              ]),
            ]),
            _: 3,
          })
        );
      },
    });
  var Sn = S(An, [["__scopeId", "data-v-782f97c0"]]);
  const zn = {
      t: "1631799919469",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "3453",
      width: "128",
      height: "128",
    },
    Pn = T({
      props: {
        size: { type: Number, default: 50 },
        color: { type: String, default: "#fff" },
      },
      setup(e) {
        return (a, o) => (
          i(),
          r(
            "div",
            {
              class: "loading",
              style: Gt({ width: e.size + "px", height: e.size + "px" }),
            },
            [
              (i(),
              r("svg", zn, [
                t(
                  "path",
                  {
                    d: "M522.695111 1.991111c-26.339556 0.170667-47.416889 21.475556-47.672889 48.753778-0.284444 26.453333-0.056889 52.963556-0.056889 79.445333 0 27.249778-0.369778 54.528 0.113778 81.777778 0.483556 27.050667 22.016 47.132444 49.351111 46.904889a47.786667 47.786667 0 0 0 47.729778-47.445333c0.284444-53.76 0.284444-107.52-0.028444-161.251556-0.170667-27.676444-21.902222-48.355556-49.436445-48.184889m-195.896889 88.092445c-8.334222-14.222222-21.646222-21.276444-38.314666-21.333334-35.128889 0-56.576 36.949333-38.968889 68.152889a11616.995556 11616.995556 0 0 0 78.961777 137.614222 44.942222 44.942222 0 0 0 61.838223 16.896c21.304889-12.202667 29.667556-38.968889 17.379555-60.871111-26.453333-47.104-53.560889-93.866667-80.896-140.458666m-228.693333 234.524444c44.316444 25.799111 88.746667 51.342222 133.176889 76.970667 6.712889 3.896889 13.681778 6.912 21.703111 6.428444 20.138667 0.142222 35.953778-11.946667 41.301333-31.573333 5.006222-18.261333-2.673778-36.721778-20.224-46.990222-44.629333-26.026667-89.372444-51.882667-134.115555-77.710223-22.528-12.999111-47.815111-7.025778-59.818667 13.909334-12.231111 21.248-4.977778 45.624889 17.948444 58.965333m34.161778 235.975111c26.396444 0 52.821333 0.199111 79.217778-0.085333 23.409778-0.256 39.139556-16.412444 38.798222-39.139556-0.341333-21.617778-16.924444-37.347556-39.594666-37.376-51.655111-0.056889-103.310222-0.056889-154.965334 0.028445-24.177778 0.056889-40.704 15.985778-40.561778 38.684444 0.142222 22.186667 16.583111 37.745778 40.192 37.859556 25.656889 0.142222 51.285333 0.028444 76.913778 0m151.722667 100.238222a34.247111 34.247111 0 0 0-46.876445-12.942222 13764.778667 13764.778667 0 0 0-139.008 80.583111c-11.093333 6.485333-16.327111 16.867556-16.497777 25.372444 0.085333 30.549333 27.249778 47.957333 50.403555 35.072 47.160889-26.197333 93.724444-53.475556 140.145778-80.924444 17.180444-10.154667 21.504-30.378667 11.832889-47.160889m91.875555 101.660444c-14.250667-4.067556-27.619556 1.422222-35.84 15.644445a24375.466667 24375.466667 0 0 0-77.312 134.485333c-10.012444 17.550222-5.859556 35.669333 9.784889 45.027556 16.014222 9.557333 34.247111 4.039111 44.714667-13.994667 25.543111-44.088889 50.915556-88.263111 76.373333-132.352 3.299556-5.745778 5.688889-11.690667 5.745778-14.933333 0-17.834667-9.272889-29.866667-23.466667-33.877334m147.456 44.288c-16.384 0.085333-27.306667 11.918222-27.448888 30.151111-0.142222 25.372444-0.028444 50.716444-0.028445 76.060445h-0.085333c0 26.112-0.113778 52.252444 0.056889 78.364444 0.113778 18.261333 11.064889 30.065778 27.448889 30.208 16.952889 0.142222 28.046222-11.832889 28.103111-30.748444 0.113778-51.086222 0.142222-102.172444 0.056889-153.258667 0-18.773333-11.207111-30.862222-28.103112-30.776889m177.208889-26.112c-7.509333-12.8-21.902222-16.014222-33.792-8.874666a23.722667 23.722667 0 0 0-8.533333 32.995555c26.282667 46.279111 52.906667 92.330667 79.644444 138.353778 4.494222 7.765333 11.633778 11.946667 20.906667 11.804444 18.545778-0.142222 30.520889-19.342222 21.219556-35.868444-26.026667-46.392889-52.650667-92.444444-79.473778-138.410667m239.957333-41.187555c-45.283556-26.254222-90.595556-52.48-135.964444-78.648889-4.693333-2.702222-9.728-4.323556-15.36-2.958222-9.102222 2.247111-14.933333 8.049778-16.497778 17.095111-1.877333 10.894222 3.84 18.204444 12.885333 23.438222 29.809778 17.180444 59.562667 34.417778 89.344 51.598222 15.217778 8.789333 30.236444 17.976889 45.738667 26.225778 14.677333 7.793778 31.061333-2.048 31.061333-18.033778-0.056889-8.448-4.096-14.592-11.207111-18.716444m48.867556-234.638222c-24.888889-0.085333-49.749333 0-74.609778 0v-0.085334c-25.258667 0-50.517333-0.056889-75.776 0.028445-13.425778 0.056889-20.963556 6.343111-21.162667 17.294222-0.199111 11.150222 7.082667 17.521778 20.679111 17.550222 50.488889 0.113778 100.977778 0.142222 151.495112 0.085333 13.368889 0 21.191111-6.485333 21.390222-17.152 0.227556-10.808889-8.106667-17.664-22.016-17.720888m-187.960889-127.146667c45.084444-26.026667 90.140444-52.110222 135.168-78.222222 4.864-2.844444 8.248889-6.855111 8.135111-12.942223-0.142222-11.036444-11.207111-17.436444-21.504-11.548444-45.511111 26.055111-90.851556 52.394667-136.135111 78.819556-7.68 4.494222-10.524444 11.52-5.575111 19.569777 4.835556 7.850667 12.088889 8.817778 19.911111 4.323556m-122.311111-115.114667c5.205333-0.256 8.220444-3.413333 10.609778-7.651555 4.920889-8.647111 10.040889-17.208889 14.990222-25.827556 20.48-35.555556 40.931556-71.025778 61.297778-106.609778 5.091556-8.874667 3.015111-16.668444-4.778667-18.517333-7.68-1.848889-10.894222 3.697778-14.051556 9.159111l-68.778666 119.495111c-2.844444 4.977778-6.030222 9.870222-8.305778 15.104-3.128889 7.196444 1.678222 14.648889 9.045333 14.848",
                    "p-id": "3454",
                    style: Gt({ fill: e.color }),
                  },
                  null,
                  4
                ),
              ])),
            ],
            4
          )
        );
      },
    });
  var Tn = S(Pn, [["__scopeId", "data-v-1f4fb407"]]);
  const In = {},
    Ln = {
      t: "1642063181211",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "5062",
      width: "128",
      height: "128",
      "data-v-cda444e0": "",
    },
    Mn = t(
      "path",
      {
        d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
        fill: "#52C41A",
        "p-id": "5063",
        "data-v-cda444e0": "",
      },
      null,
      -1
    ),
    On = [Mn];
  function Nn(e, a) {
    return i(), r("svg", Ln, On);
  }
  var jn = S(In, [["render", Nn]]);
  const qn = {},
    Rn = {
      width: "128",
      height: "128",
      viewBox: "0 0 50 50",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
    },
    Gn = Lt(
      '<g id="icon_internet-alert" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="wancheng"><path d="M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z" id="Path" fill-opacity="0.08" fill="#FAAD14" fill-rule="nonzero"></path><g id="Group-2" transform="translate(10.000000, 10.000000)"><path d="M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z" id="Path" fill="#FAAD14" fill-rule="nonzero"></path><path d="M15,6 C15.8284271,6 16.5,6.67157288 16.5,7.5 L16.5,18.5 C16.5,19.3284271 15.8284271,20 15,20 C14.1715729,20 13.5,19.3284271 13.5,18.5 L13.5,7.5 C13.5,6.67157288 14.1715729,6 15,6 Z" id="\u8DEF\u5F84" fill="#FFFFFF"></path><path d="M15,25 C14.171875,25 13.5,24.328125 13.5,23.5 C13.5,22.671875 14.171875,22 15,22 C15.828125,22 16.5,22.671875 16.5,23.5 C16.5,24.328125 15.828125,25 15,25 Z" id="\u8DEF\u5F84" fill="#FFFFFF"></path></g></g></g>',
      1
    ),
    Vn = [Gn];
  function Un(e, a) {
    return i(), r("svg", Rn, Vn);
  }
  var Wn = S(qn, [["render", Un]]),
    aa = {
      install: (e) => {
        e.component("icon-loading", Tn),
          e.component("icon-success", jn),
          e.component("icon-error", Wn);
      },
    };
  const Zn = (e) => {},
    Hn = () => new Date().getTime(),
    Jn = (e) => {
      if (e < 1e3) return `${e} B`;
      let o = 1e3,
        n = 0;
      for (let b = e / 1e3; b >= 1e3; b /= 1e3) (o *= 1e3), n++;
      let s = [" KB", " MB", " GB", " TB", " PB", " EB"];
      return (e / 100 / (o / 100)).toFixed(1) + s[n];
    },
    Kn = (e) => {
      if (e < 1024) return "" + e + "KB";
      let o = 1024,
        n = 0;
      for (let m = e / 1024; m >= 1024; m /= 1024) (o *= 1024), n++;
      let s = ["M", "G", "T", "P", "E"];
      return (e / 100 / (o / 100)).toFixed(2) + s[n];
    },
    Xn = (e) => {
      if (e == null) return 0;
      if (e < 1e4) return e;
      let o = parseInt(`${e / 1e4}`),
        n = e % 1e4;
      return `${o}\u4E07${n}`;
    },
    Qn = (e) => {
      if (e)
        try {
          var a = new Date(e),
            o = a.getHours(),
            n = a.getMinutes(),
            s = a.getSeconds();
          return (
            o < 10 && (o = `0${o}`),
            n < 10 && (n = `0${n}`),
            s < 10 && (s = `0${s}`),
            `${o}:${n}:${s}`
          );
        } catch (m) {}
      return "";
    },
    ti = (e) => {
      if (e) {
        let a = Math.floor(e / 86400),
          o = Math.floor(e / 3600) % 24,
          n = Math.floor(e / 60) % 60,
          s = e % 60;
        return (
          a +
          "\u5929" +
          o +
          "\u5C0F\u65F6" +
          (n < 10 ? "0" + n : n) +
          "\u5206" +
          (s < 10 ? "0" + s : s) +
          "\u79D2"
        );
      }
    },
    ei = (e) => /^\d+\.\d+\.\d+\.\d+$/.test(e),
    ai = (e) =>
      e.length < 3
        ? "\u7528\u6237\u540D\u592A\u77ED"
        : e.toLowerCase() != e
        ? "\u7528\u6237\u540D\u53EA\u80FD\u4E3A\u5C0F\u5199"
        : new RegExp("^\\d").exec(e)
        ? "\u7528\u6237\u540D\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934"
        : new RegExp("^_").exec(e)
        ? "\u7528\u6237\u540D\u4E0D\u80FD\u4EE5_\u5F00\u5934"
        : new RegExp("^[a-z0-9_]+$").exec(e)
        ? !0
        : "\u975E\u6CD5\u7684\u7528\u6237\u540D";
  var oi = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          formatDate: Zn,
          UnixDate: Hn,
          byteToSize: Jn,
          numberToSize: Kn,
          numberToSum: Xn,
          dateForm: Qn,
          stampForm: ti,
          checkIsIP: ei,
          checkSmabaUserName: ai,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    Ut = X({}, oi);
  const ni = { class: "flow" },
    ii = { class: "flow-data" },
    ri = { key: 0 },
    si = { key: 1 },
    di = T({
      setup(e) {
        Fa([Ca, Ea, $a, Da, Ba, Ya]);
        const a = F(),
          o = (_) => {
            var h;
            const p = (h = a.value) == null ? void 0 : h[_];
            return !p || p.startTime == 0
              ? ""
              : u(p.startTime * 1e3) + "-" + u(p.endTime * 1e3);
          },
          n = H(() => {
            var p;
            let _ = [];
            return (
              (p = a.value) == null ||
                p.forEach((h) => {
                  _.push({ value: h.uploadSpeed });
                }),
              _
            );
          }),
          s = H(() => {
            var p;
            let _ = [];
            return (
              (p = a.value) == null ||
                p.forEach((h) => {
                  _.push({ value: h.downloadSpeed });
                }),
              _
            );
          }),
          m = H(() => {
            var p;
            let _ = "";
            if (a.value) {
              let h = ((p = a.value) == null ? void 0 : p.length) || 0;
              if (h > 0) {
                let g = a.value[h - 1];
                _ = c(g.uploadSpeed) + "/s";
              }
            }
            return _;
          }),
          b = H(() => {
            var p;
            let _ = "";
            if (a.value) {
              let h = ((p = a.value) == null ? void 0 : p.length) || 0;
              if (h > 0) {
                let g = a.value[h - 1];
                _ = c(g.downloadSpeed) + "/s";
              }
            }
            return _;
          });
        H(() => {
          var p;
          let _ = [];
          return (
            (p = a.value) == null ||
              p.forEach((h) => {
                _.push({ value: h.downloadSpeed + h.uploadSpeed });
              }),
            _
          );
        });
        const f = () =>
            A(this, null, function* () {
              var _;
              try {
                const p = yield Y.Network.Statistics.GET();
                if (p.data && (_ = p.data.result) != null && _.items) {
                  const h = p.data.result.slots || 10;
                  if (p.data.result.items.length < h) {
                    let g = p.data.result.items;
                    for (; g.length < h; )
                      g = [
                        {
                          downloadSpeed: 0,
                          endTime: 0,
                          startTime: 0,
                          uploadSpeed: 0,
                        },
                      ].concat(g);
                    a.value = g;
                  } else
                    p.data.result.items.length > h
                      ? (a.value = p.data.result.items.slice(
                          h - p.data.result.items.length
                        ))
                      : (a.value = p.data.result.items);
                }
              } catch (p) {
                console.log(p);
              }
            }),
          u = Ut.dateForm,
          c = Ut.byteToSize,
          d = F();
        let v = null;
        const l = (_) => (
          (v = Aa(_, "dark")),
          v.setOption({
            animation: !1,
            backgroundColor: "transparent",
            color: ["transparent", "transparent"],
            tooltip: {
              trigger: "axis",
              formatter: (p) => {
                if (Array.isArray(p)) {
                  let h = "";
                  p.length > 0 && (h = o(p[0].axisValue));
                  for (let g = 0; g < p.length; g++)
                    h = `${h}<br>${p[g].seriesName}: ${c(p[g].value)}/s`;
                  return h.toString();
                } else {
                  const h = p;
                  return `${o(h.axisValue)}<br>${h.seriesName}: ${c(
                    h.value
                  )}/s`;
                }
              },
            },
            xAxis: {
              type: "category",
              boundaryGap: !1,
              splitLine: { lineStyle: { color: ["#999"] }, show: !1 },
              name: "",
              show: !1,
              nameGap: 0,
              nameTextStyle: { height: 0, lineHeight: 0, padding: 0 },
            },
            title: {
              text: "\u6D41\u91CF\u7EDF\u8BA1",
              textStyle: { fontSize: 12, color: "rgba(0, 0, 0, 0.6)" },
              top: "10px",
              left: "10px",
            },
            yAxis: {
              type: "value",
              name: "",
              minInterval: 1e4,
              interval: 1e3,
              axisLabel: {
                formatter: function (p, h) {
                  return `${c(p)}/s`;
                },
                color: "#fff",
                show: !1,
              },
              nameTextStyle: { color: "#fff" },
              splitLine: { lineStyle: { color: ["#999"] }, show: !1 },
            },
            series: [
              {
                name: "\u4E0B\u8F7D",
                data: s.value,
                type: "line",
                smooth: !0,
                areaStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: "rgba(32, 199, 247, 1)" },
                      { offset: 1, color: "rgba(32, 199, 247, 0.1)" },
                    ],
                    global: !1,
                  },
                },
              },
              {
                name: "\u4E0A\u4F20",
                data: n.value,
                type: "line",
                smooth: !0,
                areaStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: "rgba(85, 58, 254, 1)" },
                      { offset: 1, color: "rgba(85, 58, 254, 0.1)" },
                    ],
                    global: !1,
                  },
                },
              },
            ],
            legend: {
              padding: 0,
              align: "right",
              top: "10px",
              selected: { 上传: !0, 下载: !0 },
              textStyle: { color: "rgba(0, 0, 0, 0.6)" },
              itemStyle: { color: "#5e72e4" },
              lineStyle: { color: "#333" },
            },
            grid: {
              left: "2%",
              right: "2%",
              bottom: "0%",
              top: "10%",
              containLabel: !0,
            },
          }),
          v
        );
        return (
          At(() =>
            A(this, null, function* () {
              if ((yield f(), d.value)) {
                const _ = l(d.value);
                _.appendData;
                const p = d.value;
                _.resize({ width: p.clientWidth, height: p.clientHeight }),
                  window.addEventListener("resize", () => {
                    _.resize({ width: p.clientWidth, height: p.clientHeight });
                  });
                const h = () =>
                  A(this, null, function* () {
                    v != null &&
                      (yield f(),
                      v != null &&
                        (_.setOption({
                          series: [
                            {
                              name: "\u4E0B\u8F7D",
                              data: s.value,
                              type: "line",
                              areaStyle: {},
                              smooth: !0,
                            },
                            {
                              name: "\u4E0A\u4F20",
                              data: n.value,
                              type: "line",
                              areaStyle: {},
                              smooth: !0,
                            },
                          ],
                        }),
                        setTimeout(h, 5e3)));
                  });
                setTimeout(h, 5e3);
              }
            })
          ),
          Wt(() => {
            v != null && (v.dispose(), (v = null));
          }),
          (_, p) => (
            i(),
            r("div", ni, [
              t("div", { ref_key: "el", ref: d, class: "echart" }, null, 512),
              t("div", ii, [
                y(m)
                  ? (i(), r("span", ri, "\u4E0A\u4F20: " + k(y(m)), 1))
                  : $("", !0),
                y(b)
                  ? (i(), r("span", si, "\u4E0B\u8F7D: " + k(y(b)), 1))
                  : $("", !0),
              ]),
            ])
          )
        );
      },
    });
  var ci = S(di, [["__scopeId", "data-v-48990994"]]);
  const ui = {},
    li = {
      t: "1649668202191",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "2338",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "28px",
      height: "28px",
    },
    pi = t(
      "path",
      {
        d: "M288 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z",
        "p-id": "2339",
        fill: "#666",
      },
      null,
      -1
    ),
    fi = t(
      "path",
      {
        d: "M512 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z",
        "p-id": "2340",
        fill: "#666",
      },
      null,
      -1
    ),
    mi = t(
      "path",
      {
        d: "M736 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z",
        "p-id": "2341",
        fill: "#666",
      },
      null,
      -1
    ),
    vi = [pi, fi, mi];
  function bi(e, a) {
    return i(), r("svg", li, vi);
  }
  var Yt = S(ui, [["render", bi]]);
  let re = 0;
  const gi = {
      props: {
        type: String,
        message: String | Function,
        Close: Function,
        countdown: Number,
      },
      data() {
        return { show: !1, remain: 0 };
      },
      mounted() {
        if (
          (window.setTimeout(() => {
            this.show = !0;
          }, 0),
          this.countdown)
        ) {
          this.remain = this.countdown;
          const e = () => {
            this.show &&
              this.remain > 0 &&
              ((this.remain = this.remain - 1),
              (re = window.setTimeout(e, 1e3)));
          };
          re = window.setTimeout(e, 1e3);
        }
      },
      computed: {
        Message() {
          return this.message + (this.countdown ? " " + this.remain + "s" : "");
        },
      },
      methods: {
        Stop() {
          this.type != "loading" &&
            ((this.show = !1), re != 0 && clearTimeout(re), this.Close());
        },
      },
    },
    pe = (e) => (O("data-v-d4de282e"), (e = e()), N(), e),
    _i = { key: 0, class: "loading icon" },
    hi = pe(() =>
      t(
        "svg",
        {
          t: "1631799919469",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "3453",
          width: "128",
          height: "128",
        },
        [
          t("path", {
            d: "M522.695111 1.991111c-26.339556 0.170667-47.416889 21.475556-47.672889 48.753778-0.284444 26.453333-0.056889 52.963556-0.056889 79.445333 0 27.249778-0.369778 54.528 0.113778 81.777778 0.483556 27.050667 22.016 47.132444 49.351111 46.904889a47.786667 47.786667 0 0 0 47.729778-47.445333c0.284444-53.76 0.284444-107.52-0.028444-161.251556-0.170667-27.676444-21.902222-48.355556-49.436445-48.184889m-195.896889 88.092445c-8.334222-14.222222-21.646222-21.276444-38.314666-21.333334-35.128889 0-56.576 36.949333-38.968889 68.152889a11616.995556 11616.995556 0 0 0 78.961777 137.614222 44.942222 44.942222 0 0 0 61.838223 16.896c21.304889-12.202667 29.667556-38.968889 17.379555-60.871111-26.453333-47.104-53.560889-93.866667-80.896-140.458666m-228.693333 234.524444c44.316444 25.799111 88.746667 51.342222 133.176889 76.970667 6.712889 3.896889 13.681778 6.912 21.703111 6.428444 20.138667 0.142222 35.953778-11.946667 41.301333-31.573333 5.006222-18.261333-2.673778-36.721778-20.224-46.990222-44.629333-26.026667-89.372444-51.882667-134.115555-77.710223-22.528-12.999111-47.815111-7.025778-59.818667 13.909334-12.231111 21.248-4.977778 45.624889 17.948444 58.965333m34.161778 235.975111c26.396444 0 52.821333 0.199111 79.217778-0.085333 23.409778-0.256 39.139556-16.412444 38.798222-39.139556-0.341333-21.617778-16.924444-37.347556-39.594666-37.376-51.655111-0.056889-103.310222-0.056889-154.965334 0.028445-24.177778 0.056889-40.704 15.985778-40.561778 38.684444 0.142222 22.186667 16.583111 37.745778 40.192 37.859556 25.656889 0.142222 51.285333 0.028444 76.913778 0m151.722667 100.238222a34.247111 34.247111 0 0 0-46.876445-12.942222 13764.778667 13764.778667 0 0 0-139.008 80.583111c-11.093333 6.485333-16.327111 16.867556-16.497777 25.372444 0.085333 30.549333 27.249778 47.957333 50.403555 35.072 47.160889-26.197333 93.724444-53.475556 140.145778-80.924444 17.180444-10.154667 21.504-30.378667 11.832889-47.160889m91.875555 101.660444c-14.250667-4.067556-27.619556 1.422222-35.84 15.644445a24375.466667 24375.466667 0 0 0-77.312 134.485333c-10.012444 17.550222-5.859556 35.669333 9.784889 45.027556 16.014222 9.557333 34.247111 4.039111 44.714667-13.994667 25.543111-44.088889 50.915556-88.263111 76.373333-132.352 3.299556-5.745778 5.688889-11.690667 5.745778-14.933333 0-17.834667-9.272889-29.866667-23.466667-33.877334m147.456 44.288c-16.384 0.085333-27.306667 11.918222-27.448888 30.151111-0.142222 25.372444-0.028444 50.716444-0.028445 76.060445h-0.085333c0 26.112-0.113778 52.252444 0.056889 78.364444 0.113778 18.261333 11.064889 30.065778 27.448889 30.208 16.952889 0.142222 28.046222-11.832889 28.103111-30.748444 0.113778-51.086222 0.142222-102.172444 0.056889-153.258667 0-18.773333-11.207111-30.862222-28.103112-30.776889m177.208889-26.112c-7.509333-12.8-21.902222-16.014222-33.792-8.874666a23.722667 23.722667 0 0 0-8.533333 32.995555c26.282667 46.279111 52.906667 92.330667 79.644444 138.353778 4.494222 7.765333 11.633778 11.946667 20.906667 11.804444 18.545778-0.142222 30.520889-19.342222 21.219556-35.868444-26.026667-46.392889-52.650667-92.444444-79.473778-138.410667m239.957333-41.187555c-45.283556-26.254222-90.595556-52.48-135.964444-78.648889-4.693333-2.702222-9.728-4.323556-15.36-2.958222-9.102222 2.247111-14.933333 8.049778-16.497778 17.095111-1.877333 10.894222 3.84 18.204444 12.885333 23.438222 29.809778 17.180444 59.562667 34.417778 89.344 51.598222 15.217778 8.789333 30.236444 17.976889 45.738667 26.225778 14.677333 7.793778 31.061333-2.048 31.061333-18.033778-0.056889-8.448-4.096-14.592-11.207111-18.716444m48.867556-234.638222c-24.888889-0.085333-49.749333 0-74.609778 0v-0.085334c-25.258667 0-50.517333-0.056889-75.776 0.028445-13.425778 0.056889-20.963556 6.343111-21.162667 17.294222-0.199111 11.150222 7.082667 17.521778 20.679111 17.550222 50.488889 0.113778 100.977778 0.142222 151.495112 0.085333 13.368889 0 21.191111-6.485333 21.390222-17.152 0.227556-10.808889-8.106667-17.664-22.016-17.720888m-187.960889-127.146667c45.084444-26.026667 90.140444-52.110222 135.168-78.222222 4.864-2.844444 8.248889-6.855111 8.135111-12.942223-0.142222-11.036444-11.207111-17.436444-21.504-11.548444-45.511111 26.055111-90.851556 52.394667-136.135111 78.819556-7.68 4.494222-10.524444 11.52-5.575111 19.569777 4.835556 7.850667 12.088889 8.817778 19.911111 4.323556m-122.311111-115.114667c5.205333-0.256 8.220444-3.413333 10.609778-7.651555 4.920889-8.647111 10.040889-17.208889 14.990222-25.827556 20.48-35.555556 40.931556-71.025778 61.297778-106.609778 5.091556-8.874667 3.015111-16.668444-4.778667-18.517333-7.68-1.848889-10.894222 3.697778-14.051556 9.159111l-68.778666 119.495111c-2.844444 4.977778-6.030222 9.870222-8.305778 15.104-3.128889 7.196444 1.678222 14.648889 9.045333 14.848",
            "p-id": "3454",
          }),
        ],
        -1
      )
    ),
    xi = [hi],
    ki = { key: 1, class: "success icon" },
    wi = pe(() =>
      t(
        "svg",
        {
          t: "1632451272305",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "2204",
          width: "128",
          height: "128",
        },
        [
          t("path", {
            d: "M1001.305115 275.874141 431.461709 845.718571c-28.221762 28.221762-73.977875 28.221762-102.20066 0L22.661116 539.116591c-28.222785-28.221762-28.222785-73.979922 0-102.20066 28.221762-28.221762 73.977875-28.221762 102.20066 0l255.500115 255.502162 518.743588-518.743588c28.221762-28.221762 73.977875-28.221762 102.199637 0C1029.5279 201.89422 1029.5279 247.65238 1001.305115 275.874141z",
            "p-id": "2205",
          }),
        ],
        -1
      )
    ),
    yi = [wi],
    Fi = { key: 2, class: "error icon" },
    Ci = pe(() =>
      t(
        "svg",
        {
          t: "1632451325789",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "2204",
          width: "128",
          height: "128",
        },
        [
          t("path", {
            d: "M823.04 840.32 524.16 540.16l296.32-294.4c12.8-12.8 12.8-33.28 0-45.44-12.8-12.8-33.28-12.8-46.08 0L478.08 494.08 184.96 200.32c-12.8-12.8-33.28-12.8-45.44 0s-12.8 33.28 0 45.44l292.48 293.76-302.72 300.8c-12.8 12.8-12.8 33.28 0 45.44 12.8 12.8 33.28 12.8 46.08 0l302.72-300.16 299.52 300.16c12.8 12.8 33.28 12.8 45.44 0C835.2 873.6 835.2 853.12 823.04 840.32z",
            "p-id": "2205",
          }),
        ],
        -1
      )
    ),
    Ei = [Ci],
    $i = { key: 3, class: "warning icon" },
    Di = pe(() =>
      t(
        "svg",
        {
          t: "1632451401172",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "1638",
          width: "128",
          height: "128",
        },
        [
          t("path", {
            d: "M512 1021.45211835a60.32985613 60.32985613 0 1 1 60.32985613-60.32985611 60.32985613 60.32985613 0 0 1-60.32985613 60.32985611z m86.85823451-924.97400238L572.32985613 719.80283775a60.32985613 60.32985613 0 0 1-120.65971226 0l-26.52837838-623.32472178c-0.16758294-2.22885301-0.28489098-4.49122263-0.284891-6.78710881a87.14312551 87.14312551 0 0 1 174.28625102 0c0 2.2958862-0.11730806 4.5582558-0.284891 6.78710881z",
            "p-id": "1639",
          }),
        ],
        -1
      )
    ),
    Bi = [Di];
  function Yi(e, a, o, n, s, m) {
    return (
      i(),
      M(
        xt,
        { name: "el-fade-in-linear" },
        {
          default: q(() => [
            s.show
              ? (i(),
                r(
                  "div",
                  {
                    key: 0,
                    class: "toast",
                    onClick: a[1] || (a[1] = (b) => m.Stop()),
                  },
                  [
                    o.type == "loading"
                      ? (i(), r("div", _i, xi))
                      : o.type == "success"
                      ? (i(), r("div", ki, yi))
                      : o.type == "error"
                      ? (i(), r("div", Fi, Ei))
                      : o.type == "warning"
                      ? (i(), r("div", $i, Bi))
                      : $("", !0),
                    t(
                      "div",
                      {
                        class: "message",
                        onClick: a[0] || (a[0] = it(() => {}, ["stop"])),
                      },
                      k(m.Message),
                      1
                    ),
                  ]
                ))
              : $("", !0),
          ]),
          _: 1,
        }
      )
    );
  }
  var Ai = S(gi, [
    ["render", Yi],
    ["__scopeId", "data-v-d4de282e"],
  ]);
  const Qt = new Map(),
    Mt = (e) => {
      const a = tt(
          Ai,
          nt(X({}, e), {
            Close: () => {
              n();
            },
          })
        ),
        o = document.createElement("div");
      document.body.append(o), a.mount(o);
      const n = () => {
        o.remove(), Qt.get(a._uid) && Qt.delete(a._uid);
      };
      return (
        e.type == "loading" && Qt.set(a._uid, { Close: n }),
        (e == null ? void 0 : e.duration) == 0 ||
          ((e == null ? void 0 : e.duration) > 0
            ? setTimeout(
                () => {
                  n();
                },
                e == null ? void 0 : e.duration
              )
            : setTimeout(() => {
                n();
              }, 3e3)),
        { Close: n }
      );
    },
    x = (e) => Mt(e);
  x.Loading = (e, a) =>
    Mt({
      type: "loading",
      message: e || "\u52A0\u8F7D\u4E2D...",
      duration: 0,
      countdown: a || 0,
    });
  x.Success = (e) => Mt({ type: "success", message: e });
  x.Error = (e) => Mt({ type: "error", message: e });
  x.Warning = (e) => Mt({ type: "warning", message: e });
  x.Message = (e) => Mt({ message: e });
  x.Message = (e) => Mt({ message: e });
  x.Clear = () => {
    Qt.forEach((e, a) => {
      e.Close(), Qt.delete(a);
    });
  };
  const Si = {},
    zi = {
      t: "1640746738262",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "1216",
      width: "128",
      height: "128",
    },
    Pi = t(
      "path",
      {
        d: "M511.232 438.8352L112.9984 40.6016A51.2 51.2 0 0 0 40.6016 112.9984L438.784 511.232 40.6016 909.4656a51.2 51.2 0 1 0 72.3968 72.448l398.2336-398.2848 398.2336 398.2848a51.2 51.2 0 1 0 72.448-72.448l-398.2848-398.2336 398.2848-398.2336A51.2 51.2 0 0 0 909.4656 40.6016L511.232 438.784z",
        "p-id": "1217",
      },
      null,
      -1
    ),
    Ti = [Pi];
  function Ii(e, a) {
    return i(), r("svg", zi, Ti);
  }
  var Li = S(Si, [["render", Ii]]);
  const Mi = (e) => (O("data-v-6cc41886"), (e = e()), N(), e),
    Oi = { id: "actioner" },
    Ni = { key: 0, class: "action-container" },
    ji = { class: "action-container_header" },
    qi = Mi(() => t("div", null, null, -1)),
    Ri = { class: "title" },
    Gi = { class: "action-container_body" },
    Vi = T({
      props: {
        Close: { type: Function },
        type: { type: Number },
        title: String,
      },
      setup(e) {
        const a = e,
          o = F(!1);
        At(() => {
          (o.value = !0), document.body.setAttribute("lock-scroll", "true");
        }),
          Wt(() => {
            document.body.removeAttribute("lock-scroll");
          });
        const n = () => {
          a.Close &&
            ((o.value = !1),
            setTimeout(() => {
              a.Close && a.Close();
            }, 300));
        };
        return (s, m) => (
          i(),
          r("div", Oi, [
            t("div", { class: "bg", onClick: n }),
            e.type != null
              ? It(s.$slots, "default", { key: 0 }, void 0, !0)
              : (i(),
                r(
                  L,
                  { key: 1 },
                  [
                    o.value
                      ? (i(),
                        r("div", Ni, [
                          t("div", ji, [
                            qi,
                            t("div", Ri, k(e.title), 1),
                            t(
                              "button",
                              {
                                class: "close",
                                title: "\u5173\u95ED",
                                onClick: n,
                              },
                              [z(Li)]
                            ),
                          ]),
                          t("div", Gi, [
                            It(s.$slots, "default", {}, void 0, !0),
                          ]),
                        ]))
                      : $("", !0),
                  ],
                  64
                )),
          ])
        );
      },
    });
  var Ui = S(Vi, [["__scopeId", "data-v-6cc41886"]]);
  const ot = T({
      props: {
        Close: { type: Function },
        type: { type: Number },
        title: String,
      },
      setup(e) {
        return (a, o) => (
          i(),
          M(
            Ui,
            { Close: e.Close, type: e.type, title: e.title },
            { default: q(() => [It(a.$slots, "default")]), _: 3 },
            8,
            ["Close", "type", "title"]
          )
        );
      },
    }),
    Ct = (e) => (O("data-v-4663d414"), (e = e()), N(), e),
    Wi = ["onSubmit"],
    Zi = Ct(() =>
      t(
        "div",
        { class: "actioner-dns_header" },
        [t("span", null, "DNS\u914D\u7F6E")],
        -1
      )
    ),
    Hi = { class: "actioner-dns_body" },
    Ji = { class: "label-item" },
    Ki = Ct(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "DNS\u9009\u9879")],
        -1
      )
    ),
    Xi = { class: "label-item_value" },
    Qi = Ct(() =>
      t(
        "option",
        { value: "auto" },
        "\u4F7F\u7528\u8FD0\u8425\u5546\u63D0\u4F9B\u7684DNS",
        -1
      )
    ),
    tr = Ct(() =>
      t("option", { value: "manual" }, "\u81EA\u5B9A\u4E49DNS", -1)
    ),
    er = [Qi, tr],
    ar = { class: "label-item" },
    or = Ct(() =>
      t(
        "div",
        { class: "label-item_key" },
        "DNS\u670D\u52A1\u5668\u5730\u5740",
        -1
      )
    ),
    nr = { class: "label-item_value" },
    ir = ["onUpdate:modelValue"],
    rr = { class: "label-item" },
    sr = Ct(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "DNS\u670D\u52A1\u5668\u5730\u5740")],
        -1
      )
    ),
    dr = { class: "label-item_value" },
    cr = { class: "label-item" },
    ur = Ct(() =>
      t(
        "div",
        { class: "label-item_key" },
        "\u5907\u7528DNS\u670D\u52A1\u5668\u5730\u5740",
        -1
      )
    ),
    lr = { class: "label-item_value" },
    pr = { key: 1, class: "label-message" },
    fr = { class: "actioner-dns_footer" },
    mr = ["disabled"],
    vr = { key: 1, class: "actioner-dns" },
    br = Ct(() =>
      t(
        "div",
        { class: "actioner-dns_header" },
        [t("span", null, "DNS\u914D\u7F6E")],
        -1
      )
    ),
    gr = Ct(() =>
      t(
        "div",
        { class: "actioner-dns_body" },
        [
          t(
            "div",
            { class: "config-message" },
            "DNS\u914D\u7F6E\u5DF2\u4FDD\u5B58"
          ),
        ],
        -1
      )
    ),
    _r = T({
      props: { Close: { type: Function, required: !0 } },
      setup(e) {
        const a = e,
          o = F(0),
          n = F({ interfaceName: "", dnsProto: "auto", manualDnsIp: [] }),
          s = F(""),
          m = F(""),
          b = F(""),
          f = F(!1);
        (() =>
          A(this, null, function* () {
            var l;
            f.value = !0;
            try {
              const _ = yield Y.Guide.DnsConfig.GET();
              (l = _ == null ? void 0 : _.data) != null &&
                l.result &&
                (n.value = _.data.result);
            } catch (_) {
              b.value = _;
            }
            f.value = !1;
          }))();
        const c = () =>
            A(this, null, function* () {
              b.value = "";
              let l = {};
              switch (n.value.dnsProto) {
                case "auto":
                  break;
                case "manual":
                  (l.manualDnsIp = []),
                    n.value.manualDnsIp != null &&
                    n.value.manualDnsIp.length > 0
                      ? (l.manualDnsIp = n.value.manualDnsIp)
                      : (l.manualDnsIp.push(s.value),
                        m.value && l.manualDnsIp.push(m.value));
                  break;
              }
              (l.dnsProto = n.value.dnsProto),
                (l.interfaceName = n.value.interfaceName);
              const _ = x.Loading("\u914D\u7F6E\u4E2D...");
              try {
                const p = yield Y.Guide.DnsConfig.POST(l);
                if (p != null && p.data) {
                  const { success: h, error: g } = p == null ? void 0 : p.data;
                  g && (b.value = g),
                    (h == null || h == 0) &&
                      (x.Success("\u914D\u7F6E\u6210\u529F"), (o.value = 1));
                }
              } catch (p) {
                b.value = p;
              }
              _.Close();
            }),
          d = (l) => {
            l.preventDefault(), a.Close && a.Close();
          },
          v = (l) => {
            location.reload();
          };
        return (l, _) => (
          i(),
          M(
            ot,
            { Close: e.Close, type: 1 },
            {
              default: q(() => [
                o.value == 0
                  ? (i(),
                    r(
                      "form",
                      {
                        key: 0,
                        class: "actioner-dns",
                        onSubmit: it(c, ["prevent"]),
                      },
                      [
                        Zi,
                        t("div", Hi, [
                          t("div", Ji, [
                            Ki,
                            t("div", Xi, [
                              P(
                                t(
                                  "select",
                                  {
                                    "onUpdate:modelValue":
                                      _[0] ||
                                      (_[0] = (p) => (n.value.dnsProto = p)),
                                  },
                                  er,
                                  512
                                ),
                                [[Q, n.value.dnsProto]]
                              ),
                            ]),
                          ]),
                          n.value.dnsProto == "manual"
                            ? (i(),
                              r(
                                L,
                                { key: 0 },
                                [
                                  n.value.manualDnsIp != null &&
                                  n.value.manualDnsIp.length > 0
                                    ? (i(!0),
                                      r(
                                        L,
                                        { key: 0 },
                                        V(
                                          n.value.manualDnsIp,
                                          (p, h) => (
                                            i(),
                                            r("div", ar, [
                                              or,
                                              t("div", nr, [
                                                P(
                                                  t(
                                                    "input",
                                                    {
                                                      type: "text",
                                                      placeholder:
                                                        "\u8BF7\u8F93\u5165DNS\u5730\u5740",
                                                      "onUpdate:modelValue": (
                                                        g
                                                      ) =>
                                                        (n.value.manualDnsIp[
                                                          h
                                                        ] = g),
                                                    },
                                                    null,
                                                    8,
                                                    ir
                                                  ),
                                                  [
                                                    [
                                                      J,
                                                      n.value.manualDnsIp[h],
                                                      void 0,
                                                      { trim: !0 },
                                                    ],
                                                  ]
                                                ),
                                              ]),
                                            ])
                                          )
                                        ),
                                        256
                                      ))
                                    : (i(),
                                      r(
                                        L,
                                        { key: 1 },
                                        [
                                          t("div", rr, [
                                            sr,
                                            t("div", dr, [
                                              P(
                                                t(
                                                  "input",
                                                  {
                                                    type: "text",
                                                    placeholder:
                                                      "\u8BF7\u8F93\u5165DNS\u5730\u5740",
                                                    required: "",
                                                    "onUpdate:modelValue":
                                                      _[1] ||
                                                      (_[1] = (p) =>
                                                        (s.value = p)),
                                                  },
                                                  null,
                                                  512
                                                ),
                                                [
                                                  [
                                                    J,
                                                    s.value,
                                                    void 0,
                                                    { trim: !0 },
                                                  ],
                                                ]
                                              ),
                                            ]),
                                          ]),
                                          t("div", cr, [
                                            ur,
                                            t("div", lr, [
                                              P(
                                                t(
                                                  "input",
                                                  {
                                                    type: "text",
                                                    placeholder:
                                                      "\u5907\u7528DNS\u5730\u5740",
                                                    "onUpdate:modelValue":
                                                      _[2] ||
                                                      (_[2] = (p) =>
                                                        (m.value = p)),
                                                  },
                                                  null,
                                                  512
                                                ),
                                                [
                                                  [
                                                    J,
                                                    m.value,
                                                    void 0,
                                                    { trim: !0 },
                                                  ],
                                                ]
                                              ),
                                            ]),
                                          ]),
                                        ],
                                        64
                                      )),
                                ],
                                64
                              ))
                            : $("", !0),
                          b.value
                            ? (i(), r("div", pr, k(b.value), 1))
                            : $("", !0),
                        ]),
                        t("div", fr, [
                          t(
                            "button",
                            {
                              class: "cbi-button cbi-button-apply app-btn",
                              disabled: f.value,
                            },
                            "\u786E\u8BA4",
                            8,
                            mr
                          ),
                          t(
                            "button",
                            {
                              class:
                                "cbi-button cbi-button-remove app-btn app-back",
                              onClick: d,
                            },
                            "\u53D6\u6D88"
                          ),
                        ]),
                      ],
                      40,
                      Wi
                    ))
                  : o.value == 1
                  ? (i(),
                    r("div", vr, [
                      br,
                      gr,
                      t("div", { class: "actioner-dns_footer" }, [
                        t(
                          "button",
                          {
                            class:
                              "cbi-button cbi-button-remove app-btn app-back",
                            onClick: v,
                          },
                          "\u5B8C\u6210"
                        ),
                      ]),
                    ]))
                  : $("", !0),
              ]),
              _: 1,
            },
            8,
            ["Close"]
          )
        );
      },
    });
  var hr = S(_r, [["__scopeId", "data-v-4663d414"]]);
  const oa = () => {
      const e = document.createElement("div");
      document.body.appendChild(e);
      const a = tt(hr, {
        Close: () => {
          o();
        },
      });
      a.mount(e);
      const o = () => {
        a.unmount(), e.remove();
      };
      return { Close: o };
    },
    fe = (e) => (O("data-v-c61837cc"), (e = e()), N(), e),
    xr = { class: "action" },
    kr = { class: "action-body" },
    wr = fe(() =>
      t(
        "div",
        { class: "icon" },
        [
          t(
            "svg",
            {
              t: "1642063181211",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "5062",
              width: "128",
              height: "128",
              "data-v-cda444e0": "",
            },
            [
              t("path", {
                d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
                fill: "#52C41A",
                "p-id": "5063",
                "data-v-cda444e0": "",
              }),
            ]
          ),
        ],
        -1
      )
    ),
    yr = fe(() =>
      t("h2", { class: "title" }, "\u670D\u52A1\u5DF2\u542F\u52A8", -1)
    ),
    Fr = { class: "info" },
    Cr = fe(() => t("span", null, "\u524D\u5F80", -1)),
    Er = ["href"],
    $r = fe(() => t("span", null, "\u8FDB\u884C\u6D4B\u901F", -1)),
    Dr = T({
      props: { port: Number, Close: Function },
      setup(e) {
        const a = e,
          o = H(() => `http://${location.hostname}:${a.port}`),
          n = () => {
            a.Close && (a.Close(), location.reload());
          };
        return (s, m) => (
          i(),
          M(
            ot,
            { type: 1 },
            {
              default: q(() => [
                z(
                  xt,
                  { name: "rotate", mode: "out-in" },
                  {
                    default: q(() => [
                      t("div", xr, [
                        t("div", kr, [
                          wr,
                          yr,
                          t("div", Fr, [
                            Cr,
                            t(
                              "a",
                              {
                                href: y(o),
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              k(y(o)),
                              9,
                              Er
                            ),
                            $r,
                          ]),
                          t("div", { class: "btns" }, [
                            t(
                              "button",
                              {
                                class:
                                  "cbi-button cbi-button-remove app-btn app-back",
                                type: "button",
                                onClick: n,
                              },
                              "\u5173\u95ED"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        );
      },
    });
  var Br = S(Dr, [["__scopeId", "data-v-c61837cc"]]),
    Ge = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        Br,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    };
  const Be = (e) => (O("data-v-56301e9e"), (e = e()), N(), e),
    Yr = Be(() =>
      t(
        "div",
        { class: "app-container_status-label_iconer" },
        [
          t(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              "xmlns:v": "https://vecta.io/nano",
              width: "48",
              height: "38",
              viewBox: "0 0 12.7 10.05",
            },
            [
              t("defs", null, [
                t(
                  "filter",
                  { id: "A", "color-interpolation-filters": "sRGB" },
                  [
                    t("feColorMatrix", {
                      result: "A",
                      values:
                        "2 -0.5 -0.5 0 0 -0.5 2 -0.5 0 0 -0.5 -0.5 2 0 0 0 0 0 1 0 ",
                    }),
                    t("feColorMatrix", {
                      values: "0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0",
                    }),
                    t("feColorMatrix", {
                      in: "A",
                      values:
                        "2 -0.5 -0.5 0 0 -0.5 2 -0.5 0 0 -0.5 -0.5 2 0 0 0 0 0 1 0 ",
                    }),
                  ]
                ),
                t("path", { id: "B", d: "M80.56 75.75h3.91v22.79h-3.91z" }),
              ]),
              t("g", { transform: "translate(0 -286.95)" }, [
                t("rect", {
                  x: ".21",
                  y: "287.25",
                  width: "12.33",
                  height: "9.5",
                  ry: ".57",
                  fill: "#e6e6e6",
                  stroke: "#e6e6e6",
                  "stroke-linejoin": "round",
                  "stroke-width": ".37",
                  "paint-order": "normal",
                }),
                t("path", {
                  transform: "matrix(.105 0 0 .0989 -6.0834 280.6)",
                  d: "M73.96 75.66h89.41c2.31 0 4.17 1.86 4.17 4.17v52.65h-21.74v9.41h-8.69v12.59h-36.87v-12.59h-8.69v-9.41H69.79V79.83c0-2.31 1.86-4.17 4.17-4.17z",
                  fill: "#999",
                  filter: "url(#A)",
                  stroke: "#999",
                  "stroke-width": "2.5",
                }),
                t(
                  "g",
                  {
                    transform: "matrix(.1048 0 0 .1048 -6.0999 280.7)",
                    fill: "#fff",
                    filter: "url(#A)",
                    stroke: "#fff",
                  },
                  [
                    t("use", { "xlink:href": "#B" }),
                    t("use", { "xlink:href": "#B", x: "73.04" }),
                    t("use", { "xlink:href": "#B", x: "52.17" }),
                    t("use", { "xlink:href": "#B", x: "41.74" }),
                    t("use", { "xlink:href": "#B", x: "31.3" }),
                    t("use", { "xlink:href": "#B", x: "20.87" }),
                    t("use", { "xlink:href": "#B", x: "10.43" }),
                    t("use", { "xlink:href": "#B", x: "62.61" }),
                  ]
                ),
                t("rect", {
                  x: "1.24",
                  y: "294.55",
                  width: "1.6",
                  height: "1.38",
                  ry: ".11",
                  fill: "#ccc",
                  stroke: "#ccc",
                  "stroke-width": ".22",
                  "paint-order": "normal",
                }),
              ]),
            ]
          ),
        ],
        -1
      )
    ),
    Ar = { class: "app-container_status-label_text" },
    Sr = Be(() => t("div", { class: "text_status" }, "\u5DF2\u65AD\u5F00", -1)),
    zr = { class: "text_info" },
    Pr = Be(() =>
      t(
        "div",
        { class: "app-container_status-label_iconer" },
        [
          t(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              width: "48",
              height: "38",
              viewBox: "0 0 12.7 10.05",
              "xmlns:v": "https://vecta.io/nano",
            },
            [
              t("defs", null, [
                t(
                  "filter",
                  { id: "A", "color-interpolation-filters": "sRGB" },
                  [
                    t("feColorMatrix", {
                      result: "A",
                      values:
                        "2 -0.5 -0.5 0 0 -0.5 2 -0.5 0 0 -0.5 -0.5 2 0 0 0 0 0 1 0 ",
                    }),
                    t("feColorMatrix", {
                      values: "0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0",
                    }),
                    t("feColorMatrix", {
                      in: "A",
                      values:
                        "2 -0.5 -0.5 0 0 -0.5 2 -0.5 0 0 -0.5 -0.5 2 0 0 0 0 0 1 0 ",
                    }),
                  ]
                ),
                t("path", { id: "B", d: "M80.56 75.75h3.91v22.79h-3.91z" }),
              ]),
              t("g", { transform: "translate(-.03 -287.07)" }, [
                t("rect", {
                  x: ".24",
                  y: "287.36",
                  width: "12.33",
                  height: "9.5",
                  ry: ".57",
                  fill: "#e6e6e6",
                  stroke: "#e6e6e6",
                  "stroke-linejoin": "round",
                  "stroke-width": ".37",
                  "paint-order": "normal",
                }),
                t("path", {
                  transform: "matrix(.105 0 0 .0989 -6.0532 280.72)",
                  d: "M73.96 75.66h89.41c2.31 0 4.17 1.86 4.17 4.17v52.65h-21.74v9.41h-8.69v12.59h-36.87v-12.59h-8.69v-9.41H69.79V79.83c0-2.31 1.86-4.17 4.17-4.17z",
                  fill: "#4d4d4d",
                  filter: "url(#A)",
                  stroke: "#4d4d4d",
                  "stroke-width": "2.5",
                }),
                t(
                  "g",
                  {
                    transform: "matrix(.1048 0 0 .1048 -6.0697 280.81)",
                    fill: "#fff",
                    filter: "url(#A)",
                    stroke: "#fff",
                  },
                  [
                    t("use", { "xlink:href": "#B" }),
                    t("use", { "xlink:href": "#B", x: "73.04" }),
                    t("use", { "xlink:href": "#B", x: "52.17" }),
                    t("use", { "xlink:href": "#B", x: "41.74" }),
                    t("use", { "xlink:href": "#B", x: "31.3" }),
                    t("use", { "xlink:href": "#B", x: "20.87" }),
                    t("use", { "xlink:href": "#B", x: "10.43" }),
                    t("use", { "xlink:href": "#B", x: "62.61" }),
                  ]
                ),
                t("rect", {
                  x: "1.27",
                  y: "294.67",
                  width: "1.6",
                  height: "1.38",
                  ry: ".11",
                  fill: "#55d400",
                  stroke: "#55d400",
                  "stroke-width": ".22",
                  "paint-order": "normal",
                }),
              ]),
            ]
          ),
        ],
        -1
      )
    ),
    Tr = { class: "app-container_status-label_text" },
    Ir = { class: "text_info" },
    Lr = T({
      props: {
        item: { type: Object, required: !0 },
        transform: { type: Number, default: 0 },
      },
      setup(e) {
        const a = e,
          o = Xe(),
          n = F(null),
          s = (b) => {
            const f = b.target,
              { left: u, top: c } = f.getBoundingClientRect();
            (o.portitemStyle.show = !0),
              (o.portitemStyle.left = u),
              (o.portitemStyle.top = c),
              (o.portitemStyle.portitem = a.item);
          },
          m = (b) => {
            o.portitemStyle.show = !1;
          };
        return (b, f) => (
          i(),
          r(
            "div",
            {
              class: "app-container_status-label_bg",
              style: Gt(`transform: translateX(${e.transform}px);`),
              ref_key: "el",
              ref: n,
              onMouseenter: s,
              onMouseleave: m,
            },
            [
              e.item.linkState == "DOWN"
                ? (i(),
                  r(
                    L,
                    { key: 0 },
                    [
                      Yr,
                      t("div", Ar, [
                        Sr,
                        t(
                          "div",
                          zr,
                          k(e.item.name) +
                            " " +
                            k(
                              e.item.interfaceNames
                                ? `(${e.item.interfaceNames
                                    .join(",")
                                    .toLocaleUpperCase()})`
                                : ""
                            ),
                          1
                        ),
                      ]),
                    ],
                    64
                  ))
                : (i(),
                  r(
                    L,
                    { key: 1 },
                    [
                      Pr,
                      t("div", Tr, [
                        t("div", null, k(e.item.linkSpeed), 1),
                        t(
                          "div",
                          Ir,
                          k(e.item.name) +
                            " " +
                            k(
                              e.item.interfaceNames
                                ? `(${e.item.interfaceNames
                                    .join(",")
                                    .toLocaleUpperCase()})`
                                : ""
                            ),
                          1
                        ),
                      ]),
                    ],
                    64
                  )),
            ],
            36
          )
        );
      },
    });
  var na = S(Lr, [["__scopeId", "data-v-56301e9e"]]);
  const ia = (e) => (O("data-v-6f355f28"), (e = e()), N(), e),
    Mr = ia(() => t("span", null, k("<"), -1)),
    Or = [Mr],
    Nr = ia(() => t("span", null, k(">"), -1)),
    jr = [Nr],
    qr = T({
      props: { portList: { type: Array, required: !0 } },
      setup(e) {
        const a = F(),
          o = F(0),
          n = F(0),
          s = F(0),
          m = F(!1),
          b = () => {
            if (s.value >= 0) {
              s.value = 0;
              return;
            }
            s.value += 100;
          },
          f = () => {
            if (s.value <= 0 - o.value + n.value) {
              s.value = 0 - o.value + n.value;
              return;
            }
            s.value -= 100;
          };
        return (
          At(() => {
            Sa(() => {
              a.value &&
                ((o.value = a.value.scrollWidth),
                (n.value = a.value.clientWidth),
                (m.value = o.value > n.value));
            });
          }),
          (u, c) => (
            i(),
            r(
              "div",
              { class: "app-interfaces", ref_key: "el", ref: a },
              [
                m.value
                  ? (i(),
                    r(
                      L,
                      { key: 0 },
                      [
                        t("a", { class: "btn-f", onClick: b }, Or),
                        t("a", { class: "btn-r", onClick: f }, jr),
                      ],
                      64
                    ))
                  : $("", !0),
                (i(!0),
                r(
                  L,
                  null,
                  V(
                    e.portList,
                    (d, v) => (
                      i(),
                      M(na, { item: d, transform: s.value }, null, 8, [
                        "item",
                        "transform",
                      ])
                    )
                  ),
                  256
                )),
              ],
              512
            )
          )
        );
      },
    });
  var Rr = S(qr, [["__scopeId", "data-v-6f355f28"]]);
  const Gr = {},
    Vr = {
      width: "82px",
      height: "82px",
      viewBox: "0 0 82 82",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
    },
    Ur = Lt(
      '<title>icon_finished</title><g id="icon_finished" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="circle" transform="translate(2.000000, 2.000000)"><circle id="Oval" stroke="#553AFE" stroke-width="4" cx="39" cy="39" r="39"></circle><circle id="Oval" fill="#553AFE" cx="39.028463" cy="39.028463" r="35.028463"></circle><path d="M41.0148619,52.8014169 C39.924327,53.7754409 39.8138203,55.4674462 40.7680384,56.5806164 C41.7222564,57.6937867 43.3798562,57.8065871 44.4703911,56.8325631 L54.9654709,47.4587599 C56.1301083,46.4185505 56.1643255,44.5807064 55.0392485,43.4960788 L31.4253189,20.7311283 C30.3718273,19.7155123 28.7112257,19.7639428 27.7162614,20.8393009 C26.7212971,21.914659 26.7687429,23.6097284 27.8222345,24.6253444 L49.3379698,45.3675358 L41.0148619,52.8014169 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero" transform="translate(41.430740, 38.747628) rotate(-270.000000) translate(-41.430740, -38.747628) "></path></g></g>',
      2
    ),
    Wr = [Ur];
  function Zr(e, a) {
    return i(), r("svg", Vr, Wr);
  }
  var Ye = S(Gr, [["render", Zr]]);
  const Zt = (e) => (O("data-v-99d089d6"), (e = e()), N(), e),
    Hr = ["onSubmit"],
    Jr = Zt(() =>
      t(
        "div",
        { class: "actioner-dns_header" },
        [t("span", null, "\u8F6F\u4EF6\u6E90\u914D\u7F6E")],
        -1
      )
    ),
    Kr = { class: "actioner-dns_body" },
    Xr = { class: "label-item" },
    Qr = Zt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u5F53\u524D\u8F6F\u4EF6\u6E90")],
        -1
      )
    ),
    ts = { class: "label-item_value" },
    es = { class: "item_info" },
    as = { class: "label-item" },
    os = Zt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u5207\u6362\u8F6F\u4EF6\u6E90")],
        -1
      )
    ),
    ns = { class: "label-item_value" },
    is = Zt(() =>
      t(
        "option",
        { selected: "true", value: "" },
        "\u8BF7\u9009\u62E9\u8F6F\u4EF6\u6E90",
        -1
      )
    ),
    rs = ["value"],
    ss = { class: "actioner-dns_footer" },
    ds = ["disabled"],
    cs = { key: 1, class: "actioner-dns" },
    us = Zt(() =>
      t(
        "div",
        { class: "actioner-dns_header" },
        [
          t(
            "span",
            { class: "softsource_tit" },
            "\u8F6F\u4EF6\u6E90\u914D\u7F6E"
          ),
        ],
        -1
      )
    ),
    ls = { class: "actioner-dns_body" },
    ps = { class: "finished" },
    fs = Zt(() =>
      t("p", { class: "successed" }, "\u914D\u7F6E\u6210\u529F\uFF01", -1)
    ),
    ms = T({
      props: { Close: { type: Function, required: !0 } },
      setup(e) {
        const a = e,
          o = F(0),
          n = F(""),
          s = F(),
          m = F();
        (() => {
          Y.Guide.SoftSourceList.GET()
            .then((d) => {
              var v, l;
              if ((v = d == null ? void 0 : d.data) != null && v.result) {
                const _ =
                  (l = d == null ? void 0 : d.data) == null ? void 0 : l.result;
                m.value = _;
              }
            })
            .then(() => Y.Guide.GetSoftSource.GET())
            .then((d) => {
              var v, l;
              if ((v = d == null ? void 0 : d.data) != null && v.result) {
                const _ = d.data.result;
                (s.value = _.softSource),
                  (l = m.value) != null &&
                    l.softSourceList.find(
                      (p) => p.identity == _.softSource.identity
                    ) &&
                    (n.value = _.softSource.identity);
              }
            });
        })();
        const f = (d) => {
            d.preventDefault(), a.Close && a.Close();
          },
          u = (d) => {
            const v = x.Loading("\u6B63\u5728\u5207\u6362\u4E2D...");
            Y.Guide.SoftSource.POST({ softSourceIdentity: n.value })
              .then((l) => {
                if (l != null && l.data) {
                  if ((l.data.success || 0) == 0) {
                    o.value = 1;
                    return;
                  } else if (l.data.error) throw l.data.error;
                }
                throw "\u672A\u77E5\u9519\u8BEF";
              })
              .catch((l) => {
                x.Error(l);
              })
              .finally(() => v.Close());
          },
          c = (d) => {
            d.preventDefault(), location.reload();
          };
        return (d, v) => (
          i(),
          M(
            ot,
            { Close: e.Close, type: 1 },
            {
              default: q(() => {
                var l, _;
                return [
                  o.value == 0
                    ? (i(),
                      r(
                        "form",
                        {
                          key: 0,
                          class: "actioner-dns",
                          onSubmit: it(u, ["prevent"]),
                        },
                        [
                          Jr,
                          t("div", Kr, [
                            t("div", Xr, [
                              Qr,
                              t("div", ts, [
                                t(
                                  "p",
                                  es,
                                  k((l = s.value) == null ? void 0 : l.name),
                                  1
                                ),
                              ]),
                            ]),
                            t("div", as, [
                              os,
                              t("div", ns, [
                                P(
                                  t(
                                    "select",
                                    {
                                      name: "",
                                      id: "",
                                      "onUpdate:modelValue":
                                        v[0] || (v[0] = (p) => (n.value = p)),
                                    },
                                    [
                                      is,
                                      (i(!0),
                                      r(
                                        L,
                                        null,
                                        V(
                                          (_ = m.value) == null
                                            ? void 0
                                            : _.softSourceList,
                                          (p, h) => (
                                            i(),
                                            r(
                                              "option",
                                              { value: p.identity, key: h },
                                              k(p.name),
                                              9,
                                              rs
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ],
                                    512
                                  ),
                                  [[Q, n.value, void 0, { trim: !0 }]]
                                ),
                              ]),
                            ]),
                          ]),
                          t("div", ss, [
                            t(
                              "button",
                              {
                                class: "cbi-button cbi-button-apply app-btn",
                                disabled: n.value == "",
                              },
                              "\u786E\u8BA4",
                              8,
                              ds
                            ),
                            t(
                              "button",
                              {
                                class:
                                  "cbi-button cbi-button-remove app-btn app-back",
                                onClick: f,
                              },
                              "\u53D6\u6D88"
                            ),
                          ]),
                        ],
                        40,
                        Hr
                      ))
                    : $("", !0),
                  o.value == 1
                    ? (i(),
                      r("form", cs, [
                        us,
                        t("div", ls, [
                          t("div", ps, [z(Ye)]),
                          fs,
                          t("div", { class: "btns" }, [
                            t(
                              "button",
                              {
                                class:
                                  "cbi-button cbi-button-apply softsource_successed",
                                onClick: c,
                              },
                              "\u786E\u5B9A"
                            ),
                          ]),
                        ]),
                      ]))
                    : $("", !0),
                ];
              }),
              _: 1,
            },
            8,
            ["Close"]
          )
        );
      },
    });
  var vs = S(ms, [["__scopeId", "data-v-99d089d6"]]);
  const ra = () => {
      const e = document.createElement("div");
      document.body.appendChild(e);
      const a = tt(vs, {
        Close: () => {
          o();
        },
      });
      a.mount(e);
      const o = () => {
        a.unmount(), e.remove();
      };
      return { Close: o };
    },
    lt = (e) => (O("data-v-4a1fa016"), (e = e()), N(), e),
    bs = { class: "app-container_status-label" },
    gs = { class: "app-container_status-label_item" },
    _s = { class: "app-container_status-container", style: { height: "100%" } },
    hs = { key: 0, class: "app-container_status-container_body" },
    xs = lt(() =>
      t(
        "svg",
        {
          width: "50px",
          height: "50px",
          viewBox: "0 0 50 50",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
        },
        [
          t("title", null, "icon_internet connected"),
          t(
            "g",
            {
              id: "icon_internet-connected",
              stroke: "none",
              "stroke-width": "1",
              fill: "none",
              "fill-rule": "evenodd",
            },
            [
              t("g", { id: "wancheng", "fill-rule": "nonzero" }, [
                t("path", {
                  d: "M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z",
                  id: "Path",
                  "fill-opacity": "0.0779329313",
                  fill: "#553AFE",
                }),
                t(
                  "g",
                  {
                    id: "Group-2",
                    transform: "translate(10.000000, 10.000000)",
                  },
                  [
                    t("path", {
                      d: "M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z",
                      id: "Path",
                      fill: "#553AFE",
                    }),
                    t("path", {
                      d: "M8,15 L13.2546984,20.2546984 C13.6452227,20.6452227 14.2783876,20.6452227 14.6689119,20.2546984 C14.6813066,20.2423037 14.6933732,20.2295853 14.7050993,20.2165563 L23,11 L23,11",
                      id: "Path-3",
                      stroke: "#FFFFFF",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                    }),
                  ]
                ),
              ]),
            ]
          ),
        ],
        -1
      )
    ),
    ks = { class: "app-container_status-info" },
    ws = lt(() =>
      t(
        "span",
        { class: "container_success" },
        "\u5DF2\u8FDE\u63A5\u4E92\u8054\u7F51",
        -1
      )
    ),
    ys = { class: "container_time" },
    Fs = { key: 1, class: "app-container_status-container_body" },
    Cs = lt(() =>
      t(
        "svg",
        {
          width: "50px",
          height: "50px",
          viewBox: "0 0 50 50",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
        },
        [
          t(
            "g",
            {
              id: "icon_internet-alert",
              stroke: "none",
              "stroke-width": "1",
              fill: "none",
              "fill-rule": "evenodd",
            },
            [
              t("g", { id: "wancheng" }, [
                t("path", {
                  d: "M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z",
                  id: "Path",
                  "fill-opacity": "0.08",
                  fill: "#FAAD14",
                  "fill-rule": "nonzero",
                }),
                t(
                  "g",
                  {
                    id: "Group-2",
                    transform: "translate(10.000000, 10.000000)",
                  },
                  [
                    t("path", {
                      d: "M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z",
                      id: "Path",
                      fill: "#FAAD14",
                      "fill-rule": "nonzero",
                    }),
                    t("path", {
                      d: "M15,6 C15.8284271,6 16.5,6.67157288 16.5,7.5 L16.5,18.5 C16.5,19.3284271 15.8284271,20 15,20 C14.1715729,20 13.5,19.3284271 13.5,18.5 L13.5,7.5 C13.5,6.67157288 14.1715729,6 15,6 Z",
                      id: "\u8DEF\u5F84",
                      fill: "#FFFFFF",
                    }),
                    t("path", {
                      d: "M15,25 C14.171875,25 13.5,24.328125 13.5,23.5 C13.5,22.671875 14.171875,22 15,22 C15.828125,22 16.5,22.671875 16.5,23.5 C16.5,24.328125 15.828125,25 15,25 Z",
                      id: "\u8DEF\u5F84",
                      fill: "#FFFFFF",
                    }),
                  ]
                ),
              ]),
            ]
          ),
        ],
        -1
      )
    ),
    Es = { class: "app-container_status-info" },
    $s = lt(() =>
      t("span", { class: "container_failure" }, "DNS\u9519\u8BEF", -1)
    ),
    Ds = { class: "container_time" },
    Bs = { key: 2, class: "app-container_status-container_body" },
    Ys = lt(() =>
      t(
        "svg",
        {
          width: "50px",
          height: "50px",
          viewBox: "0 0 50 50",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
        },
        [
          t(
            "g",
            {
              id: "icon_internet-alert",
              stroke: "none",
              "stroke-width": "1",
              fill: "none",
              "fill-rule": "evenodd",
            },
            [
              t("g", { id: "wancheng" }, [
                t("path", {
                  d: "M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z",
                  id: "Path",
                  "fill-opacity": "0.08",
                  fill: "#FAAD14",
                  "fill-rule": "nonzero",
                }),
                t(
                  "g",
                  {
                    id: "Group-2",
                    transform: "translate(10.000000, 10.000000)",
                  },
                  [
                    t("path", {
                      d: "M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z",
                      id: "Path",
                      fill: "#FAAD14",
                      "fill-rule": "nonzero",
                    }),
                    t("path", {
                      d: "M15,6 C15.8284271,6 16.5,6.67157288 16.5,7.5 L16.5,18.5 C16.5,19.3284271 15.8284271,20 15,20 C14.1715729,20 13.5,19.3284271 13.5,18.5 L13.5,7.5 C13.5,6.67157288 14.1715729,6 15,6 Z",
                      id: "\u8DEF\u5F84",
                      fill: "#FFFFFF",
                    }),
                    t("path", {
                      d: "M15,25 C14.171875,25 13.5,24.328125 13.5,23.5 C13.5,22.671875 14.171875,22 15,22 C15.828125,22 16.5,22.671875 16.5,23.5 C16.5,24.328125 15.828125,25 15,25 Z",
                      id: "\u8DEF\u5F84",
                      fill: "#FFFFFF",
                    }),
                  ]
                ),
              ]),
            ]
          ),
        ],
        -1
      )
    ),
    As = { class: "app-container_status-info" },
    Ss = lt(() =>
      t(
        "span",
        { class: "container_failure" },
        "\u8F6F\u4EF6\u6E90\u9519\u8BEF",
        -1
      )
    ),
    zs = { class: "container_time" },
    Ps = { key: 3, class: "app-container_status-container_body" },
    Ts = lt(() =>
      t(
        "svg",
        {
          width: "50px",
          height: "50px",
          viewBox: "0 0 50 50",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
        },
        [
          t(
            "g",
            {
              id: "icon_internet-alert",
              stroke: "none",
              "stroke-width": "1",
              fill: "none",
              "fill-rule": "evenodd",
            },
            [
              t("g", { id: "wancheng" }, [
                t("path", {
                  d: "M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z",
                  id: "Path",
                  "fill-opacity": "0.08",
                  fill: "#FAAD14",
                  "fill-rule": "nonzero",
                }),
                t(
                  "g",
                  {
                    id: "Group-2",
                    transform: "translate(10.000000, 10.000000)",
                  },
                  [
                    t("path", {
                      d: "M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z",
                      id: "Path",
                      fill: "#FAAD14",
                      "fill-rule": "nonzero",
                    }),
                    t("path", {
                      d: "M15,6 C15.8284271,6 16.5,6.67157288 16.5,7.5 L16.5,18.5 C16.5,19.3284271 15.8284271,20 15,20 C14.1715729,20 13.5,19.3284271 13.5,18.5 L13.5,7.5 C13.5,6.67157288 14.1715729,6 15,6 Z",
                      id: "\u8DEF\u5F84",
                      fill: "#FFFFFF",
                    }),
                    t("path", {
                      d: "M15,25 C14.171875,25 13.5,24.328125 13.5,23.5 C13.5,22.671875 14.171875,22 15,22 C15.828125,22 16.5,22.671875 16.5,23.5 C16.5,24.328125 15.828125,25 15,25 Z",
                      id: "\u8DEF\u5F84",
                      fill: "#FFFFFF",
                    }),
                  ]
                ),
              ]),
            ]
          ),
        ],
        -1
      )
    ),
    Is = { class: "app-container_status-info" },
    Ls = lt(() =>
      t(
        "span",
        { class: "container_failure" },
        "\u672A\u8FDE\u63A5\u4E92\u8054\u7F51",
        -1
      )
    ),
    Ms = { class: "container_time" },
    Os = { key: 4, class: "app-container_status-container_body" },
    Ns = lt(() =>
      t(
        "svg",
        {
          width: "50px",
          height: "50px",
          viewBox: "0 0 50 50",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
        },
        [
          t(
            "g",
            {
              id: "icon_internet-launching",
              stroke: "none",
              "stroke-width": "1",
              fill: "none",
              "fill-rule": "evenodd",
            },
            [
              t("g", { id: "wancheng", "fill-rule": "nonzero" }, [
                t("path", {
                  d: "M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z",
                  id: "Path",
                  "fill-opacity": "0.08",
                  fill: "#3ED4AB",
                }),
                t(
                  "g",
                  {
                    id: "Group-2",
                    transform: "translate(10.000000, 10.000000)",
                  },
                  [
                    t("path", {
                      d: "M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z",
                      id: "Path",
                      fill: "#3ED4AB",
                    }),
                    t("path", {
                      d: "M11.5738525,15.0233901 C11.5738525,14.8431935 11.5023882,14.6703653 11.3750746,14.5429471 C11.2477609,14.4155288 11.0750745,14.3439644 10.8950258,14.3440059 L7.67882684,14.3440059 C7.49875102,14.3439644 7.326041,14.4155503 7.19872281,14.5430024 C7.07140462,14.6704545 6.99991721,14.8433228 7.00000007,15.0235465 C7.00000007,15.2037431 7.0714644,15.3765713 7.19877809,15.5039895 C7.32609178,15.6314078 7.4987781,15.7029722 7.67882684,15.7029307 L10.8950258,15.7029307 C11.0750745,15.7029722 11.2477609,15.6314078 11.3750746,15.5039895 C11.5023882,15.3765713 11.5738525,15.2037431 11.5738525,15.0235465 L11.5738525,15.0233901 Z M22.3211553,14.3440059 L19.1049564,14.3440059 C18.9248806,14.3439644 18.7521705,14.4155503 18.6248524,14.5430024 C18.4975342,14.6704545 18.4260468,14.8433228 18.4261296,15.0235465 C18.4261296,15.2037431 18.4975939,15.3765713 18.6249076,15.5039895 C18.7522213,15.6314078 18.9249076,15.7029722 19.1049564,15.7029307 L22.3211553,15.7029307 C22.5012041,15.7029722 22.6738904,15.6314078 22.8012041,15.5039895 C22.9285178,15.3765713 22.9999911,15.2037431 22.9999911,15.0235465 C23.0019042,14.6481319 22.6962619,14.3440059 22.3211553,14.3440059 Z M15.0075079,18.6494887 C14.8274565,18.6494887 14.6547678,18.7210138 14.5274536,18.8484354 C14.4001395,18.9758571 14.3286356,19.1486892 14.3286812,19.3288885 L14.3286812,22.3206158 C14.3286398,22.5008124 14.4001455,22.6736405 14.5274592,22.8010588 C14.6547729,22.928477 14.8274592,23 15.0075079,23 C15.1875567,23 15.360243,22.928477 15.4875567,22.8010588 C15.6148704,22.6736405 15.6863761,22.5008124 15.6863348,22.3206158 L15.6863348,19.3308123 C15.6866114,18.9551699 15.3828413,18.6502825 15.0075079,18.6494887 Z M15.0075079,7 C14.8274592,7 14.6547729,7.07152297 14.5274592,7.19894122 C14.4001455,7.32635946 14.3286398,7.49918761 14.3286812,7.67938422 L14.3286812,10.8982245 C14.3286398,11.0784212 14.4001455,11.2512493 14.5274592,11.3786675 C14.6547729,11.5060858 14.8274592,11.5776088 15.0075079,11.5776088 C15.1875567,11.5776088 15.360243,11.5060858 15.4875567,11.3786675 C15.6148704,11.2512493 15.6863761,11.0784212 15.6863346,10.8982245 L15.6863346,7.67938422 C15.6863761,7.49918761 15.6148704,7.32635946 15.4875567,7.19894122 C15.360243,7.07152297 15.1875567,7 15.0075079,7 Z M11.6020132,17.4145291 L9.32916742,19.6892415 C9.06467707,19.9548666 9.06467707,20.3845576 9.32916742,20.6501827 C9.45618492,20.7780764 9.62906847,20.8497648 9.80924376,20.8492554 C9.98367775,20.8492554 10.1560177,20.783579 10.2893201,20.6501827 L12.5637599,18.3738593 C12.8282503,18.1082342 12.8282503,17.6785432 12.5637599,17.4129181 C12.2975184,17.147886 11.8671244,17.1486768 11.601857,17.4146855 L11.6020132,17.4145291 Z M17.8766048,12.7750942 C18.0510388,12.7750942 18.2236912,12.7094361 18.3566811,12.5760242 L20.6314491,10.29956 C20.8959395,10.0339349 20.8959395,9.6042439 20.6314491,9.3386188 C20.366042,9.07391123 19.9367036,9.07391123 19.6712965,9.3386188 L17.3966847,11.6133312 C17.1321944,11.8789563 17.1321944,12.3086474 17.3966847,12.5742725 C17.5235351,12.7026276 17.6963754,12.7749288 17.8767611,12.7750942 L17.8766048,12.7750942 Z M18.5349595,17.572293 C18.2695524,17.3075854 17.8402139,17.3075854 17.5748068,17.572293 C17.3103165,17.8379181 17.3103165,18.2676091 17.5748068,18.5332342 L19.6882679,20.6501827 C19.8152854,20.7780764 19.988169,20.8497648 20.1683442,20.8492554 C20.342747,20.8492554 20.5152744,20.783579 20.6484206,20.6501827 C20.9129109,20.3845576 20.9129109,19.9548666 20.6484206,19.6892415 L18.5349595,17.5722773 L18.5349595,17.572293 Z M10.2891638,9.35734026 C10.0237567,9.09263269 9.59441827,9.09263269 9.32901114,9.35734026 C9.06452079,9.62296536 9.06452079,10.0526564 9.32901114,10.3182815 L11.6037635,12.594902 C11.7308042,12.7227441 11.9036849,12.7943806 12.0838399,12.7938344 C12.2582738,12.7938344 12.43077,12.7281576 12.5639162,12.594902 C12.8284065,12.3292769 12.8284065,11.8995859 12.5639162,11.6339608 L10.2891638,9.3573559 L10.2891638,9.35734026 Z",
                      id: "Shape",
                      fill: "#FFFFFF",
                    }),
                  ]
                ),
              ]),
            ]
          ),
        ],
        -1
      )
    ),
    js = lt(() =>
      t(
        "div",
        { class: "app-container_status-info" },
        [t("span", { class: "container_failure" }, "\u68C0\u6D4B\u4E2D...")],
        -1
      )
    ),
    qs = [Ns, js],
    Rs = { class: "app-container_status-label_item" },
    Gs = { class: "app-container_status-container", style: { height: "100%" } },
    Vs = { class: "more_icon", title: "\u67E5\u770B\u8BBE\u5907\u4FE1\u606F" },
    Us = { class: "DeviceBlock" },
    Ws = lt(() =>
      t(
        "li",
        null,
        [
          t(
            "a",
            { href: "/cgi-bin/luci/admin/status/routes" },
            "\u8BBE\u5907\u8DEF\u7531"
          ),
        ],
        -1
      )
    ),
    Zs = { class: "app-container_status-container_body" },
    Hs = lt(() =>
      t(
        "svg",
        {
          width: "50px",
          height: "50px",
          viewBox: "0 0 50 50",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
        },
        [
          t("title", null, "icon_device number"),
          t(
            "g",
            {
              id: "icon_device-number",
              stroke: "none",
              "stroke-width": "1",
              fill: "none",
              "fill-rule": "evenodd",
            },
            [
              t("g", { id: "wancheng", "fill-rule": "nonzero" }, [
                t("path", {
                  d: "M0,25 C0,33.9316396 4.76497292,42.1848151 12.5,46.6506351 C20.2350269,51.116455 29.7649731,51.116455 37.5,46.6506351 C45.2350271,42.1848151 50,33.9316396 50,25 C50,11.1928812 38.8071187,0 25,0 C11.1928813,0 0,11.1928812 0,25 Z",
                  id: "Path",
                  "fill-opacity": "0.0804503114",
                  fill: "#03C5FC",
                }),
                t(
                  "g",
                  {
                    id: "Group-2",
                    transform: "translate(10.000000, 10.000000)",
                  },
                  [
                    t("path", {
                      d: "M0,15 C0,20.3589838 2.85898375,25.3108891 7.5,27.990381 C12.1410161,30.669873 17.8589839,30.669873 22.5,27.990381 C27.1410162,25.3108891 30,20.3589838 30,15 C30,6.7157287 23.2842712,0 15,0 C6.71572875,0 0,6.7157287 0,15 Z",
                      id: "Path",
                      fill: "#03C5FC",
                    }),
                    t(
                      "g",
                      {
                        id: "kehuduanIP",
                        transform: "translate(5.000000, 7.000000)",
                        fill: "#FFFFFF",
                      },
                      [
                        t("path", {
                          d: "M8.3164557,11.2822134 L2.39240506,11.2822134 C2.25316456,11.2822134 2.13924051,11.1683794 2.13924051,11.029249 L2.13924051,1.39130435 C2.13924051,1.25217391 2.25316456,1.13833992 2.39240506,1.13833992 L16.6075949,1.13833992 C16.7468354,1.13833992 16.8607595,1.25217391 16.8607595,1.39130435 L16.8607595,3.51620553 C17.2658228,3.5541502 17.6582278,3.69328063 18,3.9083004 L18,1.39130435 C18,0.619762846 17.3797468,0 16.6075949,0 L2.39240506,0 C1.62025316,0 1,0.619762846 1,1.39130435 L1,11.029249 C1,11.8007905 1.62025316,12.4205534 2.39240506,12.4205534 L7.15189873,12.4205534 L7.15189873,14.2798419 L6.40506329,14.2798419 C5.93670886,14.2798419 5.5443038,14.6592885 5.5443038,15.1399209 C5.5443038,15.6079051 5.92405063,16 6.40506329,16 L8.79746835,16 C8.48101266,15.5699605 8.3164557,15.0513834 8.3164557,14.5201581 L8.3164557,11.2822134 Z",
                          id: "Path",
                        }),
                        t("path", {
                          d: "M12.4062969,15.2371365 L12.4062969,14.0436242 L10.0074963,14.0436242 L10.0074963,6.39038031 C10.0074963,6.23042506 10.1394303,6.10738255 10.2833583,6.10738255 L15.6446777,6.10738255 C15.8005997,6.10738255 15.9205397,6.24272931 15.9205397,6.39038031 L15.9205397,8.77740492 L16.3283358,8.77740492 C16.5682159,8.77740492 16.7961019,8.85123043 17,8.97427293 L17,6.39038031 C17,5.62751678 16.3883058,5 15.6446777,5 L10.3313343,5 C9.58770615,5.0246085 9,5.63982103 9,6.39038031 L9,14.6465324 C9.02398801,15.3847875 9.61169415,15.9753915 10.3313343,16 L12.6581709,16 C12.5022489,15.7785235 12.4182909,15.50783 12.4062969,15.2371365 C12.4062969,15.2248322 12.4062969,15.2371365 12.4062969,15.2371365 L12.4062969,15.2371365 Z",
                          id: "Path",
                        }),
                        t("path", {
                          d: "M17.1515152,10 L13.8484848,10 C13.3787879,10 13,10.2857143 13,10.64 L13,15.36 C13,15.7142857 13.3787879,16 13.8484848,16 L17.1515152,16 C17.6212121,16 18,15.7142857 18,15.36 L18,10.64 C18,10.2857143 17.6212121,10 17.1515152,10 Z M14.0151515,10.7657143 L16.9848485,10.7657143 L16.9848485,14.8457143 L14.0151515,14.8457143 L14.0151515,10.7657143 L14.0151515,10.7657143 Z M15.4545455,15.6914286 C15.2575758,15.6914286 15.1060606,15.5657143 15.1060606,15.4285714 C15.1060606,15.28 15.2727273,15.1657143 15.469697,15.1657143 C15.6666667,15.1657143 15.8181818,15.2914286 15.8181818,15.44 C15.8181818,15.5085714 15.7727273,15.5885714 15.6969697,15.6342857 C15.6363636,15.68 15.5454545,15.7028571 15.4545455,15.6914286 C15.4545455,15.7028571 15.4545455,15.6914286 15.4545455,15.6914286 L15.4545455,15.6914286 Z",
                          id: "Shape",
                        }),
                      ]
                    ),
                  ]
                ),
              ]),
            ]
          ),
        ],
        -1
      )
    ),
    Js = { class: "app-container_status-info" },
    Ks = { class: "container_content" },
    Xs = lt(() =>
      t("span", { class: "devise" }, "\u5DF2\u8FDE\u63A5\u8BBE\u5907", -1)
    ),
    Qs = lt(() => t("em", null, null, -1)),
    t0 = { class: "app-container_status-container" },
    e0 = { class: "more_icon", title: "\u67E5\u770B\u8BBE\u5907\u4FE1\u606F" },
    a0 = { class: "DeviceBlock" },
    o0 = { class: "app-container_title" },
    n0 = { class: "app-container_status-label_block" },
    i0 = { class: "app-container_status-label_block" },
    r0 = { class: "app-container_title" },
    s0 = { class: "app-container_status-label_block" },
    d0 = lt(() => t("em", null, null, -1)),
    c0 = { class: "app-container_status-container" },
    u0 = { class: "app-container_title" },
    l0 = lt(() => t("span", null, "\u7F51\u7EDC\u63A5\u53E3\u72B6\u6001", -1)),
    p0 = {
      class: "more_icon",
      title: "\u67E5\u770B\u7F51\u7EDC\u63A5\u53E3\u4FE1\u606F",
    },
    f0 = { class: "DeviceBlock" },
    m0 = K("\u7F51\u53E3\u914D\u7F6E"),
    v0 = { class: "app-container_body" },
    b0 = T({
      props: { homebox: { type: Object } },
      setup(e) {
        const a = () => {
            oa();
          },
          o = () => {
            ra();
          },
          n = ta(),
          s = H(() => n.status),
          m = H(() => n.deviceList),
          b = F(!1),
          f = F(!1),
          u = F(!1),
          c = F(!1),
          d = rt({ portList: [], load: !1 }),
          v = (W) => {
            switch (W) {
              case "pppoe":
                return "\u62E8\u53F7\u4E0A\u7F51";
              case "static":
                return "\u9759\u6001\u7F51\u7EDC";
              case "dhcp":
                return "DHCP";
            }
          },
          l = (W) => {
            switch (W) {
              case "manual":
                return "\u624B\u52A8\u914D\u7F6E";
              case "auto":
                return "\u81EA\u52A8\u83B7\u53D6";
              default:
                return "";
            }
          },
          _ = () => {
            Y.Network.PortList.GET()
              .then((W) => {
                if (W != null && W.data) {
                  const { result: Z } = W == null ? void 0 : W.data;
                  Z && (d.portList = Z.ports || []);
                }
              })
              .finally(() => {
                (d.load = !0), p();
              });
          },
          p = () => {
            setTimeout(() => {
              _();
            }, 1e4);
          };
        _();
        const h = Ut.stampForm,
          g = () => {
            b.value = !b.value;
          },
          w = () => {
            u.value = !u.value;
          },
          E = () => {
            c.value = !c.value;
          },
          C = () => {
            w(),
              g(),
              (() =>
                A(this, null, function* () {
                  f.value = !0;
                  let Z = x.Loading("");
                  try {
                    const G = yield Y.App.Check.POST({
                      name: "app-meta-nlbwmon",
                    });
                    if ((Z.Close(), G != null && G.data)) {
                      const { result: R, error: U } = G.data;
                      if ((U && x.Warning(U), R)) {
                        if (R.status == "installed")
                          location.href = "/cgi-bin/luci/admin/nlbw";
                        else if (
                          confirm(
                            "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5\u5E26\u5BBD\u76D1\u63A7\u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                          )
                        ) {
                          Z = x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D...");
                          const at = yield j("app-meta-nlbwmon");
                          Z.Close(),
                            at
                              ? (x.Success("\u5B89\u88C5\u6210\u529F"),
                                (location.href =
                                  "/cgi-bin/luci/admin/nlbw"))
                              : x.Warning("\u5B89\u88C5\u5931\u8D25");
                        }
                      }
                    }
                  } catch (G) {
                    x.Error(G);
                  }
                  Z.Close(), (f.value = !1);
                }))();
          },
          B = () => {
            w(),
              (() =>
                A(this, null, function* () {
                  var G, R, U, at, wt, $t;
                  f.value = !0;
                  let Z = x.Loading("");
                  try {
                    const Rt = yield Y.App.Check.POST({
                      name: "app-meta-homebox",
                    });
                    if ((Z.Close(), Rt != null && Rt.data)) {
                      const { result: Ne, error: je } = Rt.data;
                      if ((je && x.Warning(je), Ne)) {
                        if (Ne.status == "installed") {
                          const yt = yield Y.Network.Homebox.Enable.POST();
                          (R =
                            (G = yt == null ? void 0 : yt.data) == null
                              ? void 0
                              : G.result) != null && R.port
                            ? Ge({ port: yt.data.result.port, setup: 0 })
                            : ((U = yt == null ? void 0 : yt.data) == null
                                ? void 0
                                : U.success) == 0
                            ? (location.href =
                                "/cgi-bin/luci/admin/services/homebox")
                            : x.Warning("\u542F\u52A8\u5931\u8D25");
                        } else if (
                          confirm(
                            "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5Homebox\u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                          )
                        ) {
                          Z = x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D...");
                          const yt = yield j("app-meta-homebox");
                          if ((Z.Close(), yt)) {
                            x.Success("\u5B89\u88C5\u6210\u529F");
                            const Tt = yield Y.Network.Homebox.Enable.POST();
                            (wt =
                              (at = Tt == null ? void 0 : Tt.data) == null
                                ? void 0
                                : at.result) != null && wt.port
                              ? Ge({ port: Tt.data.result.port, setup: 0 })
                              : (($t = Tt == null ? void 0 : Tt.data) == null
                                  ? void 0
                                  : $t.success) == 0
                              ? (location.href =
                                  "/cgi-bin/luci/admin/services/homebox")
                              : x.Warning("\u542F\u52A8\u5931\u8D25");
                          } else x.Warning("\u5B89\u88C5\u5931\u8D25");
                        }
                      }
                    }
                  } catch (Rt) {
                    x.Error(Rt);
                  }
                  Z.Close(), (f.value = !1);
                }))();
          },
          D = () => {
            (() =>
              A(this, null, function* () {
                f.value = !0;
                let Z = x.Loading("");
                try {
                  const G = yield Y.App.Check.POST({
                    name: "app-meta-systools",
                  });
                  if ((Z.Close(), G != null && G.data)) {
                    const { result: R, error: U } = G.data;
                    if ((U && x.Warning(U), R)) {
                      if (R.status == "installed")
                        location.href =
                          "/cgi-bin/luci/admin/system/systools/pages";
                      else if (
                        confirm(
                          "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5SysTools\u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                        )
                      ) {
                        Z = x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D...");
                        const at = yield j("app-meta-systools");
                        Z.Close(),
                          at
                            ? (x.Success("\u5B89\u88C5\u6210\u529F"),
                              setTimeout(() => {
                                location.href =
                                  "/cgi-bin/luci/admin/system/systools/pages";
                              }, 500))
                            : x.Warning("\u5B89\u88C5\u5931\u8D25");
                      }
                    }
                  }
                } catch (G) {
                  x.Error(G);
                }
                Z.Close(), (f.value = !1);
              }))();
          },
          j = (W) =>
            A(this, null, function* () {
              return (
                Y.App.Install.POST({ name: W }).then(() => {}),
                new Promise((Z, G) =>
                  A(this, null, function* () {
                    let R = 0;
                    const U = setInterval(
                      () =>
                        A(this, null, function* () {
                          if (R > 20) {
                            clearInterval(U), G(!1);
                            return;
                          }
                          const at = yield Y.App.Check.POST({ name: W });
                          if (at != null && at.data) {
                            const { result: wt } = at.data;
                            if (
                              (wt == null ? void 0 : wt.status) == "installed"
                            ) {
                              clearInterval(U), Z(!0);
                              return;
                            }
                          }
                          R++;
                        }),
                      3e3
                    );
                  })
                )
              );
            });
        return (W, Z) => {
          var R, U;
          const G = ut("router-link");
          return (
            i(),
            r(
              L,
              null,
              [
                t("div", bs, [
                  t("div", gs, [
                    t("div", _s, [
                      y(s) != null
                        ? (i(),
                          r(
                            L,
                            { key: 0 },
                            [
                              y(s).networkInfo == "netSuccess"
                                ? (i(),
                                  r("div", hs, [
                                    xs,
                                    t("div", ks, [
                                      ws,
                                      t(
                                        "span",
                                        ys,
                                        k(y(h)(y(s).uptimeStamp)),
                                        1
                                      ),
                                    ]),
                                  ]))
                                : y(s).networkInfo == "dnsFailed"
                                ? (i(),
                                  r("div", Fs, [
                                    Cs,
                                    t("div", Es, [
                                      $s,
                                      t(
                                        "span",
                                        Ds,
                                        k(y(h)(y(s).uptimeStamp)),
                                        1
                                      ),
                                      t(
                                        "div",
                                        {
                                          onClick: a,
                                          class: "container_configure",
                                        },
                                        "DNS\u914D\u7F6E"
                                      ),
                                    ]),
                                  ]))
                                : y(s).networkInfo == "softSourceFailed"
                                ? (i(),
                                  r("div", Bs, [
                                    Ys,
                                    t("div", As, [
                                      Ss,
                                      t(
                                        "span",
                                        zs,
                                        k(y(h)(y(s).uptimeStamp)),
                                        1
                                      ),
                                      t(
                                        "div",
                                        {
                                          onClick: o,
                                          class: "container_configure",
                                        },
                                        "\u8F6F\u4EF6\u6E90\u914D\u7F6E"
                                      ),
                                    ]),
                                  ]))
                                : y(s).networkInfo == "netFailed"
                                ? (i(),
                                  r("div", Ps, [
                                    Ts,
                                    t("div", Is, [
                                      Ls,
                                      t(
                                        "span",
                                        Ms,
                                        k(y(h)(y(s).uptimeStamp)),
                                        1
                                      ),
                                    ]),
                                  ]))
                                : (i(), r("div", Os, qs)),
                            ],
                            64
                          ))
                        : $("", !0),
                    ]),
                  ]),
                  t("div", Rs, [
                    t("div", Gs, [
                      t("span", Vs, [z(Yt, { onClick: g })]),
                      P(
                        t(
                          "div",
                          Us,
                          [
                            t("div", { class: "menu_background", onClick: g }),
                            t("ul", null, [
                              Ws,
                              t("li", null, [
                                t(
                                  "a",
                                  { onClick: C },
                                  "\u5E26\u5BBD\u76D1\u63A7"
                                ),
                              ]),
                            ]),
                          ],
                          512
                        ),
                        [[Ft, b.value]]
                      ),
                      t("div", Zs, [
                        Hs,
                        t("div", Js, [
                          t(
                            "span",
                            Ks,
                            k(
                              ((U = (R = y(m)) == null ? void 0 : R.devices) ==
                              null
                                ? void 0
                                : U.length) || 0
                            ),
                            1
                          ),
                          Xs,
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                Qs,
                t("div", t0, [
                  t("span", e0, [z(Yt, { onClick: w })]),
                  P(
                    t(
                      "div",
                      a0,
                      [
                        t("div", { class: "menu_background", onClick: w }),
                        t("ul", null, [
                          t("li", null, [
                            t("a", { onClick: B }, "\u5185\u7F51\u6D4B\u901F"),
                          ]),
                          t("li", null, [
                            t("a", { onClick: D }, "\u5916\u7F51\u6D4B\u901F"),
                          ]),
                        ]),
                      ],
                      512
                    ),
                    [[Ft, u.value]]
                  ),
                  t("div", o0, [
                    t(
                      "span",
                      null,
                      "IP\u5730\u5740\uFF08" +
                        k(y(s).defaultInterface) +
                        "\uFF09",
                      1
                    ),
                  ]),
                  t("div", n0, [
                    t(
                      "span",
                      null,
                      " IPv4\uFF1A " +
                        k(y(s).ipv4addr) +
                        " \uFF08" +
                        k(v(y(s).proto || "")) +
                        "\uFF09 ",
                      1
                    ),
                  ]),
                  t("div", i0, [
                    t("span", null, "IPv6\uFF1A" + k(y(s).ipv6addr), 1),
                  ]),
                  t("div", r0, [
                    t(
                      "span",
                      null,
                      "DNS\uFF08" + k(l(y(s).dnsProto)) + "\uFF09",
                      1
                    ),
                  ]),
                  (i(!0),
                  r(
                    L,
                    null,
                    V(
                      y(s).dnsList,
                      (at) => (i(), r("div", s0, [t("span", null, k(at), 1)]))
                    ),
                    256
                  )),
                ]),
                d0,
                t("div", c0, [
                  t("div", u0, [
                    l0,
                    t("span", p0, [z(Yt, { onClick: E })]),
                    P(
                      t(
                        "div",
                        f0,
                        [
                          t("div", { class: "menu_background", onClick: E }),
                          t("ul", null, [
                            t("li", null, [
                              z(
                                G,
                                { to: "/interfaceconfig" },
                                { default: q(() => [m0]), _: 1 }
                              ),
                            ]),
                          ]),
                        ],
                        512
                      ),
                      [[Ft, c.value]]
                    ),
                  ]),
                  t("div", v0, [
                    y(d).load
                      ? (i(),
                        M(Rr, { key: 0, portList: y(d).portList }, null, 8, [
                          "portList",
                        ]))
                      : $("", !0),
                  ]),
                ]),
              ],
              64
            )
          );
        };
      },
    });
  var g0 = S(b0, [["__scopeId", "data-v-4a1fa016"]]);
  const _0 = { class: "network-container" },
    h0 = { class: "network-container_flow" },
    x0 = { class: "network-container_flow-container" },
    k0 = { class: "network-container_status" },
    w0 = T({
      setup(e) {
        return (a, o) => (
          i(),
          r("div", _0, [
            t("div", h0, [
              t("div", x0, [z(ci, { style: { height: "460px" } })]),
            ]),
            t("div", k0, [z(g0)]),
          ])
        );
      },
    });
  var y0 = S(w0, [["__scopeId", "data-v-699acd85"]]);
  const F0 = {},
    C0 = {
      width: "14px",
      height: "14px",
      viewBox: "0 0 14 14",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
    },
    E0 = t(
      "g",
      {
        id: "icon_alert",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd",
      },
      [
        t("g", { id: "Icon/Warning" }, [
          t("rect", {
            id: "\u77E9\u5F62",
            fill: "#000000",
            "fill-rule": "nonzero",
            opacity: "0",
            x: "0",
            y: "0",
            width: "14",
            height: "14",
          }),
          t("path", {
            d: "M7,0.875 C3.61757813,0.875 0.875,3.61757813 0.875,7 C0.875,10.3824219 3.61757813,13.125 7,13.125 C10.3824219,13.125 13.125,10.3824219 13.125,7 C13.125,3.61757813 10.3824219,0.875 7,0.875 Z M6.5625,4.046875 C6.5625,3.98671875 6.61171875,3.9375 6.671875,3.9375 L7.328125,3.9375 C7.38828125,3.9375 7.4375,3.98671875 7.4375,4.046875 L7.4375,7.765625 C7.4375,7.82578125 7.38828125,7.875 7.328125,7.875 L6.671875,7.875 C6.61171875,7.875 6.5625,7.82578125 6.5625,7.765625 L6.5625,4.046875 Z M7,10.0625 C6.63769531,10.0625 6.34375,9.76855469 6.34375,9.40625 C6.34375,9.04394531 6.63769531,8.75 7,8.75 C7.36230469,8.75 7.65625,9.04394531 7.65625,9.40625 C7.65625,9.76855469 7.36230469,10.0625 7,10.0625 Z",
            id: "\u5F62\u72B6",
            fill: "#FAAD14",
          }),
        ]),
      ],
      -1
    ),
    $0 = [E0];
  function D0(e, a) {
    return i(), r("svg", C0, $0);
  }
  var ht = S(F0, [["render", D0]]);
  const B0 = {},
    Y0 = {
      width: "18px",
      height: "18px",
      viewBox: "0 0 18 18",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
    },
    A0 = Lt(
      '<title>\u5206\u533A\u4FE1\u606F</title><g id="icon_info" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group"><circle id="Oval" stroke="#333333" cx="9" cy="9" r="8.5"></circle><circle id="Oval" fill="#333333" cx="5" cy="9" r="1"></circle><circle id="Oval" fill="#333333" cx="9" cy="9" r="1"></circle><circle id="Oval" fill="#333333" cx="13" cy="9" r="1"></circle></g></g>',
      2
    ),
    S0 = [A0];
  function z0(e, a) {
    return i(), r("svg", Y0, S0);
  }
  var Ve = S(B0, [["render", z0]]);
  const P0 = {},
    T0 = {
      width: "18px",
      height: "18px",
      viewBox: "0 0 18 18",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
    },
    I0 = Lt(
      '<title>\u5168\u76D8\u683C\u5F0F\u5316</title><g id="icon_disk-formatting" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-15" stroke="#333333"><circle id="Oval" cx="9" cy="9" r="8.5"></circle><g id="Group-16" transform="translate(4.000000, 4.500000)" stroke-linejoin="round"><polygon id="Rectangle" points="0.911080155 0 9.08891985 0 10 6 -8.8817842e-16 6"></polygon><rect id="Rectangle" transform="translate(5.000000, 7.500000) scale(1, -1) translate(-5.000000, -7.500000) " x="0" y="6" width="10" height="3"></rect></g></g></g>',
      2
    ),
    L0 = [I0];
  function M0(e, a) {
    return i(), r("svg", T0, L0);
  }
  var O0 = S(P0, [["render", M0]]);
  const St = (e) => (O("data-v-220a745c"), (e = e()), N(), e),
    N0 = ["onSubmit"],
    j0 = St(() =>
      t(
        "div",
        { class: "action-header" },
        [
          t(
            "div",
            { class: "action-header_title" },
            "\u786C\u76D8\u914D\u7F6E"
          ),
        ],
        -1
      )
    ),
    q0 = { class: "action-body" },
    R0 = { class: "disk-info" },
    G0 = St(() =>
      t(
        "div",
        { class: "disk-info_icon" },
        [
          t(
            "svg",
            {
              t: "1642589762094",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "11301",
              width: "128",
              height: "128",
            },
            [
              t("path", {
                d: "M899.892468 123.889088c0-44.342099-36.286708-80.620486-80.624646-80.620486H204.728017C160.385918 43.268602 124.107532 79.546988 124.107532 123.889088v802.847056c0 44.342099 36.278386 80.620486 80.620485 80.620486h614.539805c44.337938 0 80.624646-36.278386 80.624646-80.620486V123.889088z",
                fill: "#D0D0DB",
                "p-id": "11302",
              }),
              t("path", {
                d: "M169.8768 977.7772V174.930143c0-44.342099 36.278386-80.620486 80.620486-80.620485h614.539804c9.936092 0 19.426974 1.905666 28.239639 5.23434-11.525534-30.507298-40.996782-52.389169-75.398629-52.389169H203.342457c-44.342099 0-80.620486 36.278386-80.620486 80.620486v802.851217c0 34.410168 21.881871 63.873094 52.385008 75.381985A79.730065 79.730065 0 0 1 169.8768 977.7772z",
                fill: "#FFFFFF",
                "p-id": "11303",
              }),
              t("path", {
                d: "M820.657543 40.497481H206.117739c-44.342099 0-80.620486 36.278386-80.620486 80.620485v802.847057c0 44.342099 36.278386 80.620486 80.620486 80.620486h614.539804c44.337938 0 80.624646-36.278386 80.624647-80.620486V121.117966c0-44.342099-36.286708-80.620486-80.624647-80.620485z m19.60173 828.785749c0 40.846992-33.43237 74.279362-74.287684 74.279361H199.780776c-40.855313 0-74.279362-33.424048-74.279362-74.279361V129.593603c0-40.855313 33.424048-74.279362 74.279362-74.279362h566.203296c40.842831 0 74.283522 33.424048 74.283522 74.279362l-0.008321 739.689627z",
                fill: "#6E6E96",
                "p-id": "11304",
              }),
              t("path", {
                d: "M815.106979 1024H200.567175C146.933914 1024 103.303319 980.369405 103.303319 926.736144V123.889088C103.303319 70.255827 146.933914 26.625232 200.567175 26.625232h614.539804c53.633261 0 97.268017 43.630595 97.268017 97.263856v802.847056c0 53.633261-43.634756 97.263856-97.268017 97.263856zM200.567175 59.911972C165.287391 59.911972 136.590059 88.609303 136.590059 123.889088v802.847056c0 35.279784 28.697331 63.977115 63.977116 63.977115h614.539804c35.279784 0 63.981276-28.697331 63.981276-63.977115V123.889088c0-35.279784-28.701492-63.977115-63.981276-63.977116H200.567175z",
                fill: "#6E6E96",
                "p-id": "11305",
              }),
              t("path", {
                d: "M301.946104 941.515457h429.985632v65.841173H301.946104z",
                fill: "#8A8AA1",
                "p-id": "11306",
              }),
              t("path", {
                d: "M731.931736 1024H301.946104a16.64337 16.64337 0 0 1-16.64337-16.64337V941.515457a16.64337 16.64337 0 0 1 16.64337-16.64337h429.985632a16.64337 16.64337 0 0 1 16.64337 16.64337v65.841173a16.64337 16.64337 0 0 1-16.64337 16.64337z m-413.342262-33.286741h396.698892v-32.554432H318.589474v32.554432z",
                fill: "#6E6E96",
                "p-id": "11307",
              }),
              t("path", {
                d: "M337.230049 960.318304h20.804213v47.038326h-20.804213zM386.565159 960.318304h20.804213v47.038326h-20.804213zM435.891948 960.318304h20.804213v47.038326h-20.804213zM485.231219 960.318304h20.804213v47.038326h-20.804213zM534.558008 960.318304h20.804213v47.038326h-20.804213zM583.897279 960.318304h20.804213v47.038326h-20.804213zM633.224068 960.318304h20.804213v47.038326h-20.804213zM682.563339 960.318304h20.804213v47.038326h-20.804213z",
                fill: "#FFE599",
                "p-id": "11308",
              }),
              t("path", {
                d: "M219.153659 140.794591m-26.874883 0a26.874882 26.874882 0 1 0 53.749765 0 26.874882 26.874882 0 1 0-53.749765 0Z",
                fill: "#ADADD1",
                "p-id": "11309",
              }),
              t("path", {
                d: "M219.153659 184.312843c-23.995579 0-43.518252-19.522673-43.518253-43.518252s19.522673-43.518252 43.518253-43.518253 43.518252 19.522673 43.518252 43.518253-19.522673 43.518252-43.518252 43.518252z m0-53.749764c-5.642103 0-10.231512 4.589409-10.231512 10.231512s4.589409 10.231512 10.231512 10.231512 10.231512-4.589409 10.231511-10.231512-4.589409-10.231512-10.231511-10.231512z",
                fill: "#6E6E96",
                "p-id": "11310",
              }),
              t("path", {
                d: "M801.28466 140.794591m-26.870721 0a26.870721 26.870721 0 1 0 53.741442 0 26.870721 26.870721 0 1 0-53.741442 0Z",
                fill: "#ADADD1",
                "p-id": "11311",
              }),
              t("path", {
                d: "M801.28466 184.308683c-23.995579 0-43.514092-19.518512-43.514091-43.514092s19.518512-43.514092 43.514091-43.514092 43.514092 19.518512 43.514092 43.514092-19.518512 43.514092-43.514092 43.514092z m0-53.741443c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
                fill: "#6E6E96",
                "p-id": "11312",
              }),
              t("path", {
                d: "M801.280499 905.23291m-26.870721 0a26.870721 26.870721 0 1 0 53.741443 0 26.870721 26.870721 0 1 0-53.741443 0Z",
                fill: "#ADADD1",
                "p-id": "11313",
              }),
              t("path", {
                d: "M801.280499 948.747001c-23.995579 0-43.514092-19.518512-43.514091-43.514091s19.518512-43.514092 43.514091-43.514092 43.514092 19.518512 43.514092 43.514092-19.518512 43.514092-43.514092 43.514091z m0-53.741442c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
                fill: "#6E6E96",
                "p-id": "11314",
              }),
              t("path", {
                d: "M219.153659 905.23291m-26.870722 0a26.870721 26.870721 0 1 0 53.741443 0 26.870721 26.870721 0 1 0-53.741443 0Z",
                fill: "#ADADD1",
                "p-id": "11315",
              }),
              t("path", {
                d: "M219.153659 948.747001c-23.995579 0-43.514092-19.518512-43.514092-43.514091s19.518512-43.514092 43.514092-43.514092 43.514092 19.518512 43.514091 43.514092-19.522673 43.514092-43.514091 43.514091z m0-53.741442c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
                fill: "#6E6E96",
                "p-id": "11316",
              }),
              t("path", {
                d: "M520.972857 777.43263c-142.542145 0-258.508988-115.971004-258.508988-258.52147a16.64337 16.64337 0 0 1 33.28674 0c0 124.19699 101.033579 225.23473 225.222248 225.23473s225.222248-101.03774 225.222248-225.23473c0-124.188668-101.033579-225.218087-225.222248-225.218087a16.64337 16.64337 0 0 1 0-33.286741c142.542145 0 258.508988 115.966843 258.508988 258.504828 0 142.550466-115.966843 258.521471-258.508988 258.52147z",
                fill: "#6E6E96",
                "p-id": "11317",
              }),
              t("path", {
                d: "M520.968696 518.919481m-83.312551 0a83.312551 83.312551 0 1 0 166.625102 0 83.312551 83.312551 0 1 0-166.625102 0Z",
                fill: "#A9A9BA",
                "p-id": "11318",
              }),
              t("path", {
                d: "M520.968696 618.875402c-55.114521 0-99.955921-44.83724-99.955921-99.95176 0-55.118682 44.8414-99.955921 99.955921-99.955921s99.95176 44.8414 99.95176 99.955921c0 55.11036-44.83724 99.95176-99.95176 99.95176z m0-166.625101c-36.761044 0-66.669181 29.908136-66.66918 66.66918s29.908136 66.66502 66.66918 66.66502 66.66502-29.908136 66.66502-66.66502c0-36.761044-29.903976-66.669181-66.66502-66.66918z",
                fill: "#6E6E96",
                "p-id": "11319",
              }),
              t("path", {
                d: "M301.946104 941.515457h429.985632v36.977408H301.946104z",
                fill: "#6E6E96",
                "p-id": "11320",
              }),
            ]
          ),
        ],
        -1
      )
    ),
    V0 = { key: 0, class: "disk-info_mount-name" },
    U0 = { key: 1, class: "disk-info_mount-name" },
    W0 = { key: 0, class: "label-item" },
    Z0 = St(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u76EE\u6807\u5206\u533A")],
        -1
      )
    ),
    H0 = { class: "label-item_path" },
    J0 = { class: "label-item" },
    K0 = St(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u683C\u5F0F\u5316\u9009\u9879")],
        -1
      )
    ),
    X0 = { class: "label-item_value" },
    Q0 = ["disabled"],
    td = { key: 0, value: "" },
    ed = St(() => t("option", { value: "format" }, "\u683C\u5F0F\u5316", -1)),
    ad = { key: 1, value: "default" },
    od = { class: "label-item_value" },
    nd = { key: 0, class: "msg" },
    id = { key: 1, class: "msg" },
    rd = { class: "action-footer" },
    sd = St(() => t("div", { class: "auto" }, null, -1)),
    dd = ["disabled"],
    cd = ["disabled"],
    ud = { key: 1, class: "action result" },
    ld = { class: "action-body" },
    pd = St(() =>
      t(
        "div",
        { class: "action-body_icon" },
        [
          t(
            "svg",
            {
              t: "1642063181211",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "5062",
              width: "128",
              height: "128",
              "data-v-cda444e0": "",
            },
            [
              t("path", {
                d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
                fill: "#52C41A",
                "p-id": "5063",
                "data-v-cda444e0": "",
              }),
            ]
          ),
        ],
        -1
      )
    ),
    fd = St(() =>
      t(
        "div",
        { class: "action-body_msg" },
        "\u683C\u5F0F\u5316\u6210\u529F",
        -1
      )
    ),
    md = { key: 0, class: "action-body_info" },
    vd = { key: 1, class: "action-body_info" },
    bd = K(" \u5DF2\u7ECF\u6210\u529F\u521D\u59CB\u5316\u5206\u533A "),
    gd = { class: "btns" },
    _d = T({
      props: {
        action: String,
        disk: { type: Object },
        mount: { type: Object },
        Close: { type: Function },
        Cancel: { type: Function },
        Next: { type: Function },
      },
      setup(e) {
        const a = e,
          o = () => {
            a.Close && a.Close();
          },
          n = (w) => {
            w.preventDefault(), a.Cancel && a.Cancel(), o();
          },
          s = (w) => {
            a.Next && a.Next(w), o();
          },
          m = F(!1),
          b = F(0),
          f = (w) => {
            b.value = w;
          },
          u = F(a.action == "nas" ? "" : "format"),
          c = F(),
          d = F(),
          v = () => {
            switch (u.value) {
              case "format":
                _();
                return;
              case "default":
                l();
                return;
              default:
                x.Warning("\u8BF7\u9009\u62E9\u9009\u7EBF");
                return;
            }
          },
          l = () => {
            let w = "";
            const E = a.mount;
            if (
              (E != null && E.mountPoint != null && (w = E.mountPoint), w != "")
            ) {
              s(w);
              return;
            }
            x.Warning("\u65E0\u6CD5\u8BC6\u522B\u8DEF\u5F84");
          },
          _ = () => {
            const w = a.disk,
              E = a.mount;
            if (E) {
              const C = E.mountPoint || E.path;
              if (
                !confirm(
                  `\u8B66\u544A\uFF1A\u683C\u5F0F\u5316\u4F1A\u6E05\u7A7A ${C} \u5206\u533A\u6570\u636E\uFF0C\u8BF7\u4F60\u8C28\u614E\u64CD\u4F5C`
                ) ||
                !confirm(`\u662F\u5426\u786E\u5B9A\u683C\u5F0F\u5316 ${C}?`)
              )
                return;
              h(E);
              return;
            }
            if (w) {
              if (
                !confirm(
                  `\u8B66\u544A\uFF1A\u8BE5\u64CD\u4F5C\u5C06\u521D\u59CB\u5316 ${w.venderModel} \u786C\u76D8\u5E76\u521B\u5EFA\u5206\u533A\uFF0C\u8BF7\u4F60\u8C28\u614E\u64CD\u4F5C`
                ) ||
                !confirm("\u662F\u5426\u786E\u5B9A\u521D\u59CB\u5316?")
              )
                return;
              p(w);
              return;
            }
            x.Error("\u65E0\u6CD5\u8BC6\u522B\u6570\u636E");
          },
          p = (w) =>
            A(this, null, function* () {
              if (w.name == null || w.path == "") {
                x.Warning("\u83B7\u53D6\u4E0D\u5230\u8BBE\u5907\u540D\u79F0");
                return;
              }
              if (w.path == null || w.path == "") {
                x.Warning("\u83B7\u53D6\u4E0D\u5230\u8BBE\u5907\u8DEF\u5F84");
                return;
              }
              m.value = !0;
              const E = x.Loading("\u521D\u59CB\u5316\u4E2D...");
              try {
                const C = yield Y.Nas.Disk.Init.POST({
                  name: w.name,
                  path: w.path,
                });
                if (C != null && C.data) {
                  const { result: B, error: D } = C == null ? void 0 : C.data;
                  D && x.Warning(D),
                    B &&
                      (B.errorInfo
                        ? x.Warning(B.errorInfo)
                        : (x.Success("\u521D\u59CB\u5316\u6210\u529F"),
                          B.childrens &&
                            B.childrens.length > 0 &&
                            (d.value = B.childrens[0]),
                          (c.value = B),
                          f(1)));
                }
              } catch (C) {
                x.Error(C);
              }
              E.Close(), (m.value = !1);
            }),
          h = (w) =>
            A(this, null, function* () {
              if (w.path == null || w.path == "") {
                x.Warning("\u83B7\u53D6\u4E0D\u5230\u5206\u533A\u8DEF\u5F84");
                return;
              }
              m.value = !0;
              const E = x.Loading("\u683C\u5F0F\u5316\u4E2D...");
              try {
                const C = yield Y.Nas.Disk.Partition.Format.POST({
                  path: w.path,
                  uuid: w.uuid,
                  mountPoint: w.mountPoint,
                });
                if (C != null && C.data) {
                  const { result: B, error: D } = C == null ? void 0 : C.data;
                  D && x.Warning(D),
                    B &&
                      (x.Success("\u683C\u5F0F\u5316\u6210\u529F"),
                      (d.value = B),
                      f(1));
                }
              } catch (C) {
                x.Error(C);
              }
              E.Close(), (m.value = !1);
            }),
          g = () => {
            if (d.value && d.value.mountPoint) {
              s(d.value.mountPoint);
              return;
            }
            x.Warning("\u8BFB\u53D6\u7ED3\u679C\u5931\u8D25");
          };
        return (w, E) => (
          i(),
          M(
            ot,
            { type: 1 },
            {
              default: q(() => [
                z(
                  xt,
                  { name: "rotate", mode: "out-in" },
                  {
                    default: q(() => {
                      var C;
                      return [
                        b.value == 0
                          ? (i(),
                            r(
                              "form",
                              {
                                key: 0,
                                class: "action format",
                                onSubmit: it(v, ["prevent"]),
                              },
                              [
                                j0,
                                t("div", q0, [
                                  t("div", R0, [
                                    G0,
                                    e.mount
                                      ? (i(),
                                        r("div", V0, [
                                          t(
                                            "span",
                                            null,
                                            "\u3010" +
                                              k(e.mount.total) +
                                              "\u3011",
                                            1
                                          ),
                                          t(
                                            "span",
                                            null,
                                            k(
                                              e.mount.mountPoint || e.mount.path
                                            ),
                                            1
                                          ),
                                        ]))
                                      : e.disk
                                      ? (i(),
                                        r("div", U0, [
                                          t(
                                            "span",
                                            null,
                                            "\u3010" +
                                              k(e.disk.size) +
                                              "\u3011",
                                            1
                                          ),
                                          t(
                                            "span",
                                            null,
                                            k(e.disk.venderModel),
                                            1
                                          ),
                                        ]))
                                      : $("", !0),
                                  ]),
                                  e.mount
                                    ? (i(),
                                      r("div", W0, [
                                        Z0,
                                        t(
                                          "div",
                                          H0,
                                          k(
                                            e.mount.mountPoint || e.mount.path
                                          ) +
                                            "\uFF08" +
                                            k(e.mount.total) +
                                            "\uFF09",
                                          1
                                        ),
                                      ]))
                                    : $("", !0),
                                  t("div", J0, [
                                    K0,
                                    t("div", X0, [
                                      P(
                                        t(
                                          "select",
                                          {
                                            "onUpdate:modelValue":
                                              E[0] ||
                                              (E[0] = (B) => (u.value = B)),
                                            required: "",
                                            disabled: e.action == "disk",
                                          },
                                          [
                                            e.mount != null
                                              ? (i(),
                                                r(
                                                  "option",
                                                  td,
                                                  "\u8BF7\u9009\u62E9\u9009\u9879"
                                                ))
                                              : $("", !0),
                                            ed,
                                            e.mount != null
                                              ? (i(),
                                                r(
                                                  "option",
                                                  ad,
                                                  "\u4E0D\u683C\u5F0F\u5316,\u4F7F\u7528\u539F\u6587\u4EF6\u7CFB\u7EDF"
                                                ))
                                              : $("", !0),
                                          ],
                                          8,
                                          Q0
                                        ),
                                        [[Q, u.value]]
                                      ),
                                    ]),
                                    t("div", od, [
                                      u.value == "format"
                                        ? (i(),
                                          r(
                                            "p",
                                            nd,
                                            "\u683C\u5F0F\u5316\u4E3AEXT4\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u4F20\u8F93\u901F\u5EA6\u66F4\u5FEB"
                                          ))
                                        : u.value == "default"
                                        ? (i(), r("p", id))
                                        : $("", !0),
                                    ]),
                                  ]),
                                ]),
                                t("div", rd, [
                                  sd,
                                  t(
                                    "button",
                                    {
                                      class:
                                        "cbi-button cbi-button-remove app-btn app-back",
                                      onClick: n,
                                      type: "button",
                                      disabled: m.value,
                                    },
                                    "\u8FD4\u56DE",
                                    8,
                                    dd
                                  ),
                                  t(
                                    "button",
                                    {
                                      class:
                                        "cbi-button cbi-button-apply app-btn app-next",
                                      disabled: m.value,
                                    },
                                    "\u4E0B\u4E00\u6B65",
                                    8,
                                    cd
                                  ),
                                ]),
                              ],
                              40,
                              N0
                            ))
                          : b.value == 1
                          ? (i(),
                            r("div", ud, [
                              t("div", ld, [
                                pd,
                                fd,
                                c.value
                                  ? (i(),
                                    r("div", md, [
                                      K(
                                        " \u5DF2\u7ECF\u6210\u529F\u683C\u5F0F\u5316\u78C1\u76D8 " +
                                          k(c.value.venderModel) +
                                          " \u5E76\u6302\u8F7D\u5230 ",
                                        1
                                      ),
                                      t(
                                        "a",
                                        null,
                                        k(
                                          (C = d.value) == null
                                            ? void 0
                                            : C.mountPoint
                                        ),
                                        1
                                      ),
                                    ]))
                                  : $("", !0),
                                d.value
                                  ? (i(),
                                    r("div", vd, [
                                      bd,
                                      t("a", null, k(d.value.mountPoint), 1),
                                    ]))
                                  : $("", !0),
                                t("div", gd, [
                                  t(
                                    "button",
                                    {
                                      class:
                                        "cbi-button cbi-button-apply app-btn app-next",
                                      type: "button",
                                      onClick: g,
                                    },
                                    k(
                                      e.action == "nas"
                                        ? "\u4E0B\u4E00\u6B65"
                                        : "\u5B8C\u6210"
                                    ),
                                    1
                                  ),
                                ]),
                              ]),
                            ]))
                          : $("", !0),
                      ];
                    }),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        );
      },
    });
  var hd = S(_d, [["__scopeId", "data-v-220a745c"]]),
    Ae = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        hd,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    };
  const Ot = (e) => (O("data-v-91f8ec60"), (e = e()), N(), e),
    xd = ["onSubmit"],
    kd = Ot(() =>
      t(
        "div",
        { class: "action-header" },
        [t("div", { class: "action-header_title" })],
        -1
      )
    ),
    wd = { class: "action-body" },
    yd = { class: "disk-info" },
    Fd = Ot(() =>
      t(
        "div",
        { class: "disk-info_icon" },
        [
          t(
            "svg",
            {
              t: "1642589762094",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "11301",
              width: "128",
              height: "128",
            },
            [
              t("path", {
                d: "M899.892468 123.889088c0-44.342099-36.286708-80.620486-80.624646-80.620486H204.728017C160.385918 43.268602 124.107532 79.546988 124.107532 123.889088v802.847056c0 44.342099 36.278386 80.620486 80.620485 80.620486h614.539805c44.337938 0 80.624646-36.278386 80.624646-80.620486V123.889088z",
                fill: "#D0D0DB",
                "p-id": "11302",
              }),
              t("path", {
                d: "M169.8768 977.7772V174.930143c0-44.342099 36.278386-80.620486 80.620486-80.620485h614.539804c9.936092 0 19.426974 1.905666 28.239639 5.23434-11.525534-30.507298-40.996782-52.389169-75.398629-52.389169H203.342457c-44.342099 0-80.620486 36.278386-80.620486 80.620486v802.851217c0 34.410168 21.881871 63.873094 52.385008 75.381985A79.730065 79.730065 0 0 1 169.8768 977.7772z",
                fill: "#FFFFFF",
                "p-id": "11303",
              }),
              t("path", {
                d: "M820.657543 40.497481H206.117739c-44.342099 0-80.620486 36.278386-80.620486 80.620485v802.847057c0 44.342099 36.278386 80.620486 80.620486 80.620486h614.539804c44.337938 0 80.624646-36.278386 80.624647-80.620486V121.117966c0-44.342099-36.286708-80.620486-80.624647-80.620485z m19.60173 828.785749c0 40.846992-33.43237 74.279362-74.287684 74.279361H199.780776c-40.855313 0-74.279362-33.424048-74.279362-74.279361V129.593603c0-40.855313 33.424048-74.279362 74.279362-74.279362h566.203296c40.842831 0 74.283522 33.424048 74.283522 74.279362l-0.008321 739.689627z",
                fill: "#6E6E96",
                "p-id": "11304",
              }),
              t("path", {
                d: "M815.106979 1024H200.567175C146.933914 1024 103.303319 980.369405 103.303319 926.736144V123.889088C103.303319 70.255827 146.933914 26.625232 200.567175 26.625232h614.539804c53.633261 0 97.268017 43.630595 97.268017 97.263856v802.847056c0 53.633261-43.634756 97.263856-97.268017 97.263856zM200.567175 59.911972C165.287391 59.911972 136.590059 88.609303 136.590059 123.889088v802.847056c0 35.279784 28.697331 63.977115 63.977116 63.977115h614.539804c35.279784 0 63.981276-28.697331 63.981276-63.977115V123.889088c0-35.279784-28.701492-63.977115-63.981276-63.977116H200.567175z",
                fill: "#6E6E96",
                "p-id": "11305",
              }),
              t("path", {
                d: "M301.946104 941.515457h429.985632v65.841173H301.946104z",
                fill: "#8A8AA1",
                "p-id": "11306",
              }),
              t("path", {
                d: "M731.931736 1024H301.946104a16.64337 16.64337 0 0 1-16.64337-16.64337V941.515457a16.64337 16.64337 0 0 1 16.64337-16.64337h429.985632a16.64337 16.64337 0 0 1 16.64337 16.64337v65.841173a16.64337 16.64337 0 0 1-16.64337 16.64337z m-413.342262-33.286741h396.698892v-32.554432H318.589474v32.554432z",
                fill: "#6E6E96",
                "p-id": "11307",
              }),
              t("path", {
                d: "M337.230049 960.318304h20.804213v47.038326h-20.804213zM386.565159 960.318304h20.804213v47.038326h-20.804213zM435.891948 960.318304h20.804213v47.038326h-20.804213zM485.231219 960.318304h20.804213v47.038326h-20.804213zM534.558008 960.318304h20.804213v47.038326h-20.804213zM583.897279 960.318304h20.804213v47.038326h-20.804213zM633.224068 960.318304h20.804213v47.038326h-20.804213zM682.563339 960.318304h20.804213v47.038326h-20.804213z",
                fill: "#FFE599",
                "p-id": "11308",
              }),
              t("path", {
                d: "M219.153659 140.794591m-26.874883 0a26.874882 26.874882 0 1 0 53.749765 0 26.874882 26.874882 0 1 0-53.749765 0Z",
                fill: "#ADADD1",
                "p-id": "11309",
              }),
              t("path", {
                d: "M219.153659 184.312843c-23.995579 0-43.518252-19.522673-43.518253-43.518252s19.522673-43.518252 43.518253-43.518253 43.518252 19.522673 43.518252 43.518253-19.522673 43.518252-43.518252 43.518252z m0-53.749764c-5.642103 0-10.231512 4.589409-10.231512 10.231512s4.589409 10.231512 10.231512 10.231512 10.231512-4.589409 10.231511-10.231512-4.589409-10.231512-10.231511-10.231512z",
                fill: "#6E6E96",
                "p-id": "11310",
              }),
              t("path", {
                d: "M801.28466 140.794591m-26.870721 0a26.870721 26.870721 0 1 0 53.741442 0 26.870721 26.870721 0 1 0-53.741442 0Z",
                fill: "#ADADD1",
                "p-id": "11311",
              }),
              t("path", {
                d: "M801.28466 184.308683c-23.995579 0-43.514092-19.518512-43.514091-43.514092s19.518512-43.514092 43.514091-43.514092 43.514092 19.518512 43.514092 43.514092-19.518512 43.514092-43.514092 43.514092z m0-53.741443c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
                fill: "#6E6E96",
                "p-id": "11312",
              }),
              t("path", {
                d: "M801.280499 905.23291m-26.870721 0a26.870721 26.870721 0 1 0 53.741443 0 26.870721 26.870721 0 1 0-53.741443 0Z",
                fill: "#ADADD1",
                "p-id": "11313",
              }),
              t("path", {
                d: "M801.280499 948.747001c-23.995579 0-43.514092-19.518512-43.514091-43.514091s19.518512-43.514092 43.514091-43.514092 43.514092 19.518512 43.514092 43.514092-19.518512 43.514092-43.514092 43.514091z m0-53.741442c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
                fill: "#6E6E96",
                "p-id": "11314",
              }),
              t("path", {
                d: "M219.153659 905.23291m-26.870722 0a26.870721 26.870721 0 1 0 53.741443 0 26.870721 26.870721 0 1 0-53.741443 0Z",
                fill: "#ADADD1",
                "p-id": "11315",
              }),
              t("path", {
                d: "M219.153659 948.747001c-23.995579 0-43.514092-19.518512-43.514092-43.514091s19.518512-43.514092 43.514092-43.514092 43.514092 19.518512 43.514091 43.514092-19.522673 43.514092-43.514091 43.514091z m0-53.741442c-5.637942 0-10.227351 4.589409-10.227351 10.227351s4.589409 10.227351 10.227351 10.227351 10.227351-4.589409 10.227351-10.227351-4.589409-10.227351-10.227351-10.227351z",
                fill: "#6E6E96",
                "p-id": "11316",
              }),
              t("path", {
                d: "M520.972857 777.43263c-142.542145 0-258.508988-115.971004-258.508988-258.52147a16.64337 16.64337 0 0 1 33.28674 0c0 124.19699 101.033579 225.23473 225.222248 225.23473s225.222248-101.03774 225.222248-225.23473c0-124.188668-101.033579-225.218087-225.222248-225.218087a16.64337 16.64337 0 0 1 0-33.286741c142.542145 0 258.508988 115.966843 258.508988 258.504828 0 142.550466-115.966843 258.521471-258.508988 258.52147z",
                fill: "#6E6E96",
                "p-id": "11317",
              }),
              t("path", {
                d: "M520.968696 518.919481m-83.312551 0a83.312551 83.312551 0 1 0 166.625102 0 83.312551 83.312551 0 1 0-166.625102 0Z",
                fill: "#A9A9BA",
                "p-id": "11318",
              }),
              t("path", {
                d: "M520.968696 618.875402c-55.114521 0-99.955921-44.83724-99.955921-99.95176 0-55.118682 44.8414-99.955921 99.955921-99.955921s99.95176 44.8414 99.95176 99.955921c0 55.11036-44.83724 99.95176-99.95176 99.95176z m0-166.625101c-36.761044 0-66.669181 29.908136-66.66918 66.66918s29.908136 66.66502 66.66918 66.66502 66.66502-29.908136 66.66502-66.66502c0-36.761044-29.903976-66.669181-66.66502-66.66918z",
                fill: "#6E6E96",
                "p-id": "11319",
              }),
              t("path", {
                d: "M301.946104 941.515457h429.985632v36.977408H301.946104z",
                fill: "#6E6E96",
                "p-id": "11320",
              }),
            ]
          ),
        ],
        -1
      )
    ),
    Cd = { key: 0, class: "disk-info_mount-name" },
    Ed = { key: 1, class: "disk-info_mount-name" },
    $d = { key: 0, class: "label-item" },
    Dd = Ot(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u76EE\u6807\u5206\u533A")],
        -1
      )
    ),
    Bd = { class: "label-item_path" },
    Yd = { class: "label-item" },
    Ad = Ot(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u6302\u8F7D\u70B9")],
        -1
      )
    ),
    Sd = { class: "label-item_value" },
    zd = ["value"],
    Pd = { class: "action-footer" },
    Td = Ot(() => t("div", { class: "auto" }, null, -1)),
    Id = ["disabled"],
    Ld = ["disabled"],
    Md = { key: 1, class: "action result" },
    Od = { class: "action-body" },
    Nd = Ot(() =>
      t(
        "div",
        { class: "action-body_icon" },
        [
          t(
            "svg",
            {
              t: "1642063181211",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "5062",
              width: "128",
              height: "128",
              "data-v-cda444e0": "",
            },
            [
              t("path", {
                d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
                fill: "#52C41A",
                "p-id": "5063",
                "data-v-cda444e0": "",
              }),
            ]
          ),
        ],
        -1
      )
    ),
    jd = Ot(() =>
      t("div", { class: "action-body_msg" }, "\u6302\u8F7D\u6210\u529F", -1)
    ),
    qd = { key: 0, class: "action-body_info" },
    Rd = { class: "btns" },
    Gd = T({
      props: {
        action: String,
        disk: { type: Object },
        mount: { type: Object },
        Close: { type: Function },
        Cancel: { type: Function },
        Next: { type: Function },
      },
      setup(e) {
        var _;
        const a = e,
          o = () => {
            a.Close && a.Close();
          },
          n = (p) => {
            p.preventDefault(), a.Cancel && a.Cancel(), o();
          },
          s = (p) => {
            a.Next && a.Next(p), o();
          },
          m = F(!1),
          b = F(0),
          f = F(
            "/mnt/data_" +
              ((_ = a == null ? void 0 : a.mount) == null ? void 0 : _.name)
          ),
          u = (p) => {
            b.value = p;
          };
        F(a.mount ? "" : "format"), F();
        const c = F(),
          d = () =>
            A(this, null, function* () {
              const p = a.mount;
              if (p == null) {
                x.Warning("\u83B7\u53D6\u4E0D\u5230\u5206\u533A");
                return;
              }
              if (p.path == null || p.path == "") {
                x.Warning("\u83B7\u53D6\u4E0D\u5230\u5206\u533A\u8DEF\u5F84");
                return;
              }
              if (p.uuid == null || p.uuid == "") {
                x.Warning("\u83B7\u53D6\u4E0D\u5230\u5206\u533AID");
                return;
              }
              m.value = !0;
              const h = x.Loading("\u6302\u8F7D\u4E2D...");
              try {
                const g = yield Y.Nas.Disk.Partition.Mount.POST({
                  path: p.path,
                  uuid: p.uuid,
                  mountPoint: f.value,
                });
                if (g != null && g.data) {
                  const { result: w, error: E } = g == null ? void 0 : g.data;
                  E && x.Warning(E),
                    w &&
                      (x.Success("\u6302\u8F7D\u6210\u529F"),
                      (c.value = w),
                      u(1));
                }
              } catch (g) {
                x.Error(g);
              }
              h.Close(), (m.value = !1);
            }),
          v = () => {
            if (c.value && c.value.mountPoint) {
              s(c.value.mountPoint);
              return;
            }
            x.Warning("\u8BFB\u53D6\u7ED3\u679C\u5931\u8D25");
          },
          l = () => {};
        return (p, h) => (
          i(),
          M(
            ot,
            { type: 1 },
            {
              default: q(() => [
                z(
                  xt,
                  { name: "rotate", mode: "out-in" },
                  {
                    default: q(() => {
                      var g, w;
                      return [
                        b.value == 0
                          ? (i(),
                            r(
                              "form",
                              {
                                key: 0,
                                class: "action format",
                                onSubmit: it(l, ["prevent"]),
                              },
                              [
                                kd,
                                t("div", wd, [
                                  t("div", yd, [
                                    Fd,
                                    e.mount
                                      ? (i(),
                                        r("div", Cd, [
                                          t(
                                            "span",
                                            null,
                                            "\u3010" +
                                              k(e.mount.total) +
                                              "\u3011",
                                            1
                                          ),
                                          t(
                                            "span",
                                            null,
                                            k(e.mount.mountPoint),
                                            1
                                          ),
                                        ]))
                                      : e.disk
                                      ? (i(),
                                        r("div", Ed, [
                                          t(
                                            "span",
                                            null,
                                            "\u3010" +
                                              k(e.disk.size) +
                                              "\u3011",
                                            1
                                          ),
                                          t(
                                            "span",
                                            null,
                                            k(e.disk.venderModel),
                                            1
                                          ),
                                        ]))
                                      : $("", !0),
                                  ]),
                                  e.mount
                                    ? (i(),
                                      r("div", $d, [
                                        Dd,
                                        t(
                                          "div",
                                          Bd,
                                          k(e.mount.path) +
                                            "\uFF08" +
                                            k(e.mount.total) +
                                            "\uFF0C" +
                                            k(
                                              (w =
                                                (g = e.mount) == null
                                                  ? void 0
                                                  : g.filesystem) == null
                                                ? void 0
                                                : w.toUpperCase()
                                            ) +
                                            "\uFF09",
                                          1
                                        ),
                                      ]))
                                    : $("", !0),
                                  t("div", Yd, [
                                    Ad,
                                    t("div", Sd, [
                                      t(
                                        "input",
                                        { type: "text", value: f.value },
                                        null,
                                        8,
                                        zd
                                      ),
                                    ]),
                                  ]),
                                ]),
                                t("div", Pd, [
                                  Td,
                                  t(
                                    "button",
                                    {
                                      class:
                                        "cbi-button cbi-button-apply app-btn app-next",
                                      disabled: m.value,
                                      onClick: d,
                                    },
                                    "\u786E\u5B9A",
                                    8,
                                    Id
                                  ),
                                  t(
                                    "button",
                                    {
                                      class:
                                        "cbi-button cbi-button-remove app-btn app-back",
                                      onClick: n,
                                      type: "button",
                                      disabled: m.value,
                                    },
                                    "\u8FD4\u56DE",
                                    8,
                                    Ld
                                  ),
                                ]),
                              ],
                              40,
                              xd
                            ))
                          : b.value == 1
                          ? (i(),
                            r("div", Md, [
                              t("div", Od, [
                                Nd,
                                jd,
                                c.value
                                  ? (i(),
                                    r("div", qd, [
                                      K(
                                        " \u5DF2\u6210\u529F\u5C06\u5206\u533A " +
                                          k(c.value.path) +
                                          " \u6302\u8F7D\u5230 ",
                                        1
                                      ),
                                      t("a", null, k(c.value.mountPoint), 1),
                                    ]))
                                  : $("", !0),
                                t("div", Rd, [
                                  t(
                                    "button",
                                    {
                                      class:
                                        "cbi-button cbi-button-apply app-btn app-next",
                                      type: "button",
                                      onClick: v,
                                    },
                                    k(
                                      e.action == "nas"
                                        ? "\u5B8C\u6210"
                                        : "\u4E0B\u4E00\u6B65"
                                    ),
                                    1
                                  ),
                                ]),
                              ]),
                            ]))
                          : $("", !0),
                      ];
                    }),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        );
      },
    });
  var Vd = S(Gd, [["__scopeId", "data-v-91f8ec60"]]),
    sa = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        Vd,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    };
  const da = (e) => (O("data-v-596c326e"), (e = e()), N(), e),
    Ud = { class: "disk-content" },
    Wd = { class: "disk-item" },
    Zd = { class: "disk-item_name" },
    Hd = { key: 0 },
    Jd = ["href"],
    Kd = { key: 1 },
    Xd = { class: "disk_value" },
    Qd = { key: 0, class: "disk-item_value" },
    t1 = { class: "value-data" },
    e1 = { key: 1, class: "disk-item_value" },
    a1 = { key: 0, class: "disk_status" },
    o1 = { class: "disk_status_item" },
    n1 = { key: 0, class: "tooltip-trigger disk_tip" },
    i1 = da(() =>
      t(
        "div",
        { class: "tooltip-text tooltip-top" },
        [
          t(
            "div",
            { class: "disk_dir_tip" },
            "\u5F53\u524D\u78C1\u76D8\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EF\u80FD\u5BFC\u81F4\u65E0\u6CD5\u5199\u5165\u6570\u636E"
          ),
        ],
        -1
      )
    ),
    r1 = { class: "disk_status_item" },
    s1 = { key: 0, class: "tooltip-trigger disk_tip" },
    d1 = da(() =>
      t(
        "div",
        { class: "tooltip-text tooltip-top" },
        [
          t(
            "span",
            { class: "disk_dir_tip" },
            "\u5F53\u524D\u78C1\u76D8\u786C\u76D8\u683C\u5F0F\u4E3ANTFS\uFF0C\u53EF\u80FD\u5BFC\u81F4\u786C\u76D8\u51FA\u73B0\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u5EFA\u8BAE\u683C\u5F0F\u5316\u6210EXT4\u6587\u4EF6\u7CFB\u7EDF"
          ),
        ],
        -1
      )
    ),
    c1 = T({
      props: {
        part: { type: Object, required: !0 },
        disk: { type: Object, required: !0 },
      },
      setup(e) {
        const a = e,
          o = H(() => a.part.filesystem == "No FileSystem"),
          n = H(
            () =>
              o.value ||
              (!a.disk.isSystemRoot &&
                (a.part.isReadOnly || a.part.filesystem == "ntfs") &&
                a.part.mountPoint)
          ),
          s = function () {
            Ae({
              action: "disk",
              disk: a.disk,
              mount: a.part,
              Cancel: () => {},
              Next: (c) => {
                location.reload();
              },
            });
          },
          m = () => {
            sa({
              action: "nas",
              disk: a.disk,
              mount: a.part,
              Cancel: () => {},
              Next: () => {
                location.reload();
              },
            });
          },
          b = () =>
            A(this, null, function* () {
              const c = x.Loading("\u5904\u7406\u4E2D...");
              try {
                const d = yield Y.Nas.Disk.InitRest.POST({
                  name: a.disk.name,
                  path: a.disk.path,
                });
                if (d != null && d.data) {
                  const { result: v, error: l } = d == null ? void 0 : d.data;
                  l && x.Warning(l),
                    v &&
                      (x.Success("\u6302\u8F7D\u6210\u529F"),
                      location.reload());
                }
              } catch (d) {
                x.Error(d);
              }
              c.Close();
            }),
          f = H(() => a.part.filesystem == "Free Space"),
          u = H(() => {
            const c = a.part.mountPoint ? a.part.mountPoint : "";
            return c.indexOf("/mnt/") == 0
              ? "/cgi-bin/luci/admin/services/linkease/file/#/?path=/" +
                  c.substring(5)
              : "/cgi-bin/luci/admin/services/linkease/file/#/?path=/root" + c;
          });
        return (c, d) => {
          var l;
          const v = ut("progress-item");
          return (
            i(),
            r("div", Ud, [
              t("li", Wd, [
                t("div", Zd, [
                  e.part.mountPoint
                    ? (i(),
                      r("span", Hd, [
                        t(
                          "a",
                          { href: y(u), target: "_blank" },
                          k(e.part.mountPoint),
                          9,
                          Jd
                        ),
                      ]))
                    : (i(),
                      r(
                        "span",
                        Kd,
                        k(
                          y(f)
                            ? e.part.name
                            : (y(o)
                                ? "\u672A\u683C\u5F0F\u5316\uFF08"
                                : "\u672A\u6302\u8F7D\uFF08") +
                                e.part.name +
                                "\uFF09"
                        ),
                        1
                      )),
                ]),
                t("div", Xd, [
                  e.part.mountPoint || y(f)
                    ? (i(),
                      r("div", Qd, [
                        t("div", t1, [
                          z(
                            v,
                            {
                              value: y(f) || !e.part.usage ? 0 : e.part.usage,
                              text: y(f)
                                ? "\u672A\u5206\u533A\uFF08" +
                                  e.part.total +
                                  "\uFF09"
                                : e.part.used + "/" + e.part.total,
                              style: { backgroundColor: "#767676" },
                            },
                            null,
                            8,
                            ["value", "text"]
                          ),
                        ]),
                      ]))
                    : y(o)
                    ? $("", !0)
                    : (i(),
                      r("div", e1, [
                        t(
                          "div",
                          { class: "value-data", onClick: m },
                          "\u624B\u52A8\u6302\u8F7D"
                        ),
                      ])),
                  y(f)
                    ? (i(),
                      r(
                        "button",
                        {
                          key: 2,
                          class: "cbi-button cbi-button-apply",
                          onClick: b,
                        },
                        "\u5206\u533A\u5E76\u683C\u5F0F\u5316"
                      ))
                    : y(n)
                    ? (i(),
                      r(
                        "button",
                        {
                          key: 3,
                          class: "cbi-button cbi-button-apply",
                          onClick: s,
                        },
                        "\u683C\u5F0F\u5316\u5206\u533A"
                      ))
                    : $("", !0),
                ]),
              ]),
              e.part.mountPoint
                ? (i(),
                  r("li", a1, [
                    t("div", o1, [
                      t(
                        "div",
                        null,
                        "\u78C1\u76D8\u8BFB\u5199\u72B6\u6001\uFF1A" +
                          k(
                            e.part.isReadOnly ? "\u53EA\u8BFB" : "\u8BFB\u5199"
                          ),
                        1
                      ),
                      !e.part.isSystemRoot && e.part.isReadOnly
                        ? (i(), r("div", n1, [z(ht), i1]))
                        : $("", !0),
                    ]),
                    t("div", r1, [
                      t(
                        "div",
                        null,
                        "\u78C1\u76D8\u683C\u5F0F\uFF1A" +
                          k(
                            (l = e.part.filesystem) == null
                              ? void 0
                              : l.toUpperCase()
                          ),
                        1
                      ),
                      e.part.filesystem == "ntfs"
                        ? (i(), r("div", s1, [z(ht), d1]))
                        : $("", !0),
                    ]),
                  ]))
                : $("", !0),
            ])
          );
        };
      },
    });
  var u1 = S(c1, [["__scopeId", "data-v-596c326e"]]);
  const Se = (e) => (O("data-v-10cc0cfe"), (e = e()), N(), e),
    l1 = { key: 0, class: "action" },
    p1 = Se(() => t("h2", { class: "title" }, "\u5206\u533A\u4FE1\u606F", -1)),
    f1 = Se(() =>
      t(
        "div",
        { class: "app-container_info" },
        [
          t("span", null, "\u6302\u8F7D\u70B9"),
          t("span", null, "\u5BB9\u91CF"),
        ],
        -1
      )
    ),
    m1 = { class: "app-container_body" },
    v1 = Se(() => t("div", { class: "auto" }, null, -1)),
    b1 = T({
      props: {
        disk: { type: Object },
        Close: { type: Function },
        Cancel: { type: Function },
        Next: { type: Function },
      },
      setup(e) {
        const a = e,
          o = F(0),
          n = () => {
            a.Close && a.Close();
          },
          s = (m) => {
            m.preventDefault(), a.Cancel && a.Cancel(), n();
          };
        return (m, b) => (
          i(),
          M(
            ot,
            { Close: e.Close, type: 1 },
            {
              default: q(() => [
                z(
                  xt,
                  { name: "rotate", mode: "out-in" },
                  {
                    default: q(() => [
                      o.value == 0
                        ? (i(),
                          r("div", l1, [
                            p1,
                            t("ul", null, [
                              t("li", null, [
                                f1,
                                t("div", m1, [
                                  e.disk
                                    ? (i(!0),
                                      r(
                                        L,
                                        { key: 0 },
                                        V(
                                          e.disk.childrens,
                                          (f, u) => (
                                            i(),
                                            M(
                                              u1,
                                              { key: u, part: f, disk: e.disk },
                                              null,
                                              8,
                                              ["part", "disk"]
                                            )
                                          )
                                        ),
                                        128
                                      ))
                                    : $("", !0),
                                ]),
                              ]),
                            ]),
                            t("div", { class: "action-footer" }, [
                              v1,
                              t(
                                "button",
                                {
                                  class:
                                    "cbi-button cbi-button-remove app-btn app-back",
                                  onClick: s,
                                  type: "button",
                                },
                                "\u8FD4\u56DE"
                              ),
                            ]),
                          ]))
                        : $("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            },
            8,
            ["Close"]
          )
        );
      },
    });
  var g1 = S(b1, [["__scopeId", "data-v-10cc0cfe"]]),
    _1 = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        g1,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.component("progress-item", ea), o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    };
  const me = (e) => (O("data-v-acdd0e48"), (e = e()), N(), e),
    h1 = { key: 0, class: "disk-item error" },
    x1 = ["title"],
    k1 = { class: "disk-item_value" },
    w1 = { class: "value-data" },
    y1 = { class: "error" },
    F1 = { key: 1, class: "disk-item" },
    C1 = ["title"],
    E1 = { key: 0, class: "disk_value" },
    $1 = me(() =>
      t(
        "div",
        { class: "value-data" },
        [
          t("a", { href: "/cgi-bin/luci/admin/nas/smart" }, [
            t("span", { class: "error" }, " S.M.A.R.T\u5F02\u5E38"),
          ]),
        ],
        -1
      )
    ),
    D1 = [$1],
    B1 = { key: 1, class: "disk_value" },
    Y1 = { class: "disk-item_value" },
    A1 = { class: "value-data" },
    S1 = me(() =>
      t(
        "div",
        { class: "disk-item-tooltip" },
        [t("span", null, "\u4EC5\u7EDF\u8BA1\u5DF2\u6302\u8F7D\u5206\u533A")],
        -1
      )
    ),
    z1 = { class: "disk_icon" },
    P1 = { key: 0, class: "tooltip-trigger" },
    T1 = { class: "disk_tip" },
    I1 = me(() =>
      t(
        "div",
        null,
        [
          t("div", { class: "tooltip-text tooltip-top" }, [
            t(
              "span",
              { class: "disk_dir_tip" },
              "\u60A8\u7684\u7CFB\u7EDF\u7A7A\u95F4\u5DF2\u4E0D\u8DB3\uFF0C\u68C0\u6D4B\u5230\u60A8\u7684Docker\u6839\u76EE\u5F55\u4F4D\u4E8E\u7CFB\u7EDF\u6839\u76EE\u5F55\u4E0A\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u7CFB\u7EDF\u7684\u6B63\u5E38\u8FD0\u884C\uFF0C\u5EFA\u8BAE\u4F7F\u7528Docker\u8FC1\u79FB\u5411\u5BFC\u5C06Docker\u6839\u76EE\u5F55\u8FC1\u79FB\u5230\u5916\u7F6E\u786C\u76D8\u4E0A\u3002"
            ),
          ]),
        ],
        -1
      )
    ),
    L1 = { key: 1, class: "tooltip-trigger" },
    M1 = { class: "disk_tip" },
    O1 = me(() =>
      t(
        "div",
        null,
        [
          t("div", { class: "tooltip-text tooltip-top" }, [
            t(
              "span",
              { class: "disk_dir_tip" },
              "\u5206\u533A\u5B58\u5728\u5F02\u5E38\uFF0C\u70B9\u51FB\u5206\u533A\u5217\u8868\u67E5\u770B\u9519\u8BEF"
            ),
          ]),
        ],
        -1
      )
    ),
    N1 = { key: 2, class: "disk-item load" },
    j1 = ["title"],
    q1 = { class: "disk_value" },
    R1 = { class: "disk-item_value" },
    G1 = { class: "value-data" },
    V1 = { key: 3, class: "disk-item load" },
    U1 = ["title"],
    W1 = { class: "disk_value" },
    Z1 = { key: 0, class: "disk-item_value" },
    H1 = { class: "value-data" },
    J1 = { key: 1, class: "disk-item_value" },
    K1 = { class: "value-data" },
    X1 = { class: "disk_icon" },
    Q1 = T({
      props: {
        disk: { type: Object, required: !0 },
        smartWarning: { type: Boolean },
      },
      setup(e) {
        const a = e,
          o = H(() =>
            a.disk.errorInfo
              ? "error"
              : a.disk.childrens == null ||
                a.disk.childrens.length == 0 ||
                (a.disk.childrens.length == 1 &&
                  a.disk.childrens[0].filesystem == "No FileSystem")
              ? "load"
              : a.disk.childrens.filter((f) => f.mountPoint).length == 0
              ? "unmounted"
              : "success"
          ),
          n = H(() => {
            const f = a.disk;
            let u = f.name;
            return (
              f.size && (u += `\u3010${f.size}\u3011`),
              f.venderModel && (u += `(${f.venderModel})`),
              u
            );
          }),
          s = () => {
            Ae({
              action: "disk",
              disk: a.disk,
              Cancel: () => {},
              Next: () => {
                location.reload();
              },
            });
          },
          m = () => {
            _1({
              action: "disk",
              disk: a.disk,
              Cancel: () => {},
              Next: () => {
                location.reload();
              },
            });
          },
          b = () => {
            const f = a.disk,
              u = f.childrens || [];
            sa({
              action: "nas",
              disk: f,
              mount: u[0],
              Cancel: () => {},
              Next: () => {
                location.reload();
              },
            });
          };
        return (f, u) => {
          var d, v, l, _, p;
          const c = ut("progress-item");
          return y(o) == "error"
            ? (i(),
              r("li", h1, [
                t(
                  "div",
                  { class: "disk-item_name", title: y(n) },
                  [t("span", null, k(y(n)), 1)],
                  8,
                  x1
                ),
                t("div", k1, [
                  t("div", w1, [t("span", y1, k(e.disk.errorInfo), 1)]),
                ]),
              ]))
            : y(o) == "success"
            ? (i(),
              r("li", F1, [
                t(
                  "div",
                  { class: "disk-item_name", title: y(n) },
                  [t("span", null, k(y(n)), 1)],
                  8,
                  C1
                ),
                e.disk.smartWarning && e.smartWarning
                  ? (i(), r("div", E1, D1))
                  : (i(),
                    r("div", B1, [
                      t("div", Y1, [
                        t("div", A1, [
                          z(
                            c,
                            {
                              value: e.disk.usage || 0,
                              text: `${e.disk.used}/${e.disk.total}`,
                              style: { backgroundColor: "#767676" },
                            },
                            null,
                            8,
                            ["value", "text"]
                          ),
                        ]),
                        S1,
                      ]),
                      t("div", z1, [
                        e.disk.isDockerRoot &&
                        e.disk.isSystemRoot &&
                        e.disk.usage &&
                        e.disk.usage >= 90
                          ? (i(), r("span", P1, [t("span", T1, [z(ht)]), I1]))
                          : $("", !0),
                        !e.disk.isSystemRoot &&
                        (((d = e.disk.childrens) == null
                          ? void 0
                          : d.filter(
                              (h) => h.isReadOnly || h.filesystem == "ntfs"
                            ).length) || 0) > 0
                          ? (i(), r("span", L1, [t("span", M1, [z(ht)]), O1]))
                          : $("", !0),
                        !e.disk.isSystemRoot &&
                        (((v = e.disk.childrens) == null
                          ? void 0
                          : v.filter(
                              (h) => h.isReadOnly || h.filesystem == "ntfs"
                            ).length) || 0) > 0
                          ? (i(),
                            r(
                              "span",
                              {
                                key: 2,
                                class: "disk_infoicon",
                                onClick: u[0] || (u[0] = (h) => s()),
                              },
                              [z(O0)]
                            ))
                          : $("", !0),
                        t(
                          "span",
                          {
                            class: "disk_infoicon",
                            onClick: u[1] || (u[1] = (h) => m()),
                          },
                          [z(Ve)]
                        ),
                      ]),
                    ])),
              ]))
            : y(o) == "load"
            ? (i(),
              r("li", N1, [
                t(
                  "div",
                  { class: "disk-item_name", title: y(n) },
                  [t("span", null, k(y(n)), 1)],
                  8,
                  j1
                ),
                t("div", q1, [
                  t("div", R1, [
                    t("div", G1, [
                      t(
                        "button",
                        { onClick: u[2] || (u[2] = (h) => s()) },
                        "\u683C\u5F0F\u5316\u5E76\u6302\u8F7D"
                      ),
                    ]),
                  ]),
                ]),
              ]))
            : y(o) == "unmounted"
            ? (i(),
              r("li", V1, [
                t(
                  "div",
                  { class: "disk-item_name", title: y(n) },
                  [t("span", null, k(y(n)), 1)],
                  8,
                  U1
                ),
                t("div", W1, [
                  ((l = e.disk.childrens) == null ? void 0 : l.length) == 1
                    ? (i(),
                      r("div", Z1, [
                        t("div", H1, [
                          t(
                            "button",
                            { onClick: u[3] || (u[3] = (h) => b()) },
                            "\u624B\u52A8\u6302\u8F7D"
                          ),
                        ]),
                      ]))
                    : $("", !0),
                  (((_ = e.disk.childrens) == null ? void 0 : _.length) || 0) >
                  1
                    ? (i(),
                      r("div", J1, [
                        t("div", K1, [
                          t(
                            "button",
                            { onClick: u[4] || (u[4] = (h) => m()) },
                            "\u624B\u52A8\u6302\u8F7D"
                          ),
                        ]),
                      ]))
                    : $("", !0),
                  t("div", X1, [
                    (((p = e.disk.childrens) == null ? void 0 : p.length) ||
                      0) > 1
                      ? (i(),
                        r(
                          "span",
                          {
                            key: 0,
                            class: "disk_infoicon",
                            onClick: u[5] || (u[5] = (h) => m()),
                          },
                          [z(Ve)]
                        ))
                      : $("", !0),
                  ]),
                ]),
              ]))
            : $("", !0);
        };
      },
    });
  var ye = S(Q1, [["__scopeId", "data-v-acdd0e48"]]);
  const Ht = (e) => (O("data-v-54c95abb"), (e = e()), N(), e),
    tc = { class: "app-container" },
    ec = { class: "app-container_title" },
    ac = Ht(() =>
      t("span", { class: "disk_info" }, "\u78C1\u76D8\u4FE1\u606F", -1)
    ),
    oc = {
      class: "more_icon",
      title: "\u67E5\u770B\u78C1\u76D8\u7BA1\u7406\u4FE1\u606F",
    },
    nc = { class: "DeviceBlock" },
    ic = Ht(() =>
      t(
        "ul",
        null,
        [
          t("li", null, [
            t(
              "a",
              { href: "/cgi-bin/luci/admin/nas/raid" },
              "RAID\u7BA1\u7406"
            ),
          ]),
          t("li", null, [
            t("a", { href: "/cgi-bin/luci/admin/nas/smart" }, "S.M.A.R.T."),
          ]),
          t("li", null, [
            t(
              "a",
              { href: "/cgi-bin/luci/admin/system/diskman" },
              "\u78C1\u76D8\u7BA1\u7406"
            ),
          ]),
          t("li", null, [
            t(
              "a",
              { href: "/cgi-bin/luci/admin/system/mounts" },
              "\u6302\u8F7D\u70B9"
            ),
          ]),
        ],
        -1
      )
    ),
    rc = { key: 0 },
    sc = Ht(() =>
      t(
        "div",
        { class: "disk_loading_icon" },
        [
          t("div", { class: "loading icon" }, [
            t(
              "svg",
              {
                t: "1631799919469",
                class: "icon",
                viewBox: "0 0 1024 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "p-id": "3453",
                width: "128",
                height: "128",
              },
              [
                t("path", {
                  d: "M522.695111 1.991111c-26.339556 0.170667-47.416889 21.475556-47.672889 48.753778-0.284444 26.453333-0.056889 52.963556-0.056889 79.445333 0 27.249778-0.369778 54.528 0.113778 81.777778 0.483556 27.050667 22.016 47.132444 49.351111 46.904889a47.786667 47.786667 0 0 0 47.729778-47.445333c0.284444-53.76 0.284444-107.52-0.028444-161.251556-0.170667-27.676444-21.902222-48.355556-49.436445-48.184889m-195.896889 88.092445c-8.334222-14.222222-21.646222-21.276444-38.314666-21.333334-35.128889 0-56.576 36.949333-38.968889 68.152889a11616.995556 11616.995556 0 0 0 78.961777 137.614222 44.942222 44.942222 0 0 0 61.838223 16.896c21.304889-12.202667 29.667556-38.968889 17.379555-60.871111-26.453333-47.104-53.560889-93.866667-80.896-140.458666m-228.693333 234.524444c44.316444 25.799111 88.746667 51.342222 133.176889 76.970667 6.712889 3.896889 13.681778 6.912 21.703111 6.428444 20.138667 0.142222 35.953778-11.946667 41.301333-31.573333 5.006222-18.261333-2.673778-36.721778-20.224-46.990222-44.629333-26.026667-89.372444-51.882667-134.115555-77.710223-22.528-12.999111-47.815111-7.025778-59.818667 13.909334-12.231111 21.248-4.977778 45.624889 17.948444 58.965333m34.161778 235.975111c26.396444 0 52.821333 0.199111 79.217778-0.085333 23.409778-0.256 39.139556-16.412444 38.798222-39.139556-0.341333-21.617778-16.924444-37.347556-39.594666-37.376-51.655111-0.056889-103.310222-0.056889-154.965334 0.028445-24.177778 0.056889-40.704 15.985778-40.561778 38.684444 0.142222 22.186667 16.583111 37.745778 40.192 37.859556 25.656889 0.142222 51.285333 0.028444 76.913778 0m151.722667 100.238222a34.247111 34.247111 0 0 0-46.876445-12.942222 13764.778667 13764.778667 0 0 0-139.008 80.583111c-11.093333 6.485333-16.327111 16.867556-16.497777 25.372444 0.085333 30.549333 27.249778 47.957333 50.403555 35.072 47.160889-26.197333 93.724444-53.475556 140.145778-80.924444 17.180444-10.154667 21.504-30.378667 11.832889-47.160889m91.875555 101.660444c-14.250667-4.067556-27.619556 1.422222-35.84 15.644445a24375.466667 24375.466667 0 0 0-77.312 134.485333c-10.012444 17.550222-5.859556 35.669333 9.784889 45.027556 16.014222 9.557333 34.247111 4.039111 44.714667-13.994667 25.543111-44.088889 50.915556-88.263111 76.373333-132.352 3.299556-5.745778 5.688889-11.690667 5.745778-14.933333 0-17.834667-9.272889-29.866667-23.466667-33.877334m147.456 44.288c-16.384 0.085333-27.306667 11.918222-27.448888 30.151111-0.142222 25.372444-0.028444 50.716444-0.028445 76.060445h-0.085333c0 26.112-0.113778 52.252444 0.056889 78.364444 0.113778 18.261333 11.064889 30.065778 27.448889 30.208 16.952889 0.142222 28.046222-11.832889 28.103111-30.748444 0.113778-51.086222 0.142222-102.172444 0.056889-153.258667 0-18.773333-11.207111-30.862222-28.103112-30.776889m177.208889-26.112c-7.509333-12.8-21.902222-16.014222-33.792-8.874666a23.722667 23.722667 0 0 0-8.533333 32.995555c26.282667 46.279111 52.906667 92.330667 79.644444 138.353778 4.494222 7.765333 11.633778 11.946667 20.906667 11.804444 18.545778-0.142222 30.520889-19.342222 21.219556-35.868444-26.026667-46.392889-52.650667-92.444444-79.473778-138.410667m239.957333-41.187555c-45.283556-26.254222-90.595556-52.48-135.964444-78.648889-4.693333-2.702222-9.728-4.323556-15.36-2.958222-9.102222 2.247111-14.933333 8.049778-16.497778 17.095111-1.877333 10.894222 3.84 18.204444 12.885333 23.438222 29.809778 17.180444 59.562667 34.417778 89.344 51.598222 15.217778 8.789333 30.236444 17.976889 45.738667 26.225778 14.677333 7.793778 31.061333-2.048 31.061333-18.033778-0.056889-8.448-4.096-14.592-11.207111-18.716444m48.867556-234.638222c-24.888889-0.085333-49.749333 0-74.609778 0v-0.085334c-25.258667 0-50.517333-0.056889-75.776 0.028445-13.425778 0.056889-20.963556 6.343111-21.162667 17.294222-0.199111 11.150222 7.082667 17.521778 20.679111 17.550222 50.488889 0.113778 100.977778 0.142222 151.495112 0.085333 13.368889 0 21.191111-6.485333 21.390222-17.152 0.227556-10.808889-8.106667-17.664-22.016-17.720888m-187.960889-127.146667c45.084444-26.026667 90.140444-52.110222 135.168-78.222222 4.864-2.844444 8.248889-6.855111 8.135111-12.942223-0.142222-11.036444-11.207111-17.436444-21.504-11.548444-45.511111 26.055111-90.851556 52.394667-136.135111 78.819556-7.68 4.494222-10.524444 11.52-5.575111 19.569777 4.835556 7.850667 12.088889 8.817778 19.911111 4.323556m-122.311111-115.114667c5.205333-0.256 8.220444-3.413333 10.609778-7.651555 4.920889-8.647111 10.040889-17.208889 14.990222-25.827556 20.48-35.555556 40.931556-71.025778 61.297778-106.609778 5.091556-8.874667 3.015111-16.668444-4.778667-18.517333-7.68-1.848889-10.894222 3.697778-14.051556 9.159111l-68.778666 119.495111c-2.844444 4.977778-6.030222 9.870222-8.305778 15.104-3.128889 7.196444 1.678222 14.648889 9.045333 14.848",
                  "p-id": "3454",
                }),
              ]
            ),
          ]),
          t(
            "span",
            { class: "disk_loading_info" },
            "\u6B63\u5728\u83B7\u53D6\u78C1\u76D8\u4FE1\u606F..."
          ),
        ],
        -1
      )
    ),
    dc = [sc],
    cc = { key: 1 },
    uc = Ht(() =>
      t(
        "div",
        { class: "app-container_info" },
        [t("span", null, "\u7CFB\u7EDF\u6839\u76EE\u5F55")],
        -1
      )
    ),
    lc = { class: "app-container_body" },
    pc = { key: 2 },
    fc = Ht(() =>
      t(
        "div",
        { class: "app-container_info" },
        [t("span", null, "\u5DF2\u6302\u8F7D\u78C1\u76D8")],
        -1
      )
    ),
    mc = { class: "app-container_body" },
    vc = { key: 3 },
    bc = Ht(() =>
      t(
        "div",
        { class: "app-container_info" },
        [t("span", null, "RAID\u8BBE\u5907")],
        -1
      )
    ),
    gc = { class: "app-container_body" },
    _c = T({
      setup(e) {
        const a = F(!1),
          o = rt({ disks: [], raidList: [] }),
          n = () => {
            Y.Nas.Disk.Status.GET().then((b) => {
              var f;
              if ((f = b == null ? void 0 : b.data) != null && f.result) {
                const u = b.data.result;
                o.disks = u.disks || [];
              }
            });
          };
        (() =>
          A(this, null, function* () {
            try {
              const b = yield Y.Raid.List.GET();
              if (b != null && b.data) {
                const { success: f, error: u, result: c } = b.data;
                if ((c && (o.raidList = c.disks || []), u)) throw u;
              }
            } catch (b) {
              console.log(b);
            }
          }))(),
          n();
        const m = () => {
          a.value = !a.value;
        };
        return (b, f) => {
          var u, c;
          return (
            i(),
            r("div", tc, [
              t("ul", null, [
                t("li", null, [
                  t("div", ec, [
                    ac,
                    t("span", oc, [z(Yt, { onClick: m })]),
                    P(
                      t(
                        "div",
                        nc,
                        [
                          t("div", { class: "menu_background", onClick: m }),
                          ic,
                        ],
                        512
                      ),
                      [[Ft, a.value]]
                    ),
                  ]),
                ]),
                y(o).disks ? $("", !0) : (i(), r("li", rc, dc)),
                y(o).disks
                  ? (i(),
                    r("li", cc, [
                      uc,
                      t("div", lc, [
                        (i(!0),
                        r(
                          L,
                          null,
                          V(
                            (u = y(o).disks) == null
                              ? void 0
                              : u.filter((d) => d.isSystemRoot),
                            (d, v) => (
                              i(), M(ye, { key: v, disk: d }, null, 8, ["disk"])
                            )
                          ),
                          128
                        )),
                      ]),
                    ]))
                  : $("", !0),
                y(o).disks
                  ? (i(),
                    r("li", pc, [
                      fc,
                      t("div", mc, [
                        (i(!0),
                        r(
                          L,
                          null,
                          V(
                            (c = y(o).disks) == null
                              ? void 0
                              : c.filter((d) => !d.isSystemRoot),
                            (d, v) => (
                              i(),
                              M(
                                ye,
                                { key: v, disk: d, smartWarning: !0 },
                                null,
                                8,
                                ["disk"]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]))
                  : $("", !0),
                y(o).raidList.length > 0
                  ? (i(),
                    r("li", vc, [
                      bc,
                      t("div", gc, [
                        (i(!0),
                        r(
                          L,
                          null,
                          V(
                            y(o).raidList,
                            (d, v) => (
                              i(), M(ye, { key: v, disk: d }, null, 8, ["disk"])
                            )
                          ),
                          128
                        )),
                      ]),
                    ]))
                  : $("", !0),
              ]),
            ])
          );
        };
      },
    });
  var hc = S(_c, [["__scopeId", "data-v-54c95abb"]]);
  const ca = (e) => (O("data-v-c98f7488"), (e = e()), N(), e),
    xc = { class: "app-container_samba" },
    kc = { key: 0, class: "sambas-item" },
    wc = ca(() =>
      t(
        "div",
        { class: "sambas-item_name" },
        [t("span", null, "\u5F53\u524D\u72B6\u6001:")],
        -1
      )
    ),
    yc = { class: "sambas-item_value" },
    Fc = ca(() =>
      t(
        "li",
        { class: "sambas-item" },
        [
          t("div", { class: "sambas-item_name tit" }, [
            t("span", null, "\u5730\u5740"),
          ]),
          t("div", { class: "sambas-item_value tit" }, [
            t("span", null, "\u76EE\u5F55"),
          ]),
        ],
        -1
      )
    ),
    Cc = { class: "samba-item" },
    Ec = { class: "samba-item_name" },
    $c = ["title"],
    Dc = T({
      props: { sambas: { type: Array } },
      setup(e) {
        const a = window.location.hostname;
        return (o, n) => {
          var s;
          return (
            i(),
            r("ul", xc, [
              e.sambas
                ? (i(),
                  r("li", kc, [
                    wc,
                    t("div", yc, [
                      t(
                        "span",
                        null,
                        k(
                          (s = e.sambas) != null && s.length
                            ? "\u5DF2\u542F\u7528"
                            : "\u672A\u542F\u7528"
                        ),
                        1
                      ),
                    ]),
                  ]))
                : $("", !0),
              Fc,
              (i(!0),
              r(
                L,
                null,
                V(
                  e.sambas,
                  (m) => (
                    i(),
                    r("li", Cc, [
                      t("div", Ec, [
                        t(
                          "span",
                          null,
                          "smb://" + k(y(a)) + "/" + k(m.shareName),
                          1
                        ),
                      ]),
                      t(
                        "div",
                        { class: "samba-item_value", title: m.path },
                        [t("span", null, k(m.path), 1)],
                        8,
                        $c
                      ),
                    ])
                  )
                ),
                256
              )),
            ])
          );
        };
      },
    });
  var Bc = S(Dc, [["__scopeId", "data-v-c98f7488"]]);
  const ve = (e) => (O("data-v-7e6f57b6"), (e = e()), N(), e),
    Yc = { class: "webdav-item" },
    Ac = ve(() =>
      t(
        "div",
        { class: "webdav-item_name" },
        [t("span", null, "\u5F53\u524D\u72B6\u6001:")],
        -1
      )
    ),
    Sc = { class: "webdav-item_value" },
    zc = { key: 0, class: "webdav-item" },
    Pc = ve(() =>
      t(
        "div",
        { class: "webdav-item_name" },
        [t("span", null, "\u6302\u8F7D\u8DEF\u5F84:")],
        -1
      )
    ),
    Tc = { class: "webdav-item_value" },
    Ic = { key: 1, class: "webdav-item" },
    Lc = ve(() =>
      t(
        "div",
        { class: "webdav-item_name" },
        [t("span", null, "\u670D\u52A1\u8DEF\u5F84:")],
        -1
      )
    ),
    Mc = { class: "webdav-item_value" },
    Oc = ["href"],
    Nc = { key: 2, class: "webdav-item" },
    jc = ve(() =>
      t(
        "div",
        { class: "webdav-item_name" },
        [t("span", null, "\u8D26\u53F7:")],
        -1
      )
    ),
    qc = { class: "webdav-item_value" },
    Rc = T({
      props: { webdav: { type: Object } },
      setup(e) {
        const a = e,
          o = H(() => {
            var n;
            return `http://${location.hostname}:${
              (n = a.webdav) == null ? void 0 : n.port
            }`;
          });
        return (n, s) => {
          var m, b, f, u, c, d;
          return (
            i(),
            r(
              L,
              null,
              [
                t("li", Yc, [
                  Ac,
                  t("div", Sc, [
                    t(
                      "span",
                      null,
                      k(
                        (m = e.webdav) != null && m.path
                          ? "\u5DF2\u542F\u7528"
                          : "\u672A\u542F\u7528"
                      ),
                      1
                    ),
                  ]),
                ]),
                (b = e.webdav) != null && b.path
                  ? (i(),
                    r("li", zc, [
                      Pc,
                      t("div", Tc, [
                        t(
                          "span",
                          null,
                          k((f = e.webdav) == null ? void 0 : f.path),
                          1
                        ),
                      ]),
                    ]))
                  : $("", !0),
                (u = e.webdav) != null && u.port
                  ? (i(),
                    r("li", Ic, [
                      Lc,
                      t("div", Mc, [
                        t(
                          "a",
                          {
                            href: y(o),
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          k(y(o)),
                          9,
                          Oc
                        ),
                      ]),
                    ]))
                  : $("", !0),
                (c = e.webdav) != null && c.username
                  ? (i(),
                    r("li", Nc, [
                      jc,
                      t("div", qc, [
                        t(
                          "span",
                          null,
                          k((d = e.webdav) == null ? void 0 : d.username),
                          1
                        ),
                      ]),
                    ]))
                  : $("", !0),
              ],
              64
            )
          );
        };
      },
    });
  var Gc = S(Rc, [["__scopeId", "data-v-7e6f57b6"]]);
  const ze = (e) => (O("data-v-6e660f68"), (e = e()), N(), e),
    Vc = { class: "disk-item" },
    Uc = ze(() =>
      t(
        "div",
        { class: "disk-item_icon" },
        [
          t(
            "svg",
            {
              t: "1642563338465",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "2216",
              width: "128",
              height: "128",
            },
            [
              t("path", {
                d: "M998.4 711.68l-119.467-512c-6.826-42.667-42.666-75.093-87.04-76.8H232.107c-44.374 1.707-80.214 35.84-87.04 78.507L25.6 711.68c-5.12 13.653-6.827 29.013-6.827 42.667 0 76.8 63.147 139.946 141.654 139.946H865.28c78.507 0 141.653-63.146 141.653-139.946 0-13.654-3.413-29.014-8.533-42.667zM394.24 366.933c1.707-51.2 56.32-92.16 124.587-92.16S640 315.733 640 365.227c44.373-1.707 81.92 23.893 83.627 58.026s-34.134 63.147-78.507 64.854h-6.827l-245.76 1.706c-44.373 0-80.213-27.306-80.213-59.733 0-35.84 37.547-63.147 81.92-63.147z m471.04 459.094H160.427c-39.254 0-69.974-30.72-69.974-69.974s32.427-69.973 69.974-69.973H865.28c39.253 0 69.973 30.72 69.973 69.973 1.707 37.547-30.72 69.974-69.973 69.974z m-35.84-92.16c-11.947 0-22.187 8.533-23.893 20.48 0 11.946 8.533 22.186 20.48 23.893h3.413c11.947 0 22.187-10.24 22.187-22.187 0-13.653-8.534-22.186-22.187-22.186z m-46.08 22.186c0-25.6 20.48-46.08 46.08-46.08s46.08 20.48 46.08 46.08-20.48 46.08-46.08 46.08-46.08-20.48-46.08-46.08z",
                "p-id": "2217",
              }),
            ]
          ),
        ],
        -1
      )
    ),
    Wc = { class: "disk-item_f" },
    Zc = { class: "disk-item_venderModel" },
    Hc = { class: "disk-item_used" },
    Jc = ze(() => t("div", { class: "auto" }, null, -1)),
    Kc = { class: "disk-item-r" },
    Xc = { class: "disk-children" },
    Qc = ["onClick"],
    tu = ze(() =>
      t(
        "div",
        { class: "disk-item_icon" },
        [
          t(
            "svg",
            {
              t: "1642563581459",
              class: "icon",
              viewBox: "0 0 1228 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "7132",
              width: "128",
              height: "128",
            },
            [
              t("path", {
                d: "M525.2096 145.3568c1.9968-45.568-35.6864-99.1232-57.4976-99.1232H57.4976C15.872 79.9232 17.8176 145.408 17.8176 145.408h507.392z",
                fill: "#ECC049",
                "p-id": "7133",
              }),
              t("path", {
                d: "M21.8112 143.36L19.8144 825.1392c0 75.3152 75.3152 152.576 150.6304 152.576h887.9104c75.264 0 150.6304-75.264 150.6304-152.576V297.984c0-75.264-75.3152-152.576-150.6304-152.576h-434.0224L21.8112 143.36z",
                fill: "#FFD658",
                "p-id": "7134",
              }),
            ]
          ),
        ],
        -1
      )
    ),
    eu = { key: 0 },
    au = { key: 1 },
    ou = T({
      props: {
        disk: { type: Object, required: !0 },
        currDisk: { type: Object },
        currMountPoint: { type: Object },
        onDisk: { type: Function, required: !0 },
      },
      setup(e) {
        var s, m;
        const a = e,
          o = F(!1);
        a.currDisk != null &&
          ((s = a.currDisk) == null ? void 0 : s.venderModel) ==
            ((m = a.disk) == null ? void 0 : m.venderModel) &&
          (o.value = !0);
        const n = (b) => {
          (o.value = !o.value), a.onDisk(b, null);
        };
        return (b, f) => {
          var u;
          return (
            i(),
            r("ul", Vc, [
              t(
                "li",
                {
                  class: ct([
                    "disk-info",
                    {
                      on:
                        e.disk.venderModel ==
                        ((u = e.currDisk) == null ? void 0 : u.venderModel),
                      nopoint:
                        e.disk.childrens == null ||
                        e.disk.childrens.length == 0,
                    },
                  ]),
                  onClick: f[0] || (f[0] = (c) => n(e.disk)),
                },
                [
                  Uc,
                  t("div", Wc, [
                    t("div", Zc, k(e.disk.venderModel), 1),
                    t("div", Hc, k(e.disk.used) + "/" + k(e.disk.size), 1),
                  ]),
                  Jc,
                  t("div", Kc, k(e.disk.path), 1),
                ],
                2
              ),
              P(
                t(
                  "div",
                  Xc,
                  [
                    (i(!0),
                    r(
                      L,
                      null,
                      V(e.disk.childrens, (c) => {
                        var d, v;
                        return (
                          i(),
                          r(
                            "li",
                            {
                              class: ct([
                                "disk-children_item",
                                {
                                  on:
                                    c.uuid ==
                                      ((d = e.currMountPoint) == null
                                        ? void 0
                                        : d.uuid) &&
                                    c.path ==
                                      ((v = e.currMountPoint) == null
                                        ? void 0
                                        : v.path),
                                },
                              ]),
                              onClick: (l) => e.onDisk(e.disk, c),
                            },
                            [
                              tu,
                              c.mountPoint
                                ? (i(),
                                  r(
                                    "span",
                                    eu,
                                    " \u3010" +
                                      k(c.filesystem) +
                                      "\u3011 " +
                                      k(c.mountPoint) +
                                      " \uFF08" +
                                      k(c.used) +
                                      "/" +
                                      k(c.total) +
                                      "\uFF09 [" +
                                      k(c.uuid) +
                                      "] ",
                                    1
                                  ))
                                : (i(),
                                  r(
                                    "span",
                                    au,
                                    " \u3010" +
                                      k(c.filesystem) +
                                      "\u3011 " +
                                      k(
                                        c.mountPoint ||
                                          c.path ||
                                          "\u672A\u6302\u8F7D\u78C1\u76D8"
                                      ) +
                                      " [" +
                                      k(c.uuid) +
                                      "] ",
                                    1
                                  )),
                            ],
                            10,
                            Qc
                          )
                        );
                      }),
                      256
                    )),
                  ],
                  512
                ),
                [[Ft, o.value]]
              ),
            ])
          );
        };
      },
    });
  var Ue = S(ou, [["__scopeId", "data-v-6e660f68"]]);
  const Pe = (e) => (O("data-v-14d030a4"), (e = e()), N(), e),
    nu = { class: "action list" },
    iu = Pe(() =>
      t(
        "div",
        { class: "action-header" },
        [
          t(
            "div",
            { class: "action-header_title" },
            "\u8BF7\u9009\u62E9\u4E00\u4E2A\u786C\u76D8\u6216\u5206\u533A"
          ),
        ],
        -1
      )
    ),
    ru = { class: "action-body" },
    su = { class: "disk-list" },
    du = Pe(() =>
      t(
        "div",
        { class: "action-msg" },
        [
          t("span", null, [
            K(
              " \u60F3\u8981\u66F4\u7CBE\u786E\u7684\u914D\u7F6E\uFF1F\u8BF7\u524D\u5F80 "
            ),
            t(
              "a",
              { href: "/cgi-bin/luci/admin/system/diskman" },
              "\u9AD8\u7EA7\u8BBE\u7F6E"
            ),
          ]),
        ],
        -1
      )
    ),
    cu = Pe(() => t("div", { class: "auto" }, null, -1)),
    uu = T({
      props: {
        Cancel: { type: Function },
        Next: { type: Function },
        Close: { type: Function },
      },
      setup(e) {
        const a = e,
          o = F(!0),
          n = rt({ disks: [], raids: [] });
        (() =>
          A(this, null, function* () {
            const l = yield Promise.all([
              Y.Nas.Disk.Status.GET(),
              Y.Raid.List.GET(),
            ]);
            try {
              if (l[0]) {
                const _ = l[0];
                _ != null &&
                  _.data.result &&
                  (n.disks = (_ == null ? void 0 : _.data.result.disks) || []);
              }
              if (l[1]) {
                const _ = l[1];
                _.data.result && (n.raids = _.data.result.disks || []);
              }
            } catch (_) {
              x.Error(`${_}`);
            }
          }))();
        const m = F(),
          b = F(),
          f = (l, _) => {
            (m.value = l), (b.value = _);
          },
          u = () => {
            a.Close && a.Close();
          },
          c = () => {
            a.Cancel && a.Cancel(), u();
          },
          d = (l) => {
            a.Next && a.Next(l), u();
          },
          v = () => {
            if (m.value == null) {
              x.Warning("\u8BF7\u9009\u62E9\u76EE\u6807\u786C\u76D8");
              return;
            }
            if (
              m.value.childrens != null &&
              m.value.childrens.length > 0 &&
              b.value == null
            ) {
              x.Warning("\u8BF7\u9009\u62E9\u786C\u76D8\u5206\u533A");
              return;
            }
            if (
              b.value != null &&
              (b.value.mountPoint == null || b.value.mountPoint == "")
            ) {
              x.Warning(
                "\u8BE5\u5206\u533A\u5C1A\u672A\u6302\u8F7D\uFF0C\u8BF7\u5148\u53BB\u6302\u8F7D"
              );
              return;
            }
            (o.value = !1),
              Ae({
                action: "nas",
                disk: m.value,
                mount: b.value,
                Cancel: () => {
                  o.value = !0;
                },
                Next: (l) => {
                  d(l);
                },
              });
          };
        return (l, _) =>
          o.value
            ? (i(),
              M(
                ot,
                { key: 0, type: 1 },
                {
                  default: q(() => [
                    z(
                      xt,
                      { name: "rotate", mode: "out-in" },
                      {
                        default: q(() => [
                          t("div", nu, [
                            iu,
                            t("div", ru, [
                              t("div", su, [
                                (i(!0),
                                r(
                                  L,
                                  null,
                                  V(
                                    y(n).disks,
                                    (p) => (
                                      i(),
                                      M(
                                        Ue,
                                        {
                                          disk: p,
                                          onDisk: f,
                                          currDisk: m.value,
                                          currMountPoint: b.value,
                                        },
                                        null,
                                        8,
                                        ["disk", "currDisk", "currMountPoint"]
                                      )
                                    )
                                  ),
                                  256
                                )),
                                (i(!0),
                                r(
                                  L,
                                  null,
                                  V(
                                    y(n).raids,
                                    (p) => (
                                      i(),
                                      M(
                                        Ue,
                                        {
                                          disk: p,
                                          onDisk: f,
                                          currDisk: m.value,
                                          currMountPoint: b.value,
                                        },
                                        null,
                                        8,
                                        ["disk", "currDisk", "currMountPoint"]
                                      )
                                    )
                                  ),
                                  256
                                )),
                              ]),
                            ]),
                            du,
                            t("div", { class: "action-footer" }, [
                              cu,
                              t(
                                "button",
                                {
                                  class:
                                    "cbi-button cbi-button-remove app-btn app-back",
                                  onClick: c,
                                  type: "button",
                                },
                                "\u8FD4\u56DE"
                              ),
                              t(
                                "button",
                                {
                                  class:
                                    "cbi-button cbi-button-apply app-btn app-next",
                                  onClick: v,
                                  type: "button",
                                },
                                "\u4E0B\u4E00\u6B65"
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ))
            : $("", !0);
      },
    });
  var lu = S(uu, [["__scopeId", "data-v-14d030a4"]]),
    pu = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        lu,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    };
  const be = (e) => (O("data-v-301dbcf7"), (e = e()), N(), e),
    fu = { class: "action" },
    mu = { class: "action-body" },
    vu = be(() =>
      t(
        "div",
        { class: "icon" },
        [
          t(
            "svg",
            {
              t: "1642063181211",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "5062",
              width: "128",
              height: "128",
              "data-v-cda444e0": "",
            },
            [
              t("path", {
                d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
                fill: "#52C41A",
                "p-id": "5063",
                "data-v-cda444e0": "",
              }),
            ]
          ),
        ],
        -1
      )
    ),
    bu = be(() =>
      t("h2", { class: "title" }, "\u670D\u52A1\u5DF2\u542F\u52A8", -1)
    ),
    gu = { class: "info" },
    _u = be(() => t("span", null, "\u524D\u5F80", -1)),
    hu = ["href"],
    xu = be(() => t("span", null, "\u914D\u7F6E", -1)),
    ku = T({
      props: { Close: Function },
      setup(e) {
        const a = e,
          o = F(""),
          n = H(() => `http://${location.hostname}:${o.value}`);
        (() => {
          Y.Nas.Linkease.Enable.POST().then((b) => {
            var f, u;
            (f = b == null ? void 0 : b.data) != null &&
              f.result &&
              (o.value = ((u = b.data.result) == null ? void 0 : u.port) || "");
          });
        })();
        const m = () => {
          a.Close && a.Close(), location.reload();
        };
        return (b, f) => (
          i(),
          M(
            ot,
            { type: 1 },
            {
              default: q(() => [
                z(
                  xt,
                  { name: "rotate", mode: "out-in" },
                  {
                    default: q(() => [
                      t("div", fu, [
                        t("div", mu, [
                          vu,
                          bu,
                          t("div", gu, [
                            _u,
                            t(
                              "a",
                              {
                                href: y(n),
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              k(y(n)),
                              9,
                              hu
                            ),
                            xu,
                          ]),
                          t("div", { class: "btns" }, [
                            t(
                              "button",
                              {
                                class:
                                  "cbi-button cbi-button-remove app-btn app-back",
                                type: "button",
                                onClick: m,
                              },
                              "\u5173\u95ED"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        );
      },
    });
  var wu = S(ku, [["__scopeId", "data-v-301dbcf7"]]),
    yu = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        wu,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    };
  const ee = (e) => (O("data-v-0a9d9cdc"), (e = e()), N(), e),
    Fu = ["onSubmit"],
    Cu = ee(() =>
      t(
        "div",
        { class: "action-header" },
        [
          t(
            "div",
            { class: "action-header_title" },
            "Webdav\u5171\u4EAB\u914D\u7F6E"
          ),
        ],
        -1
      )
    ),
    Eu = { class: "action-body" },
    $u = { class: "label-item" },
    Du = ee(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u670D\u52A1\u76EE\u5F55\u8DEF\u5F84")],
        -1
      )
    ),
    Bu = { class: "label-item_value" },
    Yu = ["value"],
    Au = { class: "label-item" },
    Su = ee(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u7528\u6237\u540D")],
        -1
      )
    ),
    zu = { class: "label-item_value" },
    Pu = { class: "label-item" },
    Tu = ee(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u5BC6\u7801")],
        -1
      )
    ),
    Iu = { class: "label-item_value" },
    Lu = { class: "action-footer" },
    Mu = ee(() => t("div", { class: "auto" }, null, -1)),
    Ou = ["disabled"],
    Nu = ["disabled"],
    ju = T({
      props: { rootPath: { type: String, required: !0 }, Close: Function },
      setup(e) {
        const a = e,
          o = (u) => {
            u.preventDefault(), a.Close && a.Close();
          },
          n = F(!1),
          s = F({ username: "root", password: "", rootPath: a.rootPath });
        (() =>
          A(this, null, function* () {
            const u = x.Loading("\u52A0\u8F7D\u4E2D...");
            n.value = !0;
            try {
              const c = yield Y.Nas.Webdav.Status.GET();
              if (c != null && c.data) {
                const { result: d, error: v } = c.data;
                if (v) {
                  x.Warning(v);
                  return;
                }
                d &&
                  (d.username && (s.value.username = d.username),
                  d.password && (s.value.password = d.password));
              }
            } catch (c) {
              x.Error(c);
            }
            (n.value = !1), u.Close();
          }))();
        const b = () => {
            const u = s.value;
            if (u.rootPath == "") {
              x.Warning("\u5171\u4EAB\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A");
              return;
            }
            if (u.username == "") {
              x.Warning("\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A");
              return;
            }
            if (u.password == "") {
              x.Warning("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");
              return;
            }
            f(u);
          },
          f = (u) =>
            A(this, null, function* () {
              n.value = !0;
              const c = x.Loading("\u521B\u5EFA\u4E2D...");
              try {
                const d = yield Y.Nas.Webdav.Create.POST(u);
                if (d != null && d.data) {
                  const { error: v, result: l } = d.data;
                  v && x.Warning(v),
                    l &&
                      (x.Success("\u521B\u5EFA\u6210\u529F"),
                      window.setTimeout(() => {
                        location.reload();
                      }, 1e3));
                }
              } catch (d) {
                x.Error(d);
              }
              c.Close(), (n.value = !1);
            });
        return (u, c) => (
          i(),
          M(
            ot,
            { type: 1 },
            {
              default: q(() => [
                z(
                  xt,
                  { name: "rotate", mode: "out-in" },
                  {
                    default: q(() => [
                      t(
                        "form",
                        { class: "action", onSubmit: it(b, ["prevent"]) },
                        [
                          Cu,
                          t("div", Eu, [
                            t("div", $u, [
                              Du,
                              t("div", Bu, [
                                t(
                                  "input",
                                  {
                                    type: "text",
                                    value: s.value.rootPath,
                                    disabled: "",
                                    required: "",
                                    style: { backgroundColor: "#eee" },
                                  },
                                  null,
                                  8,
                                  Yu
                                ),
                              ]),
                            ]),
                            t("div", Au, [
                              Su,
                              t("div", zu, [
                                P(
                                  t(
                                    "input",
                                    {
                                      type: "text",
                                      required: "",
                                      placeholder:
                                        "\u8D26\u53F7\u7528\u6237\u540D",
                                      "onUpdate:modelValue":
                                        c[0] ||
                                        (c[0] = (d) => (s.value.username = d)),
                                    },
                                    null,
                                    512
                                  ),
                                  [[J, s.value.username, void 0, { trim: !0 }]]
                                ),
                              ]),
                            ]),
                            t("div", Pu, [
                              Tu,
                              t("div", Iu, [
                                P(
                                  t(
                                    "input",
                                    {
                                      type: "password",
                                      "onUpdate:modelValue":
                                        c[1] ||
                                        (c[1] = (d) => (s.value.password = d)),
                                    },
                                    null,
                                    512
                                  ),
                                  [[J, s.value.password, void 0, { trim: !0 }]]
                                ),
                              ]),
                            ]),
                          ]),
                          t("div", Lu, [
                            Mu,
                            t(
                              "button",
                              {
                                class:
                                  "cbi-button cbi-button-remove app-btn app-back",
                                type: "button",
                                onClick: o,
                                disabled: n.value,
                              },
                              "\u5173\u95ED",
                              8,
                              Ou
                            ),
                            t(
                              "button",
                              {
                                class:
                                  "cbi-button cbi-button-apply app-btn app-next",
                                disabled: n.value,
                              },
                              "\u521B\u5EFA",
                              8,
                              Nu
                            ),
                          ]),
                        ],
                        40,
                        Fu
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        );
      },
    });
  var qu = S(ju, [["__scopeId", "data-v-0a9d9cdc"]]),
    Ru = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        qu,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    };
  const zt = (e) => (O("data-v-787be626"), (e = e()), N(), e),
    Gu = ["onSubmit"],
    Vu = zt(() =>
      t(
        "div",
        { class: "action-header" },
        [
          t(
            "div",
            { class: "action-header_title" },
            "Samba\u5171\u4EAB\u914D\u7F6E"
          ),
        ],
        -1
      )
    ),
    Uu = { class: "action-body" },
    Wu = { class: "label-item" },
    Zu = zt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u670D\u52A1\u76EE\u5F55\u8DEF\u5F84")],
        -1
      )
    ),
    Hu = { class: "label-item_value" },
    Ju = ["value"],
    Ku = { class: "label-item" },
    Xu = zt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [
          t(
            "span",
            null,
            "\u5171\u4EAB\u540D\uFF08\u5EFA\u8BAE\u4F7F\u7528\u82F1\u6587\u5B57\u6BCD\uFF09"
          ),
        ],
        -1
      )
    ),
    Qu = { class: "label-item_value" },
    tl = { class: "label-item" },
    el = zt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u7528\u6237\u540D")],
        -1
      )
    ),
    al = { class: "label-item_value" },
    ol = { class: "label-item" },
    nl = zt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u5BC6\u7801")],
        -1
      )
    ),
    il = { class: "label-item_value" },
    rl = { class: "samba-item" },
    sl = { class: "samba-item_allow" },
    dl = zt(() =>
      t(
        "label",
        { for: "allow", class: "samba-allow" },
        "\u5141\u8BB8\u65E7\u534F\u8BAE\u4E0E\u8EAB\u4EFD\u9A8C\u8BC1(\u4E0D\u5B89\u5168)",
        -1
      )
    ),
    cl = { class: "samba-item_tips" },
    ul = { class: "tooltip-trigger" },
    ll = { class: "samba_tip" },
    pl = zt(() =>
      t(
        "span",
        { class: "samba_dir_tip" },
        "\u517C\u5BB9\u4E00\u4E9B\u7535\u89C6\u6216\u8005\u7535\u89C6\u76D2\u5B50",
        -1
      )
    ),
    fl = { class: "action-footer" },
    ml = zt(() => t("div", { class: "auto" }, null, -1)),
    vl = ["disabled"],
    bl = ["disabled"],
    gl = T({
      props: { rootPath: { type: String, required: !0 }, Close: Function },
      setup(e) {
        const a = e,
          o = (f) => {
            f.preventDefault(), a.Close && a.Close();
          },
          n = F(!1),
          s = F({
            shareName: "",
            username: "",
            password: "",
            rootPath: a.rootPath,
            allowLegacy: !1,
          }),
          m = () => {
            const f = s.value;
            if (f.rootPath == "") {
              x.Warning("\u5171\u4EAB\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A");
              return;
            }
            if (f.shareName == "") {
              x.Warning("\u5171\u4EAB\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A");
              return;
            }
            if (f.username == "") {
              x.Warning("\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A");
              return;
            }
            if (f.password == "") {
              x.Warning("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");
              return;
            }
            const u = Ut.checkSmabaUserName(f.username);
            if (u !== !0) {
              x.Warning(`${u}`);
              return;
            }
            b(f);
          },
          b = (f) =>
            A(this, null, function* () {
              n.value = !0;
              const u = x.Loading("\u521B\u5EFA\u4E2D...");
              try {
                const c = yield Y.Nas.Samba.Create.POST(f);
                if (c != null && c.data) {
                  const { error: d, result: v } = c.data;
                  d && x.Warning(d),
                    v &&
                      (x.Success("\u521B\u5EFA\u6210\u529F"),
                      window.setTimeout(() => {
                        location.reload();
                      }, 1e3));
                }
              } catch (c) {
                x.Error(c);
              }
              u.Close(), (n.value = !1);
            });
        return (f, u) => (
          i(),
          M(
            ot,
            { type: 1 },
            {
              default: q(() => [
                z(
                  xt,
                  { name: "rotate", mode: "out-in" },
                  {
                    default: q(() => [
                      t(
                        "form",
                        { class: "action", onSubmit: it(m, ["prevent"]) },
                        [
                          Vu,
                          t("div", Uu, [
                            t("div", Wu, [
                              Zu,
                              t("div", Hu, [
                                t(
                                  "input",
                                  {
                                    type: "text",
                                    value: s.value.rootPath,
                                    disabled: "",
                                    required: "",
                                    style: { backgroundColor: "#eee" },
                                  },
                                  null,
                                  8,
                                  Ju
                                ),
                              ]),
                            ]),
                            t("div", Ku, [
                              Xu,
                              t("div", Qu, [
                                P(
                                  t(
                                    "input",
                                    {
                                      type: "text",
                                      "onUpdate:modelValue":
                                        u[0] ||
                                        (u[0] = (c) => (s.value.shareName = c)),
                                      required: "",
                                      placeholder: "\u5171\u4EAB\u540D\u79F0",
                                    },
                                    null,
                                    512
                                  ),
                                  [[J, s.value.shareName, void 0, { trim: !0 }]]
                                ),
                              ]),
                            ]),
                            t("div", tl, [
                              el,
                              t("div", al, [
                                P(
                                  t(
                                    "input",
                                    {
                                      type: "text",
                                      required: "",
                                      placeholder:
                                        "\u8D26\u53F7\u7528\u6237\u540D",
                                      "onUpdate:modelValue":
                                        u[1] ||
                                        (u[1] = (c) => (s.value.username = c)),
                                    },
                                    null,
                                    512
                                  ),
                                  [[J, s.value.username, void 0, { trim: !0 }]]
                                ),
                              ]),
                            ]),
                            t("div", ol, [
                              nl,
                              t("div", il, [
                                P(
                                  t(
                                    "input",
                                    {
                                      type: "password",
                                      "onUpdate:modelValue":
                                        u[2] ||
                                        (u[2] = (c) => (s.value.password = c)),
                                    },
                                    null,
                                    512
                                  ),
                                  [[J, s.value.password, void 0, { trim: !0 }]]
                                ),
                              ]),
                            ]),
                            t("div", rl, [
                              t("div", sl, [
                                P(
                                  t(
                                    "input",
                                    {
                                      type: "checkbox",
                                      id: "allow",
                                      "onUpdate:modelValue":
                                        u[3] ||
                                        (u[3] = (c) =>
                                          (s.value.allowLegacy = c)),
                                    },
                                    null,
                                    512
                                  ),
                                  [[Vt, s.value.allowLegacy]]
                                ),
                                dl,
                              ]),
                              t("div", cl, [
                                t("span", ul, [t("span", ll, [z(ht)]), pl]),
                              ]),
                            ]),
                          ]),
                          t("div", fl, [
                            ml,
                            t(
                              "button",
                              {
                                class:
                                  "cbi-button cbi-button-remove app-btn app-back",
                                type: "button",
                                onClick: o,
                                disabled: n.value,
                              },
                              "\u5173\u95ED",
                              8,
                              vl
                            ),
                            t(
                              "button",
                              {
                                class:
                                  "cbi-button cbi-button-apply app-btn app-next",
                                disabled: n.value,
                              },
                              "\u521B\u5EFA",
                              8,
                              bl
                            ),
                          ]),
                        ],
                        40,
                        Gu
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        );
      },
    });
  var _l = S(gl, [["__scopeId", "data-v-787be626"]]),
    hl = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        _l,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    };
  const ae = (e) => (O("data-v-2d5045f6"), (e = e()), N(), e),
    xl = { key: 0, class: "action" },
    kl = ae(() =>
      t(
        "h2",
        { class: "title" },
        "\u6B22\u8FCE\u4F7F\u7528 NAS \u914D\u7F6E\u5411\u5BFC",
        -1
      )
    ),
    wl = ae(() =>
      t(
        "h3",
        { class: "desc" },
        "\u8BF7\u9009\u62E9\u9700\u8981\u6DFB\u52A0\u7684NAS\u670D\u52A1",
        -1
      )
    ),
    yl = ae(() =>
      t(
        "option",
        { value: "linkease" },
        "\u8DE8\u8BBE\u5907\u5171\u4EAB\uFF08\u6613\u6709\u4E91\uFF09",
        -1
      )
    ),
    Fl = ae(() =>
      t(
        "option",
        { value: "samba" },
        "\u5C40\u57DF\u7F51\u6587\u4EF6\u5171\u4EAB\uFF08Samba\uFF09",
        -1
      )
    ),
    Cl = ae(() =>
      t(
        "option",
        { value: "webdav" },
        "\u5C40\u57DF\u7F51\u6587\u4EF6\u5171\u4EAB\uFF08Webdav\uFF09",
        -1
      )
    ),
    El = [yl, Fl, Cl],
    $l = { class: "btns" },
    Dl = ["disabled"],
    Bl = T({
      props: { setup: Number, Close: { type: Function, required: !0 } },
      setup(e) {
        const a = e,
          o = F(!0),
          n = F("linkease"),
          s = F(!1),
          m = F(a.setup || 0),
          b = () => {
            a.Close && a.Close();
          },
          f = () =>
            A(this, null, function* () {
              switch (n.value) {
                case "webdav":
                  yield u();
                  break;
                case "samba":
                  yield d();
                  break;
                case "linkease":
                  yield c();
                  break;
              }
            }),
          u = () =>
            A(this, null, function* () {
              s.value = !0;
              const g = x.Loading("\u914D\u7F6E\u4E2D...");
              try {
                const w = yield Y.App.Check.POST({ name: "gowebdav" });
                if ((g.Close(), w != null && w.data)) {
                  const { result: E, error: C } = w.data;
                  if ((C && x.Warning(C), E)) {
                    if (E.status == "installed") {
                      l();
                      return;
                    }
                    if (
                      confirm(
                        "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5 GoWebdav \u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                      )
                    ) {
                      const B = x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D..."),
                        D = yield v("app-meta-gowebdav");
                      B.Close(),
                        D ? l() : x.Warning("\u5B89\u88C5\u5931\u8D25");
                    }
                  }
                }
              } catch (w) {
                x.Error(w);
              }
              g.Close(), (s.value = !1);
            }),
          c = () =>
            A(this, null, function* () {
              s.value = !0;
              const g = x.Loading("\u914D\u7F6E\u4E2D...");
              try {
                const w = yield Y.App.Check.POST({ name: "linkease" });
                if ((g.Close(), w != null && w.data)) {
                  const { result: E, error: C } = w.data;
                  if ((C && x.Warning(C), E)) {
                    if (E.status == "installed") {
                      _();
                      return;
                    }
                    if (
                      confirm(
                        "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5 \u6613\u6709\u4E91 \u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                      )
                    ) {
                      const B = x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D..."),
                        D = yield v("app-meta-linkease");
                      B.Close(),
                        D ? _() : x.Warning("\u5B89\u88C5\u5931\u8D25");
                    }
                  }
                }
              } catch (w) {
                x.Error(w);
              }
              g.Close(), (s.value = !1);
            }),
          d = () =>
            A(this, null, function* () {
              s.value = !0;
              const g = x.Loading("\u914D\u7F6E\u4E2D...");
              l(), g.Close(), (s.value = !1);
            }),
          v = (g) =>
            A(this, null, function* () {
              return (
                Y.App.Install.POST({ name: g }).then(() => {}),
                new Promise((w, E) =>
                  A(this, null, function* () {
                    let C = 0;
                    const B = setInterval(
                      () =>
                        A(this, null, function* () {
                          if (C > 10) {
                            clearInterval(B), E(!1);
                            return;
                          }
                          const D = yield Y.App.Check.POST({ name: g });
                          if (D != null && D.data) {
                            const { result: j } = D.data;
                            if (
                              (j == null ? void 0 : j.status) == "installed"
                            ) {
                              clearInterval(B), w(!0);
                              return;
                            }
                          }
                          C++;
                        }),
                      3e3
                    );
                  })
                )
              );
            }),
          l = () => {
            (s.value = !1),
              (o.value = !1),
              pu({
                Cancel: () => {
                  o.value = !0;
                },
                Next: (g) => {
                  switch (n.value) {
                    case "webdav":
                      p(g);
                      break;
                    case "samba":
                      h(g);
                      break;
                  }
                },
              });
          },
          _ = () => {
            yu({}), b();
          },
          p = (g) => {
            Ru({ rootPath: g }), b();
          },
          h = (g) => {
            hl({ rootPath: g }), b();
          };
        return (g, w) =>
          o.value
            ? (i(),
              M(
                ot,
                { key: 0, Close: e.Close, type: 1 },
                {
                  default: q(() => [
                    z(
                      xt,
                      { name: "rotate", mode: "out-in" },
                      {
                        default: q(() => [
                          m.value == 0
                            ? (i(),
                              r("div", xl, [
                                kl,
                                wl,
                                t("form", null, [
                                  t("label", null, [
                                    P(
                                      t(
                                        "select",
                                        {
                                          "onUpdate:modelValue":
                                            w[0] ||
                                            (w[0] = (E) => (n.value = E)),
                                        },
                                        El,
                                        512
                                      ),
                                      [[Q, n.value]]
                                    ),
                                  ]),
                                ]),
                                t("div", $l, [
                                  t(
                                    "button",
                                    {
                                      class:
                                        "cbi-button cbi-button-apply app-btn app-next",
                                      onClick: f,
                                      type: "button",
                                      disabled: s.value,
                                    },
                                    "\u4E0B\u4E00\u6B65",
                                    8,
                                    Dl
                                  ),
                                  t(
                                    "button",
                                    {
                                      class:
                                        "cbi-button cbi-button-remove app-btn app-back",
                                      onClick: b,
                                      type: "button",
                                    },
                                    "\u53D6\u6D88"
                                  ),
                                ]),
                              ]))
                            : $("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["Close"]
              ))
            : $("", !0);
      },
    });
  var Yl = S(Bl, [["__scopeId", "data-v-2d5045f6"]]),
    ua = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        Yl,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    };
  const Te = (e) => (O("data-v-1e2aa147"), (e = e()), N(), e),
    Al = { class: "app-container_linkease" },
    Sl = { class: "linkease-item" },
    zl = Te(() =>
      t(
        "div",
        { class: "linkease-item_name" },
        [t("span", null, "\u5F53\u524D\u72B6\u6001:")],
        -1
      )
    ),
    Pl = { class: "linkease-item_value" },
    Tl = { key: 0, class: "configure" },
    Il = { key: 0, class: "linkease-item" },
    Ll = Te(() =>
      t(
        "div",
        { class: "linkease-item_name" },
        [t("span", null, "\u670D\u52A1\u5730\u5740:")],
        -1
      )
    ),
    Ml = { class: "linkease-item_value" },
    Ol = ["href"],
    Nl = Te(() =>
      t(
        "div",
        null,
        [
          t(
            "a",
            { href: " https://app.linkease.com/", target: "_blank" },
            "\u4E0B\u8F7D\u6613\u6709\u4E91\u5BA2\u6237\u7AEF\uFF0C\u968F\u65F6\u968F\u5730\u76F8\u518C\u5907\u4EFD\u3001\u8FDC\u7A0B\u8BBF\u95EE"
          ),
        ],
        -1
      )
    ),
    jl = T({
      props: { linkease: { type: Object } },
      setup(e) {
        const a = e,
          o = H(() => {
            var s;
            return `http://${location.hostname}:${
              (s = a.linkease) == null ? void 0 : s.port
            }`;
          }),
          n = () => {
            ua({ setup: 0 });
          };
        return (s, m) => {
          var b, f, u;
          return (
            i(),
            r("ul", Al, [
              t("li", Sl, [
                zl,
                t("div", Pl, [
                  (b = e.linkease) != null && b.enabel
                    ? (i(), r("span", Tl, "\u5DF2\u914D\u7F6E"))
                    : (i(),
                      r(
                        "span",
                        {
                          key: 1,
                          class: "configure enabel",
                          onClick: m[0] || (m[0] = (c) => n()),
                        },
                        "\u672A\u914D\u7F6E"
                      )),
                ]),
              ]),
              (f = e.linkease) != null && f.enabel
                ? (i(),
                  r(
                    L,
                    { key: 0 },
                    [
                      (u = e.linkease) != null && u.port
                        ? (i(),
                          r("li", Il, [
                            Ll,
                            t("div", Ml, [
                              t(
                                "a",
                                {
                                  href: y(o),
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                },
                                k(y(o)),
                                9,
                                Ol
                              ),
                            ]),
                          ]))
                        : $("", !0),
                    ],
                    64
                  ))
                : $("", !0),
              Nl,
            ])
          );
        };
      },
    });
  var ql = S(jl, [["__scopeId", "data-v-1e2aa147"]]);
  const la = (e) => (O("data-v-27f32ae7"), (e = e()), N(), e),
    Rl = { class: "app-container" },
    Gl = { class: "app-container_title" },
    Vl = la(() =>
      t("span", null, [t("span", null, "\u5B58\u50A8\u670D\u52A1")], -1)
    ),
    Ul = { class: "app-container_tool" },
    Wl = {
      class: "more_icon",
      title: "\u67E5\u770B\u5B58\u50A8\u670D\u52A1\u4FE1\u606F",
    },
    Zl = { class: "DeviceBlock" },
    Hl = la(() =>
      t(
        "li",
        null,
        [
          t(
            "a",
            { href: "/cgi-bin/luci/admin/services/samba4" },
            "SAMBA\u9AD8\u7EA7\u914D\u7F6E"
          ),
        ],
        -1
      )
    ),
    Jl = { class: "app-container_body" },
    Kl = { class: "app-container_nas-menu" },
    Xl = T({
      setup(e) {
        const a = F(!1),
          o = F("linkease"),
          n = F(),
          s = Qe();
        (() => {
          Y.Nas.Service.Status.GET().then((d) => {
            var v;
            if ((v = d == null ? void 0 : d.data) != null && v.result) {
              const l = d.data.result;
              (n.value = l), l.webdav && (s.webdav = l.webdav);
            }
          });
        })();
        const b = () => {
            ua({ setup: 0 });
          },
          f = () => {
            a.value = !a.value;
          },
          u = () => {
            f(),
              (() =>
                A(this, null, function* () {
                  let v = x.Loading("");
                  try {
                    const l = yield Y.App.Check.POST({
                      name: "app-meta-gowebdav",
                    });
                    if ((v.Close(), l != null && l.data)) {
                      const { result: _, error: p } = l.data;
                      if ((p && x.Warning(p), _)) {
                        if (_.status == "installed")
                          location.href = "/cgi-bin/luci/admin/nas/gowebdav";
                        else if (
                          confirm(
                            "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5GoWebDAV\u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                          )
                        ) {
                          v = x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D...");
                          const h = yield c("app-meta-gowebdav");
                          v.Close(),
                            h
                              ? (x.Success("\u5B89\u88C5\u6210\u529F"),
                                (location.href =
                                  "/cgi-bin/luci/admin/nas/gowebdav"))
                              : x.Warning("\u5B89\u88C5\u5931\u8D25");
                        }
                      }
                    }
                  } catch (l) {
                    x.Error(l);
                  }
                  v.Close();
                }))();
          },
          c = (d) =>
            A(this, null, function* () {
              return (
                Y.App.Install.POST({ name: d }).then(() => {}),
                new Promise((v, l) =>
                  A(this, null, function* () {
                    let _ = 0;
                    const p = setInterval(
                      () =>
                        A(this, null, function* () {
                          if (_ > 20) {
                            clearInterval(p), l(!1);
                            return;
                          }
                          const h = yield Y.App.Check.POST({ name: d });
                          if (h != null && h.data) {
                            const { result: g } = h.data;
                            if (
                              (g == null ? void 0 : g.status) == "installed"
                            ) {
                              clearInterval(p), v(!0);
                              return;
                            }
                          }
                          _++;
                        }),
                      3e3
                    );
                  })
                )
              );
            });
        return (d, v) => {
          var l, _, p;
          return (
            i(),
            r("div", Rl, [
              t("div", Gl, [
                Vl,
                t("div", Ul, [
                  t(
                    "div",
                    { class: "app-container_configure", onClick: b },
                    "\u5FEB\u901F\u914D\u7F6E"
                  ),
                  t("span", Wl, [z(Yt, { onClick: f })]),
                ]),
                P(
                  t(
                    "div",
                    Zl,
                    [
                      t("div", { class: "menu_background", onClick: f }),
                      t("ul", null, [
                        Hl,
                        t("li", null, [
                          t(
                            "a",
                            { onClick: u },
                            "WebDAV\u9AD8\u7EA7\u914D\u7F6E"
                          ),
                        ]),
                      ]),
                    ],
                    512
                  ),
                  [[Ft, a.value]]
                ),
              ]),
              t("div", Jl, [
                t("ul", Kl, [
                  t(
                    "button",
                    {
                      onClick: v[0] || (v[0] = (h) => (o.value = "linkease")),
                      class: ct({ on: o.value == "linkease" }),
                    },
                    "\u6613\u6709\u4E91",
                    2
                  ),
                  t(
                    "button",
                    {
                      onClick: v[1] || (v[1] = (h) => (o.value = "samba")),
                      class: ct({ on: o.value == "samba" }),
                    },
                    "SAMBA",
                    2
                  ),
                  t(
                    "button",
                    {
                      onClick: v[2] || (v[2] = (h) => (o.value = "webdav")),
                      class: ct({ on: o.value == "webdav" }),
                    },
                    "WEBDAV",
                    2
                  ),
                ]),
                o.value == "samba"
                  ? (i(),
                    M(
                      Bc,
                      {
                        key: 0,
                        sambas: (l = n.value) == null ? void 0 : l.sambas,
                      },
                      null,
                      8,
                      ["sambas"]
                    ))
                  : o.value == "webdav"
                  ? (i(),
                    M(
                      Gc,
                      {
                        key: 1,
                        webdav: (_ = n.value) == null ? void 0 : _.webdav,
                      },
                      null,
                      8,
                      ["webdav"]
                    ))
                  : o.value == "linkease"
                  ? (i(),
                    M(
                      ql,
                      {
                        key: 2,
                        linkease: (p = n.value) == null ? void 0 : p.linkease,
                      },
                      null,
                      8,
                      ["linkease"]
                    ))
                  : $("", !0),
              ]),
            ])
          );
        };
      },
    });
  var Ql = S(Xl, [["__scopeId", "data-v-27f32ae7"]]);
  const ge = (e) => (O("data-v-6cdca750"), (e = e()), N(), e),
    t2 = { class: "app-container_docker" },
    e2 = { class: "docker-item" },
    a2 = ge(() =>
      t(
        "div",
        { class: "docker-item_name" },
        [t("span", null, "\u5F53\u524D\u72B6\u6001:")],
        -1
      )
    ),
    o2 = { key: 0, class: "docker-item_value" },
    n2 = ge(() => t("span", { class: "configure" }, "\u672A\u5B89\u88C5", -1)),
    i2 = [n2],
    r2 = { key: 1, class: "docker-item_value" },
    s2 = { class: "input-switch" },
    d2 = ["value", "disabled"],
    c2 = ge(() => t("em", null, null, -1)),
    u2 = [c2],
    l2 = { key: 0, class: "docker-item" },
    p2 = ge(() =>
      t(
        "div",
        { class: "docker-item_name" },
        [t("span", null, "Docker\u6839\u76EE\u5F55\uFF1A")],
        -1
      )
    ),
    f2 = { class: "docker-item_value" },
    m2 = { class: "configure enabel" },
    v2 = { key: 0 },
    b2 = { class: "tooltip-trigger" },
    g2 = { class: "docker_tip" },
    _2 = { class: "tooltip-text tooltip-top" },
    h2 = { class: "docker_dir_tip" },
    x2 = T({
      props: { docker: { type: Object } },
      setup(e) {
        var m;
        const a = e,
          o = H(() => {
            var b;
            return (
              ((b = a.docker) == null ? void 0 : b.status) != "not installed"
            );
          }),
          n = rt({
            enable: ((m = a.docker) == null ? void 0 : m.status) == "running",
            disabled: !1,
          }),
          s = () =>
            A(this, null, function* () {
              n.disabled = !0;
              try {
                const b = yield Y.Guide.DockerSwitch.POST({ enable: n.enable });
                if (b != null && b.data) {
                  const { success: f, error: u } = b.data;
                  if (u) throw ((n.enable = !n.enable), u);
                  (f || 0) == 0;
                }
              } catch (b) {
                x.Error(`${b}`);
              } finally {
                n.disabled = !1;
              }
            });
        return (b, f) => {
          var u, c, d, v;
          return (
            i(),
            r("ul", t2, [
              t("li", e2, [
                a2,
                (u = a.docker) != null && u.status
                  ? (i(),
                    r(
                      L,
                      { key: 0 },
                      [
                        y(o)
                          ? (i(),
                            r("div", r2, [
                              t("label", s2, [
                                P(
                                  t(
                                    "input",
                                    {
                                      type: "checkbox",
                                      hidden: "",
                                      value: !y(n).enable,
                                      "onUpdate:modelValue":
                                        f[0] ||
                                        (f[0] = (l) => (y(n).enable = l)),
                                      disabled: y(n).disabled,
                                      onChange: s,
                                    },
                                    null,
                                    40,
                                    d2
                                  ),
                                  [[Vt, y(n).enable]]
                                ),
                                t(
                                  "span",
                                  {
                                    class: ct(y(n).enable ? "enable" : "close"),
                                  },
                                  u2,
                                  2
                                ),
                              ]),
                            ]))
                          : (i(), r("div", o2, i2)),
                      ],
                      64
                    ))
                  : $("", !0),
              ]),
              ((c = e.docker) == null ? void 0 : c.status) == "running"
                ? (i(),
                  r("li", l2, [
                    p2,
                    t("div", f2, [
                      t(
                        "span",
                        m2,
                        k((d = e.docker) == null ? void 0 : d.path),
                        1
                      ),
                      (v = e.docker) != null && v.errorInfo
                        ? (i(),
                          r("span", v2, [
                            t("span", b2, [
                              t("span", g2, [z(ht)]),
                              t("div", null, [
                                t("div", _2, [
                                  t("span", h2, k(e.docker.errorInfo), 1),
                                ]),
                              ]),
                            ]),
                          ]))
                        : $("", !0),
                    ]),
                  ]))
                : $("", !0),
            ])
          );
        };
      },
    });
  var k2 = S(x2, [["__scopeId", "data-v-6cdca750"]]);
  const w2 = {},
    y2 = {
      width: "128px",
      height: "128px",
      viewBox: "0 0 128 128",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
    },
    F2 = t(
      "g",
      {
        id: "icon_yellow",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd",
      },
      [
        t("g", { id: "Icon/Warning" }, [
          t("rect", {
            id: "\u77E9\u5F62",
            fill: "#000000",
            "fill-rule": "nonzero",
            opacity: "0",
            x: "0",
            y: "0",
            width: "128",
            height: "128",
          }),
          t("path", {
            d: "M64,8 C33.075,8 8,33.075 8,64 C8,94.925 33.075,120 64,120 C94.925,120 120,94.925 120,64 C120,33.075 94.925,8 64,8 Z M60,37 C60,36.45 60.45,36 61,36 L67,36 C67.55,36 68,36.45 68,37 L68,71 C68,71.55 67.55,72 67,72 L61,72 C60.45,72 60,71.55 60,71 L60,37 Z M64,92 C60.6875,92 58,89.3125 58,86 C58,82.6875 60.6875,80 64,80 C67.3125,80 70,82.6875 70,86 C70,89.3125 67.3125,92 64,92 Z",
            id: "\u5F62\u72B6",
            fill: "#FAAD14",
          }),
        ]),
      ],
      -1
    ),
    C2 = [F2];
  function E2(e, a) {
    return i(), r("svg", y2, C2);
  }
  var $2 = S(w2, [["render", E2]]);
  const ft = (e) => (O("data-v-0580f817"), (e = e()), N(), e),
    D2 = { key: 0, class: "action" },
    B2 = ft(() =>
      t("h2", { class: "title" }, "Docker\u8FC1\u79FB\u5411\u5BFC", -1)
    ),
    Y2 = ft(() =>
      t(
        "p",
        { class: "desc" },
        "\u5F53\u7CFB\u7EDF\u6839\u76EE\u5F55\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u53EF\u5C06docker\u6839\u76EE\u5F55\u8FC1\u79FB\u5230\u5916\u7F6E\u786C\u76D8\uFF0C\u4EE5\u4FDD\u8BC1\u7CFB\u7EDF\u7684\u6B63\u5E38\u8FD0\u884C:",
        -1
      )
    ),
    A2 = { key: 1, class: "action" },
    S2 = ft(() =>
      t("h2", { class: "title" }, "Docker\u8FC1\u79FB\u5411\u5BFC", -1)
    ),
    z2 = ft(() =>
      t(
        "p",
        { class: "desc" },
        "\u5F53\u7CFB\u7EDF\u6839\u76EE\u5F55\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u53EF\u5C06docker\u6839\u76EE\u5F55\u8FC1\u79FB\u5230\u5916\u7F6E\u786C\u76D8\uFF0C\u4EE5\u4FDD\u8BC1\u7CFB\u7EDF\u7684\u6B63\u5E38\u8FD0\u884C:",
        -1
      )
    ),
    P2 = { class: "roots" },
    T2 = ft(() =>
      t("span", { class: "roots_tit" }, "Docker\u6839\u76EE\u5F55\uFF1A", -1)
    ),
    I2 = { class: "root" },
    L2 = { class: "move" },
    M2 = ft(() =>
      t("span", { class: "roots_tit" }, "\u8FC1\u79FB\u5230\uFF1A", -1)
    ),
    O2 = { key: 0 },
    N2 = ["onSubmit"],
    j2 = { class: "select-editable" },
    q2 = ft(() =>
      t(
        "option",
        { selected: "", value: null },
        "\u8BF7\u9009\u62E9\u8FC1\u79FB\u5730\u5740",
        -1
      )
    ),
    R2 = ["value"],
    G2 = ft(() =>
      t("option", { value: "useInput" }, "- -\u81EA\u5B9A\u4E49- -", -1)
    ),
    V2 = { key: 1, class: "tips" },
    U2 = { class: "tips_content" },
    W2 = ft(() =>
      t(
        "span",
        { class: "tip" },
        "\u68C0\u6D4B\u5230\u60A8\u8FD8\u6CA1\u6709\u6302\u8F7D\u5916\u7F6E\u786C\u76D8\uFF0C\u9700\u8981\u60A8\u63A5\u4E0A\u786C\u76D8\u5E76\u683C\u5F0F\u5316\u6216\u624B\u52A8\u6302\u8F7D\u786C\u76D8\u540E\uFF0C\u518D\u6267\u884CDocker\u8FC1\u79FB\u5411\u5BFC\uFF0C\u5C06Docker\u8FC1\u79FB\u5230\u76EE\u6807\u786C\u76D8\u3002",
        -1
      )
    ),
    Z2 = { key: 0, class: "btns" },
    H2 = { key: 1, class: "btns" },
    J2 = { key: 2, class: "action docker_success" },
    K2 = ft(() =>
      t("h2", { class: "title" }, "Docker\u8FC1\u79FB\u5411\u5BFC", -1)
    ),
    X2 = { class: "finished" },
    Q2 = ft(() =>
      t("p", { class: "successed" }, "\u8FC1\u79FB\u6210\u529F\uFF01", -1)
    ),
    t5 = { key: 3, class: "action docker_download" },
    e5 = ft(() =>
      t("h2", { class: "title" }, "Docker\u8FC1\u79FB\u5411\u5BFC", -1)
    ),
    a5 = { class: "finished" },
    o5 = ft(() =>
      t(
        "p",
        { class: "successed" },
        "\u8BE5\u76EE\u6807\u8DEF\u5F84\u4E0D\u4E3A\u7A7A",
        -1
      )
    ),
    n5 = { class: "docker_moves" },
    i5 = { class: "moves change" },
    r5 = ft(() =>
      t(
        "label",
        { for: "move" },
        "\u66F4\u6362\u76EE\u5F55\uFF08\u4E0D\u8986\u76D6\u76EE\u6807\u8DEF\u5F84\uFF0C\u4EC5\u5C06docker\u76EE\u5F55\u4FEE\u6539\u4E3A\u76EE\u6807\u8DEF\u5F84\uFF09",
        -1
      )
    ),
    s5 = { class: "moves" },
    d5 = ft(() =>
      t(
        "label",
        { for: "cover" },
        "\u8986\u76D6\u8FC1\u79FB\uFF08\u8986\u76D6\u76EE\u6807\u8DEF\u5F84\uFF0C\u7EE7\u7EED\u8FC1\u79FB\u4F1A\u6E05\u7A7A\u8BE5\u76EE\u6807\u8DEF\u5F84\u4E0B\u7684\u6587\u4EF6\uFF09",
        -1
      )
    ),
    c5 = { class: "btns" },
    u5 = T({
      props: { rootPath: { type: String, required: !0 }, Close: Function },
      setup(e) {
        const a = e,
          o = F(),
          n = F(),
          s = F(0),
          m = F("null"),
          b = F(""),
          f = F(),
          u = F(!1),
          c = F("");
        (() => {
          Y.Nas.Disk.Status.GET().then((w) => {
            w != null &&
              w.data.result &&
              (f.value = w == null ? void 0 : w.data.result);
          }),
            Y.Guide.DockerStatus.GET().then((w) => {
              var E;
              if ((E = w == null ? void 0 : w.data) != null && E.result) {
                const C = w.data.result;
                o.value = C;
              }
            }),
            Y.Guide.DockerPartitionList.GET().then((w) => {
              var E;
              if ((E = w == null ? void 0 : w.data) != null && E.result) {
                const C = w.data.result;
                n.value = C;
              }
            });
        })();
        const v = (w) => {
            let E = m.value;
            if (
              (E == "useInput" && (E = b.value),
              E == null || E == "null" || E == "")
            )
              return;
            const C = x.Loading("\u6B63\u5728\u8FC1\u79FB\u4E2D...");
            Y.Guide.DockerTransfer.POST({
              path: E,
              force: w,
              overwriteDir: !!c.value,
            })
              .then((B) => {
                var D;
                if (B != null && B.data) {
                  if ((B.data.success || 0) == 0) {
                    if ((D = B.data.result) != null && D.emptyPathWarning) {
                      (u.value = !0), (s.value = 2);
                      return;
                    }
                    s.value = 1;
                    return;
                  } else if (B.data.error) throw B.data.error;
                }
                throw "\u672A\u77E5\u9519\u8BEF";
              })
              .catch((B) => {
                x.Error(B);
              })
              .finally(() => C.Close());
          },
          l = () => {
            (u.value = !1), v(!1);
          },
          _ = (w) => {
            w.preventDefault(), a.Close && a.Close();
          },
          p = (w) => {
            w.preventDefault(), location.reload();
          },
          h = (w) => {
            w.preventDefault(), (s.value = 0);
          },
          g = (w) => {
            w.preventDefault(), v(!0);
          };
        return (w, E) => (
          i(),
          M(
            ot,
            { Close: e.Close, type: 1 },
            {
              default: q(() => {
                var C, B, D, j, W, Z;
                return [
                  t("div", null, [
                    s.value == -1
                      ? (i(),
                        r("div", D2, [
                          B2,
                          Y2,
                          t("div", { class: "btns" }, [
                            t(
                              "button",
                              {
                                class:
                                  "cbi-button cbi-button-remove app-btn app-back",
                                type: "button",
                                onClick: _,
                              },
                              "\u53D6\u6D88"
                            ),
                          ]),
                        ]))
                      : s.value == 0
                      ? (i(),
                        r("div", A2, [
                          S2,
                          z2,
                          t("div", P2, [
                            T2,
                            t(
                              "span",
                              I2,
                              k((C = o.value) == null ? void 0 : C.path),
                              1
                            ),
                          ]),
                          t("div", L2, [
                            M2,
                            (D =
                              (B = n.value) == null
                                ? void 0
                                : B.partitionList) != null && D.length
                              ? (i(),
                                r("div", O2, [
                                  t(
                                    "form",
                                    { onSubmit: it(l, ["prevent"]) },
                                    [
                                      t("label", null, [
                                        t("div", j2, [
                                          P(
                                            t(
                                              "select",
                                              {
                                                "onUpdate:modelValue":
                                                  E[0] ||
                                                  (E[0] = (G) => (m.value = G)),
                                              },
                                              [
                                                q2,
                                                (i(!0),
                                                r(
                                                  L,
                                                  null,
                                                  V(
                                                    (j = n.value) == null
                                                      ? void 0
                                                      : j.partitionList,
                                                    (G, R) => (
                                                      i(),
                                                      r(
                                                        "option",
                                                        { value: G, key: R },
                                                        k(G),
                                                        9,
                                                        R2
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                                G2,
                                              ],
                                              512
                                            ),
                                            [[Q, m.value, void 0, { trim: !0 }]]
                                          ),
                                          m.value == "useInput"
                                            ? P(
                                                (i(),
                                                r(
                                                  "input",
                                                  {
                                                    key: 0,
                                                    type: "text",
                                                    "onUpdate:modelValue":
                                                      E[1] ||
                                                      (E[1] = (G) =>
                                                        (b.value = G)),
                                                    required: "",
                                                    placeholder:
                                                      "\u8BF7\u8F93\u5165\u8FC1\u79FB\u5730\u5740",
                                                  },
                                                  null,
                                                  512
                                                )),
                                                [
                                                  [
                                                    J,
                                                    b.value,
                                                    void 0,
                                                    { trim: !0 },
                                                  ],
                                                ]
                                              )
                                            : $("", !0),
                                        ]),
                                      ]),
                                    ],
                                    40,
                                    N2
                                  ),
                                ]))
                              : n.value
                              ? (i(), r("div", V2, [t("div", U2, [z(ht), W2])]))
                              : $("", !0),
                          ]),
                          (Z =
                            (W = n.value) == null ? void 0 : W.partitionList) !=
                            null && Z.length
                            ? (i(),
                              r("div", Z2, [
                                t(
                                  "button",
                                  {
                                    class: "cbi-button cbi-button-apply",
                                    onClick: l,
                                  },
                                  "\u786E\u5B9A"
                                ),
                                t(
                                  "button",
                                  {
                                    class:
                                      "cbi-button cbi-button-remove app-btn app-back",
                                    type: "button",
                                    onClick: _,
                                  },
                                  "\u53D6\u6D88"
                                ),
                              ]))
                            : (i(),
                              r("div", H2, [
                                t(
                                  "button",
                                  {
                                    class: "cbi-button cbi-button-apply",
                                    onClick: _,
                                  },
                                  "\u786E\u5B9A"
                                ),
                              ])),
                        ]))
                      : s.value == 1
                      ? (i(),
                        r("div", J2, [
                          K2,
                          t("div", X2, [z(Ye)]),
                          Q2,
                          t("div", { class: "btns" }, [
                            t(
                              "button",
                              {
                                class: "cbi-button cbi-button-apply",
                                onClick: p,
                              },
                              "\u786E\u5B9A"
                            ),
                          ]),
                        ]))
                      : s.value == 2
                      ? (i(),
                        r("div", t5, [
                          e5,
                          t("div", a5, [z($2)]),
                          o5,
                          t("div", n5, [
                            t("div", i5, [
                              P(
                                t(
                                  "input",
                                  {
                                    type: "radio",
                                    id: "move",
                                    name: "moves",
                                    "onUpdate:modelValue":
                                      E[2] || (E[2] = (G) => (c.value = G)),
                                    value: "",
                                  },
                                  null,
                                  512
                                ),
                                [[bt, c.value]]
                              ),
                              r5,
                            ]),
                            t("div", s5, [
                              P(
                                t(
                                  "input",
                                  {
                                    type: "radio",
                                    id: "cover",
                                    name: "moves",
                                    "onUpdate:modelValue":
                                      E[3] || (E[3] = (G) => (c.value = G)),
                                    value: "true",
                                  },
                                  null,
                                  512
                                ),
                                [[bt, c.value]]
                              ),
                              d5,
                            ]),
                          ]),
                          t("div", c5, [
                            u.value
                              ? (i(),
                                r(
                                  "button",
                                  {
                                    key: 0,
                                    class: "cbi-button cbi-button-apply",
                                    onClick: g,
                                  },
                                  "\u786E\u5B9A"
                                ))
                              : $("", !0),
                            t(
                              "button",
                              {
                                class: "cbi-button cbi-button-apply",
                                onClick: h,
                              },
                              "\u8FD4\u56DE"
                            ),
                            u.value
                              ? $("", !0)
                              : (i(),
                                r(
                                  "button",
                                  {
                                    key: 1,
                                    class:
                                      "cbi-button cbi-button-remove app-btn app-back",
                                    type: "button",
                                    onClick: p,
                                  },
                                  "\u53D6\u6D88"
                                )),
                          ]),
                        ]))
                      : $("", !0),
                  ]),
                ];
              }),
              _: 1,
            },
            8,
            ["Close"]
          )
        );
      },
    });
  var l5 = S(u5, [["__scopeId", "data-v-0580f817"]]);
  const p5 = () => {
      const e = document.createElement("div");
      document.body.appendChild(e);
      const a = tt(l5, {
        Close: () => {
          o();
        },
      });
      a.mount(e);
      const o = () => {
        a.unmount(), e.remove();
      };
      return { Close: o };
    },
    pa = (e) => (O("data-v-f6b0559e"), (e = e()), N(), e),
    f5 = { class: "app-container" },
    m5 = { class: "app-container_title" },
    v5 = pa(() => t("span", null, [t("span", null, "Docker")], -1)),
    b5 = { class: "app-container_tool" },
    g5 = {
      key: 1,
      class: "more_icon",
      title: "\u67E5\u770BDocker\u4FE1\u606F",
    },
    _5 = { class: "DeviceBlock" },
    h5 = pa(() =>
      t(
        "ul",
        null,
        [
          t("li", null, [
            t(
              "a",
              { href: "/cgi-bin/luci/admin/docker/overview" },
              "Docker\u9AD8\u7EA7\u914D\u7F6E"
            ),
          ]),
        ],
        -1
      )
    ),
    x5 = T({
      props: { docker: { type: Object } },
      setup(e) {
        const a = F(!1),
          o = F(),
          n = F(!1),
          s = () => {
            n.value = !n.value;
          },
          m = () => {
            p5();
          };
        return (
          (() => {
            Y.Guide.DockerStatus.GET()
              .then((f) => {
                var u;
                if ((u = f == null ? void 0 : f.data) != null && u.result) {
                  const c = f.data.result;
                  o.value = c;
                }
              })
              .finally(() => {
                a.value = !0;
              });
          })(),
          (f, u) => {
            var c, d;
            return (
              i(),
              r("div", f5, [
                t("div", m5, [
                  v5,
                  t("div", b5, [
                    ((c = o.value) == null ? void 0 : c.status) !=
                    "not installed"
                      ? (i(),
                        r(
                          "div",
                          {
                            key: 0,
                            class: "app-container_configure",
                            onClick: m,
                          },
                          "\u5FEB\u901F\u914D\u7F6E "
                        ))
                      : $("", !0),
                    ((d = o.value) == null ? void 0 : d.status) === "running"
                      ? (i(), r("span", g5, [z(Yt, { onClick: s })]))
                      : $("", !0),
                  ]),
                  P(
                    t(
                      "div",
                      _5,
                      [t("div", { class: "menu_background", onClick: s }), h5],
                      512
                    ),
                    [[Ft, n.value]]
                  ),
                ]),
                t("div", null, [
                  a.value
                    ? (i(),
                      M(k2, { key: 0, docker: o.value }, null, 8, ["docker"]))
                    : $("", !0),
                ]),
              ])
            );
          }
        );
      },
    });
  var k5 = S(x5, [["__scopeId", "data-v-f6b0559e"]]);
  const _e = (e) => (O("data-v-afbafa24"), (e = e()), N(), e),
    w5 = { class: "app-container_aria2" },
    y5 = { class: "aria2-item" },
    F5 = _e(() =>
      t(
        "div",
        { class: "aria2-item_name" },
        [t("span", null, "\u5F53\u524D\u72B6\u6001:")],
        -1
      )
    ),
    C5 = { class: "aria2-item_value" },
    E5 = { key: 0, class: "configure" },
    $5 = { key: 1, class: "configure enabel" },
    D5 = { class: "aria2-item" },
    B5 = _e(() =>
      t(
        "div",
        { class: "aria2-item_name" },
        [t("span", null, "\u4E0B\u8F7D\u5730\u5740:")],
        -1
      )
    ),
    Y5 = { class: "aria2-item_value" },
    A5 = { class: "aria2-item" },
    S5 = _e(() =>
      t(
        "div",
        { class: "aria2-item_name" },
        [t("span", null, "\u7F51\u7EDC\u5730\u5740:")],
        -1
      )
    ),
    z5 = { class: "aria2-item_value" },
    P5 = ["href"],
    T5 = _e(() =>
      t(
        "div",
        { class: "use-url_app" },
        [
          t(
            "a",
            {
              href: "https://doc.linkease.com/zh/guide/linkease_app/tutorial.html#%E8%BF%9C%E7%A8%8B%E4%B8%8B%E8%BD%BD",
              target: "_blank",
            },
            "\u4F7F\u7528\u6613\u6709\u4E91APP\uFF0C\u968F\u65F6\u968F\u5730\u8FDC\u7A0B\u4E0B\u8F7D"
          ),
        ],
        -1
      )
    ),
    I5 = T({
      props: { aria2: { type: Object } },
      setup(e) {
        const a = e,
          o = H(() => {
            var n;
            return `http://${location.host}${
              (n = a.aria2) == null ? void 0 : n.webPath
            }`;
          });
        return (n, s) => {
          var m, b, f;
          return (
            i(),
            r("ul", w5, [
              t("li", y5, [
                F5,
                t("div", C5, [
                  ((m = e.aria2) == null ? void 0 : m.status) == "running"
                    ? (i(), r("span", E5, "\u5DF2\u542F\u52A8"))
                    : (i(), r("span", $5, "\u672A\u542F\u52A8")),
                ]),
              ]),
              ((b = e.aria2) == null ? void 0 : b.status) == "running"
                ? (i(),
                  r(
                    L,
                    { key: 0 },
                    [
                      t("li", D5, [
                        B5,
                        t("div", Y5, [
                          t(
                            "span",
                            null,
                            k((f = e.aria2) == null ? void 0 : f.downloadPath),
                            1
                          ),
                        ]),
                      ]),
                      t("li", A5, [
                        S5,
                        t("div", z5, [
                          t(
                            "a",
                            {
                              href: y(o),
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                            k(y(o)),
                            9,
                            P5
                          ),
                        ]),
                      ]),
                    ],
                    64
                  ))
                : $("", !0),
              T5,
            ])
          );
        };
      },
    });
  var L5 = S(I5, [["__scopeId", "data-v-afbafa24"]]);
  const Ie = (e) => (O("data-v-4d4723c0"), (e = e()), N(), e),
    M5 = { class: "app-container_qbittorrent" },
    O5 = { class: "qbittorrent-item" },
    N5 = Ie(() =>
      t(
        "div",
        { class: "qbittorrent-item_name" },
        [t("span", null, "\u5F53\u524D\u72B6\u6001:")],
        -1
      )
    ),
    j5 = { class: "qbittorrent-item_value" },
    q5 = { key: 0, class: "configure" },
    R5 = { key: 1, class: "configure enabel" },
    G5 = { class: "qbittorrent-item" },
    V5 = Ie(() =>
      t(
        "div",
        { class: "qbittorrent-item_name" },
        [t("span", null, "\u4E0B\u8F7D\u5730\u5740:")],
        -1
      )
    ),
    U5 = { class: "qbittorrent-item_value" },
    W5 = { class: "qbittorrent-item" },
    Z5 = Ie(() =>
      t(
        "div",
        { class: "qbittorrent-item_name" },
        [t("span", null, "\u7F51\u7EDC\u5730\u5740:")],
        -1
      )
    ),
    H5 = { class: "qbittorrent-item_value" },
    J5 = ["href"],
    K5 = T({
      props: { qbittorrent: { type: Object } },
      setup(e) {
        const a = e,
          o = H(() => {
            var n;
            return `http://${location.host}${
              (n = a.qbittorrent) == null ? void 0 : n.webPath
            }`;
          });
        return (n, s) => {
          var m, b, f;
          return (
            i(),
            r("ul", M5, [
              t("li", O5, [
                N5,
                t("div", j5, [
                  ((m = e.qbittorrent) == null ? void 0 : m.status) == "running"
                    ? (i(), r("span", q5, "\u5DF2\u542F\u52A8"))
                    : (i(), r("span", R5, "\u672A\u542F\u52A8")),
                ]),
              ]),
              ((b = e.qbittorrent) == null ? void 0 : b.status) == "running"
                ? (i(),
                  r(
                    L,
                    { key: 0 },
                    [
                      t("li", G5, [
                        V5,
                        t("div", U5, [
                          t(
                            "span",
                            null,
                            k(
                              (f = e.qbittorrent) == null
                                ? void 0
                                : f.downloadPath
                            ),
                            1
                          ),
                        ]),
                      ]),
                      t("li", W5, [
                        Z5,
                        t("div", H5, [
                          t(
                            "a",
                            {
                              href: y(o),
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                            k(y(o)),
                            9,
                            J5
                          ),
                        ]),
                      ]),
                    ],
                    64
                  ))
                : $("", !0),
            ])
          );
        };
      },
    });
  var X5 = S(K5, [["__scopeId", "data-v-4d4723c0"]]);
  const Le = (e) => (O("data-v-ea121c94"), (e = e()), N(), e),
    Q5 = { class: "app-container_transmission" },
    t6 = { class: "transmission-item" },
    e6 = Le(() =>
      t(
        "div",
        { class: "transmission-item_name" },
        [t("span", null, "\u5F53\u524D\u72B6\u6001:")],
        -1
      )
    ),
    a6 = { class: "transmission-item_value" },
    o6 = { key: 0, class: "configure" },
    n6 = { key: 1, class: "configure enabel" },
    i6 = { class: "transmission-item" },
    r6 = Le(() =>
      t(
        "div",
        { class: "transmission-item_name" },
        [t("span", null, "\u4E0B\u8F7D\u5730\u5740:")],
        -1
      )
    ),
    s6 = { class: "transmission-item_value" },
    d6 = { class: "transmission-item" },
    c6 = Le(() =>
      t(
        "div",
        { class: "transmission-item_name" },
        [t("span", null, "\u7F51\u7EDC\u5730\u5740:")],
        -1
      )
    ),
    u6 = { class: "transmission-item_value" },
    l6 = ["href"],
    p6 = T({
      props: { transmission: { type: Object } },
      setup(e) {
        const a = e,
          o = H(() => {
            var n;
            return `http://${location.host}${
              (n = a.transmission) == null ? void 0 : n.webPath
            }`;
          });
        return (n, s) => {
          var m, b, f;
          return (
            i(),
            r("ul", Q5, [
              t("li", t6, [
                e6,
                t("div", a6, [
                  ((m = e.transmission) == null ? void 0 : m.status) ==
                  "running"
                    ? (i(), r("span", o6, "\u5DF2\u542F\u52A8"))
                    : (i(), r("span", n6, "\u672A\u542F\u52A8")),
                ]),
              ]),
              ((b = e.transmission) == null ? void 0 : b.status) == "running"
                ? (i(),
                  r(
                    L,
                    { key: 0 },
                    [
                      t("li", i6, [
                        r6,
                        t("div", s6, [
                          t(
                            "span",
                            null,
                            k(
                              (f = e.transmission) == null
                                ? void 0
                                : f.downloadPath
                            ),
                            1
                          ),
                        ]),
                      ]),
                      t("li", d6, [
                        c6,
                        t("div", u6, [
                          t(
                            "a",
                            {
                              href: y(o),
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                            k(y(o)),
                            9,
                            l6
                          ),
                        ]),
                      ]),
                    ],
                    64
                  ))
                : $("", !0),
            ])
          );
        };
      },
    });
  var f6 = S(p6, [["__scopeId", "data-v-ea121c94"]]);
  const m6 = {},
    v6 = {
      width: "14px",
      height: "14px",
      viewBox: "0 0 14 14",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
    },
    b6 = t(
      "path",
      {
        d: "M7,0.875 C3.61757813,0.875 0.875,3.61757813 0.875,7 C0.875,10.3824219 3.61757813,13.125 7,13.125 C10.3824219,13.125 13.125,10.3824219 13.125,7 C13.125,3.61757813 10.3824219,0.875 7,0.875 Z M6.5625,4.046875 C6.5625,3.98671875 6.61171875,3.9375 6.671875,3.9375 L7.328125,3.9375 C7.38828125,3.9375 7.4375,3.98671875 7.4375,4.046875 L7.4375,7.765625 C7.4375,7.82578125 7.38828125,7.875 7.328125,7.875 L6.671875,7.875 C6.61171875,7.875 6.5625,7.82578125 6.5625,7.765625 L6.5625,4.046875 Z M7,10.0625 C6.63769531,10.0625 6.34375,9.76855469 6.34375,9.40625 C6.34375,9.04394531 6.63769531,8.75 7,8.75 C7.36230469,8.75 7.65625,9.04394531 7.65625,9.40625 C7.65625,9.76855469 7.36230469,10.0625 7,10.0625 Z",
        id: "\u5F62\u72B6",
        "fill-opacity": "0.65",
      },
      null,
      -1
    ),
    g6 = [b6];
  function _6(e, a) {
    return i(), r("svg", v6, g6);
  }
  var se = S(m6, [["render", _6]]);
  const et = (e) => (O("data-v-7aecdbd2"), (e = e()), N(), e),
    h6 = { key: 0, class: "action" },
    x6 = et(() =>
      t(
        "h2",
        { class: "title" },
        "\u4E0B\u8F7D\u670D\u52A1\u914D\u7F6E\u5411\u5BFC",
        -1
      )
    ),
    k6 = { class: "load_service" },
    w6 = et(() => t("span", null, "\u4E0B\u8F7D\u670D\u52A1\uFF1A", -1)),
    y6 = { class: "load_radios" },
    F6 = et(() => t("label", { for: "Aria2" }, "Aria2", -1)),
    C6 = { class: "load_radios" },
    E6 = et(() => t("label", { for: "qB" }, "qBittorrent", -1)),
    $6 = { class: "load_radios" },
    D6 = et(() => t("label", { for: "Ts" }, "Transmission", -1)),
    B6 = { key: 0 },
    Y6 = { class: "load" },
    A6 = { class: "left" },
    S6 = { class: "tooltip-trigger" },
    z6 = et(() =>
      t(
        "div",
        null,
        [
          t("div", { class: "tooltip-text tooltip-top" }, [
            t(
              "span",
              { class: "dowload_dir_tip" },
              "\u7528\u4E8E\u653E\u7F6E\u4E0B\u8F7D\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4F8B\u5982\uFF1Amnt/sda1/download"
            ),
          ]),
        ],
        -1
      )
    ),
    P6 = et(() => t("span", null, "\u4E0B\u8F7D\u76EE\u5F55\uFF1A", -1)),
    T6 = ["onSubmit"],
    I6 = { class: "select-editable" },
    L6 = et(() =>
      t(
        "option",
        { selected: "true", value: null },
        "\u8BF7\u9009\u62E9\u4E0B\u8F7D\u76EE\u5F55",
        -1
      )
    ),
    M6 = ["value"],
    O6 = et(() =>
      t("option", { value: "useInput" }, "- -\u81EA\u5B9A\u4E49- -", -1)
    ),
    N6 = { class: "RPC" },
    j6 = { class: "left" },
    q6 = { class: "tooltip-trigger" },
    R6 = et(() =>
      t(
        "div",
        null,
        [
          t("div", { class: "tooltip-text tooltip-bottom" }, [
            t(
              "span",
              { class: "dowload_rpc_tip" },
              "\u7528\u4E8E\u8FDC\u7A0B\u8BBF\u95EE\u7684\u4EE4\u724C\u3002"
            ),
          ]),
        ],
        -1
      )
    ),
    G6 = et(() => t("span", null, "RPC \u4EE4\u724C\uFF1A", -1)),
    V6 = { class: "Tracker" },
    U6 = et(() => t("span", null, "\u9644\u52A0\u7684 BT Tracker\uFF1A", -1)),
    W6 = et(() => t("label", { for: "default" }, "\u9ED8\u8BA4", -1)),
    Z6 = et(() => t("label", { for: "add" }, "\u81EA\u5DF1\u6DFB\u52A0", -1)),
    H6 = { key: 1 },
    J6 = { class: "load" },
    K6 = { class: "left" },
    X6 = { class: "tooltip-trigger" },
    Q6 = et(() =>
      t(
        "div",
        null,
        [
          t("div", { class: "tooltip-text tooltip-top" }, [
            t(
              "span",
              { class: "dowload_dir_tip" },
              "\u7528\u4E8E\u653E\u7F6E\u4E0B\u8F7D\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4F8B\u5982\uFF1Amnt/sda1/download"
            ),
          ]),
        ],
        -1
      )
    ),
    t4 = et(() => t("span", null, "\u4E0B\u8F7D\u76EE\u5F55\uFF1A", -1)),
    e4 = ["onSubmit"],
    a4 = { class: "select-editable" },
    o4 = et(() =>
      t(
        "option",
        { selected: "true", value: null },
        "\u8BF7\u9009\u62E9\u4E0B\u8F7D\u76EE\u5F55",
        -1
      )
    ),
    n4 = ["value"],
    i4 = et(() =>
      t("option", { value: "useInput" }, "- -\u81EA\u5B9A\u4E49- -", -1)
    ),
    r4 = { key: 2 },
    s4 = { class: "load" },
    d4 = { class: "left" },
    c4 = { class: "tooltip-trigger" },
    u4 = et(() =>
      t(
        "div",
        null,
        [
          t("div", { class: "tooltip-text tooltip-top" }, [
            t(
              "span",
              { class: "dowload_dir_tip" },
              "\u7528\u4E8E\u653E\u7F6E\u4E0B\u8F7D\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4F8B\u5982\uFF1Amnt/sda1/download"
            ),
          ]),
        ],
        -1
      )
    ),
    l4 = et(() => t("span", null, "\u4E0B\u8F7D\u76EE\u5F55\uFF1A", -1)),
    p4 = ["onSubmit"],
    f4 = { class: "select-editable" },
    m4 = et(() =>
      t(
        "option",
        { selected: "true", value: null },
        "\u8BF7\u9009\u62E9\u4E0B\u8F7D\u76EE\u5F55",
        -1
      )
    ),
    v4 = ["value"],
    b4 = et(() =>
      t("option", { value: "useInput" }, "- -\u81EA\u5B9A\u4E49- -", -1)
    ),
    g4 = { class: "btns" },
    _4 = { key: 1, class: "action" },
    h4 = { class: "title" },
    x4 = { class: "finished" },
    k4 = et(() =>
      t("p", { class: "successed" }, "\u914D\u7F6E\u6210\u529F\uFF01", -1)
    ),
    w4 = T({
      props: {
        services: { type: Object, required: !0 },
        partitionList: { type: Array, required: !0 },
        defaultTab: { type: String, required: !1 },
        Close: Function,
      },
      setup(e) {
        const a = e,
          o = F(""),
          n = F(""),
          s = F("null"),
          m = F(""),
          b = F("default"),
          f = F("Aria2"),
          u = F("null"),
          c = F(""),
          d = F("null"),
          v = F(""),
          l = F(0);
        At(() => {
          var W, Z, G, R, U, at, wt;
          switch (a.defaultTab) {
            case "aria2":
              f.value = "Aria2";
              break;
            case "qbittorrent":
              f.value = "qBittorrent";
              break;
            case "transmission":
              f.value = "transmission";
              break;
          }
          const C =
            ((W = a.services.aria2) == null ? void 0 : W.downloadPath) ||
            ((Z = a.services.qbittorrent) == null ? void 0 : Z.downloadPath) ||
            ((G = a.services.transmission) == null ? void 0 : G.downloadPath);
          C &&
            (a.partitionList.find(($t) => $t == C)
              ? (s.value = C)
              : ((m.value = C), (s.value = "useInput")));
          const B = (R = a.services.aria2) == null ? void 0 : R.rpcToken;
          B && (o.value = B);
          const D =
            ((U = a.services.qbittorrent) == null ? void 0 : U.downloadPath) ||
            C ||
            ((at = a.services.transmission) == null ? void 0 : at.downloadPath);
          D &&
            (a.partitionList.find(($t) => $t == D)
              ? (u.value = D)
              : ((c.value = D), (u.value = "useInput")));
          const j =
            ((wt = a.services.transmission) == null
              ? void 0
              : wt.downloadPath) ||
            C ||
            D;
          j &&
            (a.partitionList.find(($t) => $t == j)
              ? (d.value = j)
              : ((v.value = j), (d.value = "useInput")));
        });
        const _ = () => {
            let C = s.value;
            if (
              (C == "useInput" && (C = m.value),
              C == null || C == "null" || C == "")
            )
              return;
            (() =>
              A(this, null, function* () {
                let D = x.Loading("\u68C0\u67E5\u4E2D...");
                try {
                  const j = yield Y.App.Check.POST({ name: "app-meta-aria2" });
                  if ((D.Close(), j != null && j.data)) {
                    const { result: W, error: Z } = j.data;
                    if ((Z && x.Warning(Z), W)) {
                      const G = () => {
                        (D = x.Loading("\u914D\u7F6E\u4E2D...")),
                          Y.Guide.Aria2Init.POST({
                            downloadPath: C,
                            rpcToken: o.value,
                            btTracker: b.value == "add" ? n.value : "",
                          })
                            .then((R) => {
                              var U;
                              if (R != null && R.data) {
                                if ((R.data.success || 0) == 0) {
                                  l.value = 1;
                                  return;
                                } else if ((U = R.data) != null && U.error)
                                  throw R.data.error;
                              }
                              throw "\u672A\u77E5\u9519\u8BEF";
                            })
                            .catch((R) => x.Error(R))
                            .finally(() => D.Close());
                      };
                      if (W.status == "installed") G();
                      else if (
                        confirm(
                          "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5 Aria2 \u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                        )
                      ) {
                        D = x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D...");
                        const R = yield g("app-meta-aria2");
                        D.Close(),
                          R ? G() : x.Warning("\u5B89\u88C5\u5931\u8D25");
                      }
                    }
                  }
                } catch (j) {
                  D.Close(), x.Error(j);
                }
              }))();
          },
          p = () => {
            let C = u.value;
            if (
              (C == "useInput" && (C = c.value),
              C == null || C == "null" || C == "")
            )
              return;
            (() =>
              A(this, null, function* () {
                let D = x.Loading("\u68C0\u67E5\u4E2D...");
                try {
                  const j = yield Y.App.Check.POST({
                    name: "app-meta-qbittorrent",
                  });
                  if ((D.Close(), j != null && j.data)) {
                    const { result: W, error: Z } = j.data;
                    if ((Z && x.Warning(Z), W)) {
                      if (W.status == "installed") {
                        const G = Y.Guide.qbitorrentInit
                          .POST({ downloadPath: C })
                          .then((R) => {
                            var U;
                            if (R != null && R.data) {
                              if ((R.data.success || 0) == 0) {
                                l.value = 1;
                                return;
                              } else if ((U = R.data) != null && U.error)
                                throw R.data.error;
                            }
                            throw "\u672A\u77E5\u9519\u8BEF";
                          })
                          .catch((R) => x.Error(R))
                          .finally(() => D.Close());
                      } else if (
                        confirm(
                          "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5 qBittorrent \u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                        )
                      ) {
                        D = x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D...");
                        const G = yield g("app-meta-qbittorrent");
                        if ((D.Close(), G)) {
                          x.Success("\u5B89\u88C5\u6210\u529F");
                          const R = Y.Guide.qbitorrentInit
                            .POST({ downloadPath: C })
                            .then((U) => {
                              var at;
                              if (U != null && U.data) {
                                if ((U.data.success || 0) == 0) {
                                  l.value = 1;
                                  return;
                                } else if ((at = U.data) != null && at.error)
                                  throw U.data.error;
                              }
                              throw "\u672A\u77E5\u9519\u8BEF";
                            })
                            .catch((U) => x.Error(U))
                            .finally(() => D.Close());
                        } else x.Warning("\u5B89\u88C5\u5931\u8D25");
                      }
                    }
                  }
                } catch (j) {
                  x.Error(j);
                }
              }))();
          },
          h = () => {
            let C = d.value;
            if (
              (C == "useInput" && (C = v.value),
              C == null || C == "null" || C == "")
            )
              return;
            (() =>
              A(this, null, function* () {
                let D = x.Loading("\u914D\u7F6E\u4E2D...");
                try {
                  const j = yield Y.App.Check.POST({
                    name: "app-meta-transmission",
                  });
                  if ((D.Close(), j != null && j.data)) {
                    const { result: W, error: Z } = j.data;
                    if ((Z && x.Warning(Z), W)) {
                      if (W.status == "installed") {
                        const G = Y.Guide.transmissionInit
                          .POST({ downloadPath: C })
                          .then((R) => {
                            var U;
                            if (R != null && R.data) {
                              if ((R.data.success || 0) == 0) {
                                l.value = 1;
                                return;
                              } else if ((U = R.data) != null && U.error)
                                throw R.data.error;
                            }
                            throw "\u672A\u77E5\u9519\u8BEF";
                          })
                          .catch((R) => x.Error(R))
                          .finally(() => D.Close());
                      } else if (
                        confirm(
                          "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5 Transmission \u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                        )
                      ) {
                        D = x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D...");
                        const G = yield g("app-meta-transmission");
                        if ((D.Close(), G)) {
                          x.Success("\u5B89\u88C5\u6210\u529F");
                          const R = Y.Guide.transmissionInit
                            .POST({ downloadPath: C })
                            .then((U) => {
                              var at;
                              if (U != null && U.data) {
                                if ((U.data.success || 0) == 0) {
                                  l.value = 1;
                                  return;
                                } else if ((at = U.data) != null && at.error)
                                  throw U.data.error;
                              }
                              throw "\u672A\u77E5\u9519\u8BEF";
                            })
                            .catch((U) => x.Error(U))
                            .finally(() => D.Close());
                        } else x.Warning("\u5B89\u88C5\u5931\u8D25");
                      }
                    }
                  }
                } catch (j) {
                  x.Error(j);
                }
                D.Close();
              }))();
          },
          g = (C) =>
            A(this, null, function* () {
              return (
                Y.App.Install.POST({ name: C }).then(() => {}),
                new Promise((B, D) =>
                  A(this, null, function* () {
                    let j = 0;
                    const W = setInterval(
                      () =>
                        A(this, null, function* () {
                          if (j > 20) {
                            clearInterval(W), D(!1);
                            return;
                          }
                          const Z = yield Y.App.Check.POST({ name: C });
                          if (Z != null && Z.data) {
                            const { result: G } = Z.data;
                            if (
                              (G == null ? void 0 : G.status) == "installed"
                            ) {
                              clearInterval(W), B(!0);
                              return;
                            }
                          }
                          j++;
                        }),
                      3e3
                    );
                  })
                )
              );
            }),
          w = (C) => {
            C.preventDefault(), a.Close && a.Close();
          },
          E = (C) => {
            C.preventDefault(), location.reload();
          };
        return (C, B) => (
          i(),
          M(
            ot,
            { Close: e.Close, type: 1 },
            {
              default: q(() => [
                z(
                  xt,
                  { name: "rotate", mode: "out-in" },
                  {
                    default: q(() => [
                      l.value == 0
                        ? (i(),
                          r("div", h6, [
                            x6,
                            t("ul", null, [
                              t("li", null, [
                                t("div", k6, [
                                  w6,
                                  t("div", y6, [
                                    P(
                                      t(
                                        "input",
                                        {
                                          type: "radio",
                                          value: "Aria2",
                                          "onUpdate:modelValue":
                                            B[0] ||
                                            (B[0] = (D) => (f.value = D)),
                                          name: "download",
                                          id: "Aria2",
                                        },
                                        null,
                                        512
                                      ),
                                      [[bt, f.value]]
                                    ),
                                    F6,
                                  ]),
                                  t("div", C6, [
                                    P(
                                      t(
                                        "input",
                                        {
                                          type: "radio",
                                          value: "qBittorrent",
                                          "onUpdate:modelValue":
                                            B[1] ||
                                            (B[1] = (D) => (f.value = D)),
                                          name: "download",
                                          id: "qB",
                                        },
                                        null,
                                        512
                                      ),
                                      [[bt, f.value]]
                                    ),
                                    E6,
                                  ]),
                                  t("div", $6, [
                                    P(
                                      t(
                                        "input",
                                        {
                                          type: "radio",
                                          value: "transmission",
                                          "onUpdate:modelValue":
                                            B[2] ||
                                            (B[2] = (D) => (f.value = D)),
                                          name: "download",
                                          id: "Ts",
                                        },
                                        null,
                                        512
                                      ),
                                      [[bt, f.value]]
                                    ),
                                    D6,
                                  ]),
                                ]),
                              ]),
                            ]),
                            f.value == "Aria2"
                              ? (i(),
                                r("ul", B6, [
                                  t("li", null, [
                                    t("div", Y6, [
                                      t("div", A6, [
                                        t("span", S6, [z(se), z6]),
                                        P6,
                                      ]),
                                      t(
                                        "form",
                                        { onSubmit: it(_, ["prevent"]) },
                                        [
                                          t("label", null, [
                                            t("div", I6, [
                                              P(
                                                t(
                                                  "select",
                                                  {
                                                    "onUpdate:modelValue":
                                                      B[3] ||
                                                      (B[3] = (D) =>
                                                        (s.value = D)),
                                                    autocomplete: "off",
                                                  },
                                                  [
                                                    L6,
                                                    (i(!0),
                                                    r(
                                                      L,
                                                      null,
                                                      V(
                                                        e.partitionList,
                                                        (D, j) => (
                                                          i(),
                                                          r(
                                                            "option",
                                                            {
                                                              value: D,
                                                              key: j,
                                                            },
                                                            k(D),
                                                            9,
                                                            M6
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                    O6,
                                                  ],
                                                  512
                                                ),
                                                [
                                                  [
                                                    Q,
                                                    s.value,
                                                    void 0,
                                                    { trim: !0 },
                                                  ],
                                                ]
                                              ),
                                              s.value == "useInput"
                                                ? P(
                                                    (i(),
                                                    r(
                                                      "input",
                                                      {
                                                        key: 0,
                                                        type: "text",
                                                        "onUpdate:modelValue":
                                                          B[4] ||
                                                          (B[4] = (D) =>
                                                            (m.value = D)),
                                                        required: "",
                                                        placeholder:
                                                          "\u8BF7\u8F93\u5165\u4E0B\u8F7D\u76EE\u5F55",
                                                      },
                                                      null,
                                                      512
                                                    )),
                                                    [
                                                      [
                                                        J,
                                                        m.value,
                                                        void 0,
                                                        { trim: !0 },
                                                      ],
                                                    ]
                                                  )
                                                : $("", !0),
                                            ]),
                                          ]),
                                        ],
                                        40,
                                        T6
                                      ),
                                    ]),
                                  ]),
                                  t("li", null, [
                                    t("div", N6, [
                                      t("div", j6, [
                                        t("span", q6, [z(se), R6]),
                                        G6,
                                      ]),
                                      P(
                                        t(
                                          "input",
                                          {
                                            type: "text",
                                            class: "RPC_input",
                                            placeholder:
                                              "\u8BF7\u8F93\u5165RPC\u4EE4\u724C",
                                            "onUpdate:modelValue":
                                              B[5] ||
                                              (B[5] = (D) => (o.value = D)),
                                          },
                                          null,
                                          512
                                        ),
                                        [[J, o.value, void 0, { trim: !0 }]]
                                      ),
                                    ]),
                                  ]),
                                  t("li", null, [
                                    t("div", V6, [
                                      U6,
                                      P(
                                        t(
                                          "input",
                                          {
                                            type: "radio",
                                            value: "default",
                                            name: "BT",
                                            id: "default",
                                            "onUpdate:modelValue":
                                              B[6] ||
                                              (B[6] = (D) => (b.value = D)),
                                          },
                                          null,
                                          512
                                        ),
                                        [[bt, b.value]]
                                      ),
                                      W6,
                                      P(
                                        t(
                                          "input",
                                          {
                                            type: "radio",
                                            value: "add",
                                            name: "BT",
                                            id: "add",
                                            "onUpdate:modelValue":
                                              B[7] ||
                                              (B[7] = (D) => (b.value = D)),
                                          },
                                          null,
                                          512
                                        ),
                                        [[bt, b.value]]
                                      ),
                                      Z6,
                                    ]),
                                  ]),
                                  t("li", null, [
                                    b.value == "add"
                                      ? P(
                                          (i(),
                                          r(
                                            "textarea",
                                            {
                                              key: 0,
                                              class: "Tracker_input",
                                              "onUpdate:modelValue":
                                                B[8] ||
                                                (B[8] = (D) => (n.value = D)),
                                              rows: "4",
                                              placeholder:
                                                "\u8BF7\u8F93\u5165bt\u670D\u52A1\u5668\u5730\u5740",
                                            },
                                            null,
                                            512
                                          )),
                                          [[J, n.value, void 0, { trim: !0 }]]
                                        )
                                      : $("", !0),
                                  ]),
                                ]))
                              : $("", !0),
                            f.value == "qBittorrent"
                              ? (i(),
                                r("ul", H6, [
                                  t("li", null, [
                                    t("div", J6, [
                                      t("div", K6, [
                                        t("span", X6, [z(se), Q6]),
                                        t4,
                                      ]),
                                      t(
                                        "form",
                                        { onSubmit: it(p, ["prevent"]) },
                                        [
                                          t("label", null, [
                                            t("div", a4, [
                                              P(
                                                t(
                                                  "select",
                                                  {
                                                    "onUpdate:modelValue":
                                                      B[9] ||
                                                      (B[9] = (D) =>
                                                        (u.value = D)),
                                                    autocomplete: "off",
                                                  },
                                                  [
                                                    o4,
                                                    (i(!0),
                                                    r(
                                                      L,
                                                      null,
                                                      V(
                                                        e.partitionList,
                                                        (D, j) => (
                                                          i(),
                                                          r(
                                                            "option",
                                                            {
                                                              value: D,
                                                              key: j,
                                                            },
                                                            k(D),
                                                            9,
                                                            n4
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                    i4,
                                                  ],
                                                  512
                                                ),
                                                [
                                                  [
                                                    Q,
                                                    u.value,
                                                    void 0,
                                                    { trim: !0 },
                                                  ],
                                                ]
                                              ),
                                              u.value == "useInput"
                                                ? P(
                                                    (i(),
                                                    r(
                                                      "input",
                                                      {
                                                        key: 0,
                                                        type: "text",
                                                        "onUpdate:modelValue":
                                                          B[10] ||
                                                          (B[10] = (D) =>
                                                            (c.value = D)),
                                                        required: "",
                                                        placeholder:
                                                          "\u8BF7\u8F93\u5165\u4E0B\u8F7D\u76EE\u5F55",
                                                      },
                                                      null,
                                                      512
                                                    )),
                                                    [
                                                      [
                                                        J,
                                                        c.value,
                                                        void 0,
                                                        { trim: !0 },
                                                      ],
                                                    ]
                                                  )
                                                : $("", !0),
                                            ]),
                                          ]),
                                        ],
                                        40,
                                        e4
                                      ),
                                    ]),
                                  ]),
                                ]))
                              : $("", !0),
                            f.value == "transmission"
                              ? (i(),
                                r("ul", r4, [
                                  t("li", null, [
                                    t("div", s4, [
                                      t("div", d4, [
                                        t("span", c4, [z(se), u4]),
                                        l4,
                                      ]),
                                      t(
                                        "form",
                                        { onSubmit: it(h, ["prevent"]) },
                                        [
                                          t("label", null, [
                                            t("div", f4, [
                                              P(
                                                t(
                                                  "select",
                                                  {
                                                    "onUpdate:modelValue":
                                                      B[11] ||
                                                      (B[11] = (D) =>
                                                        (d.value = D)),
                                                    autocomplete: "off",
                                                  },
                                                  [
                                                    m4,
                                                    (i(!0),
                                                    r(
                                                      L,
                                                      null,
                                                      V(
                                                        e.partitionList,
                                                        (D, j) => (
                                                          i(),
                                                          r(
                                                            "option",
                                                            {
                                                              value: D,
                                                              key: j,
                                                            },
                                                            k(D),
                                                            9,
                                                            v4
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                    b4,
                                                  ],
                                                  512
                                                ),
                                                [
                                                  [
                                                    Q,
                                                    d.value,
                                                    void 0,
                                                    { trim: !0 },
                                                  ],
                                                ]
                                              ),
                                              d.value == "useInput"
                                                ? P(
                                                    (i(),
                                                    r(
                                                      "input",
                                                      {
                                                        key: 0,
                                                        type: "text",
                                                        "onUpdate:modelValue":
                                                          B[12] ||
                                                          (B[12] = (D) =>
                                                            (v.value = D)),
                                                        required: "",
                                                        placeholder:
                                                          "\u8BF7\u8F93\u5165\u4E0B\u8F7D\u76EE\u5F55",
                                                      },
                                                      null,
                                                      512
                                                    )),
                                                    [
                                                      [
                                                        J,
                                                        v.value,
                                                        void 0,
                                                        { trim: !0 },
                                                      ],
                                                    ]
                                                  )
                                                : $("", !0),
                                            ]),
                                          ]),
                                        ],
                                        40,
                                        p4
                                      ),
                                    ]),
                                  ]),
                                ]))
                              : $("", !0),
                            t("div", g4, [
                              f.value == "Aria2"
                                ? (i(),
                                  r(
                                    "button",
                                    {
                                      key: 0,
                                      class: "cbi-button cbi-button-apply",
                                      onClick: _,
                                    },
                                    "\u542F\u7528"
                                  ))
                                : $("", !0),
                              f.value == "qBittorrent"
                                ? (i(),
                                  r(
                                    "button",
                                    {
                                      key: 1,
                                      class: "cbi-button cbi-button-apply",
                                      onClick: p,
                                    },
                                    "\u542F\u7528"
                                  ))
                                : $("", !0),
                              f.value == "transmission"
                                ? (i(),
                                  r(
                                    "button",
                                    {
                                      key: 2,
                                      class: "cbi-button cbi-button-apply",
                                      onClick: h,
                                    },
                                    "\u542F\u7528"
                                  ))
                                : $("", !0),
                              t(
                                "button",
                                {
                                  class:
                                    "cbi-button cbi-button-remove app-btn app-back",
                                  onClick: w,
                                },
                                "\u53D6\u6D88"
                              ),
                            ]),
                          ]))
                        : l.value == 1
                        ? (i(),
                          r("div", _4, [
                            t(
                              "h2",
                              h4,
                              k(f.value) +
                                "\u4E0B\u8F7D\u670D\u52A1\u914D\u7F6E\u5411\u5BFC",
                              1
                            ),
                            t("div", x4, [z(Ye)]),
                            k4,
                            t("div", { class: "btns" }, [
                              t(
                                "button",
                                {
                                  class: "cbi-button cbi-button-apply",
                                  onClick: E,
                                },
                                "\u786E\u5B9A"
                              ),
                            ]),
                          ]))
                        : $("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            },
            8,
            ["Close"]
          )
        );
      },
    });
  var y4 = S(w4, [["__scopeId", "data-v-7aecdbd2"]]);
  const F4 = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        y4,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    },
    C4 = (e) => (O("data-v-b51a37ba"), (e = e()), N(), e),
    E4 = { class: "app-container" },
    $4 = { class: "app-container_title" },
    D4 = C4(() =>
      t("span", null, [t("span", null, "\u4E0B\u8F7D\u670D\u52A1")], -1)
    ),
    B4 = { class: "app-container_tool" },
    Y4 = ["disabled"],
    A4 = { class: "more_icon", title: "\u67E5\u770B\u9AD8\u7EA7\u914D\u7F6E" },
    S4 = { class: "DeviceBlock" },
    z4 = { class: "app-container_body" },
    P4 = { class: "app-container_nas-menu" },
    T4 = T({
      setup(e) {
        F(!1);
        const a = F("aria2"),
          o = F();
        Qe(),
          (() => {
            Y.Guide.DownloadService.Status.GET().then((l) => {
              var _;
              if ((_ = l == null ? void 0 : l.data) != null && _.result) {
                const p = l.data.result;
                o.value = p;
              }
            });
          })();
        const s = F(!1),
          m = F(!1),
          b = () => {
            m.value = !m.value;
          },
          f = () => {
            Y.Guide.DownloadpPartition.List.GET().then((l) => {
              var p, h;
              let _ = [];
              (h =
                (p = l == null ? void 0 : l.data) == null
                  ? void 0
                  : p.result) != null &&
                h.partitionList &&
                (_ = l.data.result.partitionList),
                F4({
                  services: o.value,
                  partitionList: _,
                  defaultTab: a.value,
                });
            });
          },
          u = () => {
            b(),
              (() =>
                A(this, null, function* () {
                  let _ = x.Loading("");
                  try {
                    const p = yield Y.App.Check.POST({
                      name: "app-meta-aria2",
                    });
                    if ((_.Close(), p != null && p.data)) {
                      const { result: h, error: g } = p.data;
                      if ((g && x.Warning(g), h)) {
                        if (h.status == "installed")
                          location.href = "/cgi-bin/luci/admin/services/aria2";
                        else if (
                          confirm(
                            "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5 Aria2 \u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                          )
                        ) {
                          x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D...");
                          const w = yield v("app-meta-aria2");
                          _.Close(),
                            w
                              ? (x.Success("\u5B89\u88C5\u6210\u529F"),
                                (location.href =
                                  "/cgi-bin/luci/admin/services/aria2"))
                              : x.Warning("\u5B89\u88C5\u5931\u8D25");
                        }
                      }
                    }
                  } catch (p) {
                    x.Error(p);
                  }
                  _.Close();
                }))();
          },
          c = () => {
            b(),
              (() =>
                A(this, null, function* () {
                  let _ = x.Loading("");
                  try {
                    const p = yield Y.App.Check.POST({
                      name: "app-meta-qbittorrent",
                    });
                    if ((_.Close(), p != null && p.data)) {
                      const { result: h, error: g } = p.data;
                      if ((g && x.Warning(g), h)) {
                        if (h.status == "installed")
                          location.href = "/cgi-bin/luci/admin/nas/qBittorrent";
                        else if (
                          confirm(
                            "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5 qBittorrent \u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                          )
                        ) {
                          x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D...");
                          const w = yield v("app-meta-qbittorrent");
                          _.Close(),
                            w
                              ? x.Success("\u5B89\u88C5\u6210\u529F")
                              : x.Warning("\u5B89\u88C5\u5931\u8D25");
                        }
                      }
                    }
                  } catch (p) {
                    x.Error(p);
                  }
                  _.Close();
                }))();
          },
          d = () => {
            b(),
              (() =>
                A(this, null, function* () {
                  let _ = x.Loading("");
                  try {
                    const p = yield Y.App.Check.POST({
                      name: "app-meta-transmission",
                    });
                    if ((_.Close(), p != null && p.data)) {
                      const { result: h, error: g } = p.data;
                      if ((g && x.Warning(g), h)) {
                        if (h.status == "installed")
                          location.href =
                            "/cgi-bin/luci/admin/services/transmission";
                        else if (
                          confirm(
                            "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5 Transmission \u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                          )
                        ) {
                          x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D...");
                          const w = yield v("app-meta-transmission");
                          _.Close(),
                            w
                              ? x.Success("\u5B89\u88C5\u6210\u529F")
                              : x.Warning("\u5B89\u88C5\u5931\u8D25");
                        }
                      }
                    }
                  } catch (p) {
                    x.Error(p);
                  }
                  _.Close();
                }))();
          },
          v = (l) =>
            A(this, null, function* () {
              return (
                Y.App.Install.POST({ name: l }).then(() => {}),
                new Promise((_, p) =>
                  A(this, null, function* () {
                    let h = 0;
                    const g = setInterval(
                      () =>
                        A(this, null, function* () {
                          if (h > 20) {
                            clearInterval(g), p(!1);
                            return;
                          }
                          const w = yield Y.App.Check.POST({ name: l });
                          if (w != null && w.data) {
                            const { result: E } = w.data;
                            if (
                              (E == null ? void 0 : E.status) == "installed"
                            ) {
                              clearInterval(g), _(!0);
                              return;
                            }
                          }
                          h++;
                        }),
                      3e3
                    );
                  })
                )
              );
            });
        return (l, _) => {
          var p, h, g;
          return (
            i(),
            r("div", E4, [
              t("div", $4, [
                D4,
                t("div", B4, [
                  o.value
                    ? (i(),
                      r(
                        "div",
                        {
                          key: 0,
                          class: "app-container_configure",
                          onClick: f,
                          disabled: s.value,
                        },
                        "\u5FEB\u901F\u914D\u7F6E ",
                        8,
                        Y4
                      ))
                    : $("", !0),
                  t("span", A4, [z(Yt, { onClick: b })]),
                ]),
                P(
                  t(
                    "div",
                    S4,
                    [
                      t("div", { class: "menu_background", onClick: b }),
                      t("ul", null, [
                        t("li", null, [
                          t(
                            "a",
                            { onClick: u },
                            "Aria2\u9AD8\u7EA7\u914D\u7F6E"
                          ),
                        ]),
                        t("li", null, [
                          t(
                            "a",
                            { onClick: c },
                            "qBittorrent\u9AD8\u7EA7\u914D\u7F6E"
                          ),
                        ]),
                        t("li", null, [
                          t(
                            "a",
                            { onClick: d },
                            "Transmission\u9AD8\u7EA7\u914D\u7F6E"
                          ),
                        ]),
                      ]),
                    ],
                    512
                  ),
                  [[Ft, m.value]]
                ),
              ]),
              t("div", z4, [
                t("ul", P4, [
                  t(
                    "button",
                    {
                      onClick: _[0] || (_[0] = (w) => (a.value = "aria2")),
                      class: ct({ on: a.value == "aria2" }),
                    },
                    "Aria2",
                    2
                  ),
                  t(
                    "button",
                    {
                      onClick:
                        _[1] || (_[1] = (w) => (a.value = "qbittorrent")),
                      class: ct({ on: a.value == "qbittorrent" }),
                    },
                    "qBittorrent",
                    2
                  ),
                  t(
                    "button",
                    {
                      onClick:
                        _[2] || (_[2] = (w) => (a.value = "transmission")),
                      class: ct({ on: a.value == "transmission" }),
                    },
                    "Transmission",
                    2
                  ),
                ]),
                a.value == "aria2"
                  ? (i(),
                    M(
                      L5,
                      {
                        key: 0,
                        aria2: (p = o.value) == null ? void 0 : p.aria2,
                      },
                      null,
                      8,
                      ["aria2"]
                    ))
                  : a.value == "qbittorrent"
                  ? (i(),
                    M(
                      X5,
                      {
                        key: 1,
                        qbittorrent:
                          (h = o.value) == null ? void 0 : h.qbittorrent,
                      },
                      null,
                      8,
                      ["qbittorrent"]
                    ))
                  : a.value == "transmission"
                  ? (i(),
                    M(
                      f6,
                      {
                        key: 2,
                        transmission:
                          (g = o.value) == null ? void 0 : g.transmission,
                      },
                      null,
                      8,
                      ["transmission"]
                    ))
                  : $("", !0),
              ]),
            ])
          );
        };
      },
    });
  var I4 = S(T4, [["__scopeId", "data-v-b51a37ba"]]);
  const Et = (e) => (O("data-v-10db3104"), (e = e()), N(), e),
    L4 = { class: "actioner-container" },
    M4 = Et(() =>
      t(
        "div",
        { class: "actioner-container_header" },
        [t("span", null, "\u57DF\u540D\u914D\u7F6E\u5411\u5BFC")],
        -1
      )
    ),
    O4 = { class: "actioner-container_body" },
    N4 = { class: "label-item" },
    j4 = Et(() => t("span", null, "DDNSTO", -1)),
    q4 = Et(() =>
      t(
        "p",
        { class: "label_info" },
        "DDNSTO \u662F\u4E00\u4E2A\u4E0D\u9700\u8981\u516C\u7F51IP\u4E5F\u53EF\u4EE5\u5728\u5916\u7F51\u8BBF\u95EE\u7684\u7A7F\u900F\u57DF\u540D\u670D\u52A1\uFF0C\u4E00\u4E2A\u6D4F\u89C8\u5668\u641E\u5B9A\u5185\u7F51\u7A7F\u900F\uFF0C\u8FDC\u7A0B\u8BBF\u95EEOpenwrt\u3001\u8FDC\u7A0B\u7EC8\u7AEF\u3001\u8FDC\u7A0B\u684C\u9762...",
        -1
      )
    ),
    R4 = { class: "label-item" },
    G4 = Et(() => t("span", null, "\u963F\u91CC\u4E91", -1)),
    V4 = Et(() =>
      t(
        "p",
        { class: "label_info" },
        " \u4E3A\u62E5\u6709\u52A8\u6001IP\u7684\u4E3B\u673A\u914D\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u53EF\u8BBF\u95EE\u57DF\u540D ",
        -1
      )
    ),
    U4 = { class: "label-item" },
    W4 = Et(() => t("span", null, "Dnspod", -1)),
    Z4 = Et(() =>
      t(
        "p",
        { class: "label_info" },
        " \u4E3A\u62E5\u6709\u52A8\u6001IP\u7684\u4E3B\u673A\u914D\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u53EF\u8BBF\u95EE\u57DF\u540D ",
        -1
      )
    ),
    H4 = { class: "label-item" },
    J4 = Et(() => t("span", null, "\u82B1\u751F\u58F3", -1)),
    K4 = Et(() =>
      t(
        "p",
        { class: "label_info" },
        " \u4E3A\u62E5\u6709\u52A8\u6001IP\u7684\u4E3B\u673A\u914D\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u53EF\u8BBF\u95EE\u57DF\u540D ",
        -1
      )
    ),
    X4 = T({
      props: {
        onSetup: { type: Function, required: !0 },
        active: { type: String, default: "ddnsto" },
      },
      emits: ["update:active"],
      setup(e, { emit: a }) {
        const o = e,
          n = () => {
            o.onSetup();
          },
          s = F(o.active),
          m = () => {
            switch ((a("update:active", s.value), s.value)) {
              case "ddnsto":
                o.onSetup("ddnsto");
                break;
              case "ali":
                o.onSetup("ddns-ali");
                break;
              case "dnspod":
                o.onSetup("ddns-dnspod");
                break;
              case "oray":
                o.onSetup("ddns-oray");
                break;
            }
          };
        return (b, f) => (
          i(),
          r("div", L4, [
            M4,
            t("div", O4, [
              t("div", N4, [
                t("label", null, [
                  P(
                    t(
                      "input",
                      {
                        type: "radio",
                        "onUpdate:modelValue":
                          f[0] || (f[0] = (u) => (s.value = u)),
                        value: "ddnsto",
                      },
                      null,
                      512
                    ),
                    [[bt, s.value]]
                  ),
                  j4,
                ]),
                q4,
              ]),
              t("div", R4, [
                t("label", null, [
                  P(
                    t(
                      "input",
                      {
                        type: "radio",
                        "onUpdate:modelValue":
                          f[1] || (f[1] = (u) => (s.value = u)),
                        value: "ali",
                      },
                      null,
                      512
                    ),
                    [[bt, s.value]]
                  ),
                  G4,
                ]),
                V4,
              ]),
              t("div", U4, [
                t("label", null, [
                  P(
                    t(
                      "input",
                      {
                        type: "radio",
                        "onUpdate:modelValue":
                          f[2] || (f[2] = (u) => (s.value = u)),
                        value: "dnspod",
                      },
                      null,
                      512
                    ),
                    [[bt, s.value]]
                  ),
                  W4,
                ]),
                Z4,
              ]),
              t("div", H4, [
                t("label", null, [
                  P(
                    t(
                      "input",
                      {
                        type: "radio",
                        "onUpdate:modelValue":
                          f[3] || (f[3] = (u) => (s.value = u)),
                        value: "oray",
                      },
                      null,
                      512
                    ),
                    [[bt, s.value]]
                  ),
                  J4,
                ]),
                K4,
              ]),
            ]),
            t("div", { class: "actioner-container_footer" }, [
              t("div", { class: "close", onClick: n }, "\u53D6\u6D88"),
              t("div", { class: "next", onClick: m }, "\u4E0B\u4E00\u6B65"),
            ]),
          ])
        );
      },
    });
  var Q4 = S(X4, [["__scopeId", "data-v-10db3104"]]);
  const oe = (e) => (O("data-v-6a75caab"), (e = e()), N(), e),
    t8 = { class: "actioner-container" },
    e8 = { class: "actioner-container_body" },
    a8 = oe(() =>
      t(
        "svg",
        {
          t: "1642063181211",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "5062",
          width: "128",
          height: "128",
          "data-v-cda444e0": "",
        },
        [
          t("path", {
            d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
            fill: "#52C41A",
            "p-id": "5063",
            "data-v-cda444e0": "",
          }),
        ],
        -1
      )
    ),
    o8 = oe(() =>
      t("div", { class: "body-title" }, "\u6DFB\u52A0\u6210\u529F", -1)
    ),
    n8 = oe(() =>
      t(
        "p",
        { class: "body-tips" },
        "\u8BF7\u7A0D\u7B491\u5206\u949F\u751F\u6548\u540E\u518D\u4F7F\u7528\u3002",
        -1
      )
    ),
    i8 = { class: "body-info" },
    r8 = oe(() => t("span", null, "\u8BBF\u95EE\u5730\u5740\uFF1A", -1)),
    s8 = ["href"],
    d8 = oe(() =>
      t(
        "div",
        null,
        [
          t("span", null, "\u53EF\u524D\u5F80"),
          t(
            "a",
            { href: "/cgi-bin/luci/admin/services/ddns", target: "_blank" },
            "\u670D\u52A1-\u52A8\u6001DNS"
          ),
          t("span", null, "\u67E5\u770B\u66F4\u591A\u8BE6\u60C5"),
        ],
        -1
      )
    ),
    c8 = T({
      props: {
        target: { type: String, required: !0 },
        onSetup: { type: Function, required: !0 },
      },
      setup(e) {
        const a = () => {
          location.reload();
        };
        return (o, n) => (
          i(),
          r("div", t8, [
            t("div", e8, [
              a8,
              o8,
              n8,
              t("div", i8, [
                r8,
                t(
                  "a",
                  {
                    href: e.target,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  k(e.target),
                  9,
                  s8
                ),
              ]),
              d8,
            ]),
            t("div", { class: "actioner-container_footer" }, [
              t("div", { class: "close", onClick: a }, "\u5173\u95ED"),
            ]),
          ])
        );
      },
    });
  var u8 = S(c8, [["__scopeId", "data-v-6a75caab"]]);
  const fa = (e) => (O("data-v-d4a49d48"), (e = e()), N(), e),
    l8 = { class: "actioner-container" },
    p8 = fa(() =>
      t(
        "div",
        { class: "actioner-container_header" },
        [t("span", null, "\u57DF\u540D\u914D\u7F6E\u5411\u5BFC")],
        -1
      )
    ),
    f8 = fa(() =>
      t(
        "div",
        { class: "actioner-container_body ddnsto-login" },
        [
          t("iframe", {
            src: "https://www.kooldns.cn/bind/#/auth?send=1&source=openwrt&callback=*",
          }),
        ],
        -1
      )
    ),
    m8 = T({
      props: {
        onSetup: { type: Function, required: !0 },
        onDdnstoConfig: { type: Function, required: !0 },
      },
      setup(e) {
        const a = e,
          o = () => {
            a.onSetup();
          },
          n = (s) => {
            if (s.data.auth == "ddnsto") {
              const m = s.data.sign,
                b = s.data.token;
              m &&
                b &&
                (removeEventListener("message", n),
                a.onDdnstoConfig(m, b),
                a.onSetup("ddnsto-run"));
            }
          };
        return (
          At(() => {
            window.addEventListener("message", n);
          }),
          Wt(() => {
            removeEventListener("message", n);
          }),
          (s, m) => (
            i(),
            r("div", l8, [
              p8,
              f8,
              t("div", { class: "actioner-container_footer" }, [
                t("div", { class: "close", onClick: o }, "\u53D6\u6D88"),
              ]),
            ])
          )
        );
      },
    });
  var v8 = S(m8, [["__scopeId", "data-v-d4a49d48"]]);
  const b8 = (e) => (O("data-v-0f447e28"), (e = e()), N(), e),
    g8 = { class: "actioner-container" },
    _8 = b8(() =>
      t(
        "div",
        { class: "actioner-container_header" },
        [t("span", null, "\u57DF\u540D\u914D\u7F6E\u5411\u5BFC")],
        -1
      )
    ),
    h8 = { class: "actioner-container_body ddnsto-bind" },
    x8 = ["src"],
    k8 = T({
      props: {
        onSetup: { type: Function, required: !0 },
        config: { type: Object, required: !0 },
        domain: { type: String, required: !0 },
      },
      emits: ["update:domain"],
      setup(e, { emit: a }) {
        const o = e,
          n = H(() => {
            const {
                domain: b,
                token: f,
                sign: u,
                routerId: c,
                netaddr: d,
              } = o.config,
              v = encodeURIComponent(b),
              l = encodeURIComponent(d);
            return `https://www.kooldns.cn/bind/#/domain?domain=${v}&sign=${u}&token=${f}&routerId=${c}&netaddr=${l}`;
          }),
          s = (b) => {
            if (b.data) {
              const { auth: f, url: u } = b.data;
              f === "ddnsto" && u && m(u);
            }
          },
          m = (b) =>
            A(this, null, function* () {
              var f;
              try {
                const u = yield Y.Guide.DdnstoAddress.POST({ address: b });
                u != null &&
                  u.data &&
                  (((f = u == null ? void 0 : u.data) == null
                    ? void 0
                    : f.success) || 0) == 0 &&
                  (a("update:domain", b), o.onSetup("ddnsto-save"));
              } catch (u) {}
            });
        return (
          At(() => {
            window.addEventListener("message", s);
          }),
          Wt(() => {
            removeEventListener("message", s);
          }),
          (b, f) => (
            i(),
            r("div", g8, [
              _8,
              t("div", h8, [t("iframe", { src: y(n) }, null, 8, x8)]),
            ])
          )
        );
      },
    });
  var w8 = S(k8, [["__scopeId", "data-v-0f447e28"]]);
  const ne = (e) => (O("data-v-6c08d7a2"), (e = e()), N(), e),
    y8 = { class: "actioner-container" },
    F8 = { class: "actioner-container_body" },
    C8 = ne(() =>
      t(
        "svg",
        {
          t: "1642063181211",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "5062",
          width: "128",
          height: "128",
          "data-v-cda444e0": "",
        },
        [
          t("path", {
            d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
            fill: "#52C41A",
            "p-id": "5063",
            "data-v-cda444e0": "",
          }),
        ],
        -1
      )
    ),
    E8 = ne(() =>
      t("div", { class: "body-title" }, "\u6DFB\u52A0\u6210\u529F", -1)
    ),
    $8 = ne(() =>
      t(
        "p",
        { class: "body-tips" },
        "\u8BF7\u7A0D\u7B491\u5206\u949F\u751F\u6548\u540E\u518D\u4F7F\u7528\u3002",
        -1
      )
    ),
    D8 = { class: "body-info" },
    B8 = ne(() => t("span", null, "\u8BBF\u95EE\u5730\u5740\uFF1A", -1)),
    Y8 = ["href"],
    A8 = ne(() =>
      t(
        "div",
        null,
        [
          t("span", null, "\u53EF\u524D\u5F80"),
          t(
            "a",
            { href: "https://www.ddnsto.com/app/#/devices", target: "_blank" },
            "DDNSTO\u63A7\u5236\u53F0"
          ),
          t("span", null, "\u67E5\u770B\u66F4\u591A\u8BE6\u60C5"),
        ],
        -1
      )
    ),
    S8 = T({
      props: {
        onSetup: { type: Function, required: !0 },
        target: { type: String, required: !0 },
      },
      setup(e) {
        const a = () => {
          location.reload();
        };
        return (o, n) => (
          i(),
          r("div", y8, [
            t("div", F8, [
              C8,
              E8,
              $8,
              t("div", D8, [
                B8,
                t(
                  "a",
                  {
                    href: e.target,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  k(e.target),
                  9,
                  Y8
                ),
              ]),
              A8,
            ]),
            t("div", { class: "actioner-container_footer" }, [
              t("div", { class: "close", onClick: a }, "\u5173\u95ED"),
            ]),
          ])
        );
      },
    });
  var z8 = S(S8, [["__scopeId", "data-v-6c08d7a2"]]);
  const P8 = (e) => (O("data-v-f87b7ee6"), (e = e()), N(), e),
    T8 = { class: "actioner-container" },
    I8 = P8(() =>
      t(
        "div",
        { class: "actioner-container_header" },
        [t("span", null, "\u57DF\u540D\u914D\u7F6E\u5411\u5BFC")],
        -1
      )
    ),
    L8 = { class: "actioner-container_body" },
    M8 = { class: "actioner-container_footer" },
    O8 = T({
      props: { onSetup: { type: Function, required: !0 } },
      setup(e) {
        const a = e,
          o = () => {
            a.onSetup();
          },
          n = () =>
            A(this, null, function* () {
              if (b.value) return;
              b.value = !0;
              const c = x.Loading("\u5B89\u88C5\u4E2D..."),
                d = yield u("app-meta-ddnsto");
              if ((c.Close(), d)) {
                a.onSetup("ddnsto-login");
                return;
              } else s.value = "\u5B89\u88C5\u5931\u8D25";
              b.value = !1;
            }),
          s = F("\u6B63\u5728\u68C0\u6D4B\u4E2D..."),
          m = F(!1),
          b = F(!1),
          f = () =>
            A(this, null, function* () {
              try {
                const c = yield Y.App.Check.POST({ name: "app-meta-ddnsto" });
                if (c != null && c.data) {
                  const { result: d, error: v } = c.data;
                  if (v) {
                    s.value = v;
                    return;
                  }
                  if (d) {
                    if (d.status == "installed") {
                      a.onSetup("ddnsto-login");
                      return;
                    }
                    d.status == "uninstalled" &&
                      (s.value =
                        "\u9700\u8981\u5B89\u88C5DDNSTO\u63D2\u4EF6\uFF0C\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u5F00\u59CB\u5B89\u88C5");
                  }
                }
              } catch (c) {
                s.value = c;
              }
              m.value = !0;
            }),
          u = (c) =>
            A(this, null, function* () {
              return (
                Y.App.Install.POST({ name: c }).then(() => {}),
                new Promise((d, v) =>
                  A(this, null, function* () {
                    let l = 0;
                    const _ = setInterval(
                      () =>
                        A(this, null, function* () {
                          if (l > 10) {
                            clearInterval(_), v(!1);
                            return;
                          }
                          const p = yield Y.App.Check.POST({ name: c });
                          if (p != null && p.data) {
                            const { result: h } = p.data;
                            if (
                              (h == null ? void 0 : h.status) == "installed"
                            ) {
                              clearInterval(_), d(!0);
                              return;
                            }
                          }
                          l++;
                        }),
                      3e3
                    );
                  })
                )
              );
            });
        return (
          f(),
          (c, d) => (
            i(),
            r("div", T8, [
              I8,
              t("div", L8, [t("span", null, k(s.value), 1)]),
              t("div", M8, [
                m.value
                  ? (i(),
                    r(
                      L,
                      { key: 0 },
                      [
                        t(
                          "div",
                          { class: "close", onClick: o },
                          "\u53D6\u6D88"
                        ),
                        t("div", { class: "next", onClick: n }, "\u786E\u5B9A"),
                      ],
                      64
                    ))
                  : $("", !0),
              ]),
            ])
          )
        );
      },
    });
  var N8 = S(O8, [["__scopeId", "data-v-f87b7ee6"]]);
  const j8 = (e) => (O("data-v-c1f03ecc"), (e = e()), N(), e),
    q8 = { class: "actioner-container" },
    R8 = j8(() =>
      t(
        "div",
        { class: "actioner-container_header" },
        [t("span", null, "\u57DF\u540D\u914D\u7F6E\u5411\u5BFC")],
        -1
      )
    ),
    G8 = { class: "actioner-container_body" },
    V8 = T({
      props: {
        onSetup: { type: Function, required: !0 },
        token: { type: String, required: !0 },
        onDdnstoLocalConfig: { type: Function, required: !0 },
      },
      setup(e) {
        const a = e,
          o = F(
            "\u6B63\u5728\u68C0\u6D4B\u63D2\u4EF6\u662F\u5426\u5DF2\u542F\u52A8..."
          );
        ((u) =>
          A(this, null, function* () {
            var c;
            try {
              const d = yield Y.Guide.Ddnsto.POST({ token: a.token });
              d != null &&
                d.data &&
                (d.data.error && (o.value = d.data.error),
                (((c = d == null ? void 0 : d.data) == null
                  ? void 0
                  : c.success) || 0) == 0 && m());
            } catch (d) {
              o.value = d;
            }
          }))(a.token);
        const s = F(),
          m = () =>
            A(this, null, function* () {
              const u = () =>
                A(this, null, function* () {
                  if ((yield b()) === !0) {
                    f();
                    return;
                  }
                  s.value = window.setTimeout(u, 2e3);
                });
              u();
            }),
          b = () =>
            A(this, null, function* () {
              return new Promise((u) =>
                A(this, null, function* () {
                  try {
                    const c = yield Y.App.Check.POST({
                      name: "ddnsto",
                      checkRunning: !0,
                    });
                    if (c != null && c.data) {
                      c.data.error && (o.value = c.data.error);
                      const d = c.data.result;
                      if ((d == null ? void 0 : d.status) == "running") {
                        u(!0);
                        return;
                      }
                    }
                    u(!1);
                  } catch (c) {
                    (o.value = c), u(!1);
                  }
                })
              );
            });
        Wt(() => {
          s.value && clearInterval(s.value);
        });
        const f = () =>
          A(this, null, function* () {
            var u;
            try {
              const c = yield Y.Guide.DdntoConfig.GET();
              if (
                c != null &&
                c.data &&
                (c.data.error && (o.value = c.data.error),
                (((u = c == null ? void 0 : c.data) == null
                  ? void 0
                  : u.success) || 0) == 0 && c.data.result)
              ) {
                const d = c.data.result;
                a.onDdnstoLocalConfig(d.netAddr, d.deviceId),
                  a.onSetup("ddnsto-bind");
              }
            } catch (c) {
              o.value = c;
            }
          });
        return (u, c) => (i(), r("div", q8, [R8, t("div", G8, k(o.value), 1)]));
      },
    });
  var U8 = S(V8, [["__scopeId", "data-v-c1f03ecc"]]);
  const W8 = { class: "action-main" },
    Z8 = T({
      props: {
        Close: { type: Function, required: !0 },
        url: { type: String, required: !0 },
      },
      setup(e) {
        const a = e,
          o = F("ddnsto-install"),
          n = (u) => {
            u != null ? (o.value = u) : s();
          },
          s = () => {
            a.Close && a.Close();
          },
          m = rt({
            sign: "",
            token: "",
            domain: a.url,
            netaddr: "",
            routerId: "",
          }),
          b = (u, c) => {
            (m.sign = u), (m.token = c);
          },
          f = (u, c) => {
            (m.netaddr = u), (m.routerId = c);
          };
        return (u, c) => (
          i(),
          M(
            ot,
            { type: 1 },
            {
              default: q(() => [
                t("div", W8, [
                  o.value == "ddnsto-install"
                    ? (i(), M(N8, { key: 0, onSetup: n }))
                    : o.value == "ddnsto-login"
                    ? (i(), M(v8, { key: 1, onSetup: n, onDdnstoConfig: b }))
                    : o.value == "ddnsto-run"
                    ? (i(),
                      M(
                        U8,
                        {
                          key: 2,
                          onSetup: n,
                          token: y(m).token,
                          onDdnstoLocalConfig: f,
                        },
                        null,
                        8,
                        ["token"]
                      ))
                    : o.value == "ddnsto-bind"
                    ? (i(),
                      M(
                        w8,
                        {
                          key: 3,
                          onSetup: n,
                          config: {
                            token: y(m).token,
                            sign: y(m).sign,
                            domain: y(m).domain,
                            netaddr: y(m).netaddr,
                            routerId: y(m).routerId,
                          },
                          domain: y(m).domain,
                          "onUpdate:domain":
                            c[0] || (c[0] = (d) => (y(m).domain = d)),
                        },
                        null,
                        8,
                        ["config", "domain"]
                      ))
                    : o.value == "ddnsto-save"
                    ? (i(),
                      M(
                        z8,
                        { key: 4, onSetup: n, target: y(m).domain },
                        null,
                        8,
                        ["target"]
                      ))
                    : $("", !0),
                ]),
              ]),
              _: 1,
            }
          )
        );
      },
    });
  var H8 = S(Z8, [["__scopeId", "data-v-3b80943c"]]);
  const J8 = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        H8,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    },
    K8 = { class: "action" },
    X8 = { class: "action-header" },
    Q8 = ["innerHTML"],
    t3 = { class: "action-footer" },
    e3 = T({
      props: {
        Close: Function,
        next: { type: Function },
        clear: { type: Function },
        continuer: { type: Function },
        nextTitle: { type: String, default: "\u786E\u5B9A" },
        clearTitle: { type: String, default: "\u8FD4\u56DE" },
        continuerTitle: { type: String, default: "\u7EE7\u7EED\u4FDD\u5B58" },
        title: { type: String, default: "\u63D0\u793A" },
        content: { type: String },
      },
      setup(e) {
        const a = e,
          o = () => {
            a.next && a.next(), a.Close && a.Close();
          },
          n = () => {
            a.clear && a.clear(), a.Close && a.Close();
          },
          s = () => {
            a.continuer && a.continuer(), a.Close && a.Close();
          };
        return (m, b) => (
          i(),
          M(
            ot,
            { Close: e.Close, type: 1 },
            {
              default: q(() => [
                t("div", K8, [
                  t("div", X8, k(e.title), 1),
                  t(
                    "div",
                    { class: "action-body", innerHTML: e.content },
                    null,
                    8,
                    Q8
                  ),
                  t("div", t3, [
                    e.clear
                      ? (i(),
                        r(
                          "div",
                          { key: 0, class: "clear", onClick: n },
                          k(e.clearTitle),
                          1
                        ))
                      : $("", !0),
                    t("div", { class: "next", onClick: o }, k(e.nextTitle), 1),
                    e.continuer
                      ? (i(),
                        r(
                          "div",
                          { key: 1, class: "next", onClick: s },
                          k(e.continuerTitle),
                          1
                        ))
                      : $("", !0),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["Close"]
          )
        );
      },
    });
  var a3 = S(e3, [["__scopeId", "data-v-a7ff9928"]]);
  const ce = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        a3,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    },
    st = (e) => (O("data-v-b4c796de"), (e = e()), N(), e),
    o3 = { class: "actioner-container" },
    n3 = ["onSubmit"],
    i3 = st(() =>
      t(
        "div",
        { class: "actioner-container_header" },
        [t("span", null, "\u57DF\u540D\u914D\u7F6E\u5411\u5BFC")],
        -1
      )
    ),
    r3 = { key: 0, class: "title_info" },
    s3 = st(() => t("p", null, " \u963F\u91CC\u4E91 ", -1)),
    d3 = st(() =>
      t(
        "span",
        null,
        " \u4E3A\u62E5\u6709\u52A8\u6001IP\u7684\u4E3B\u673A\u914D\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u53EF\u8BBF\u95EE\u57DF\u540D ",
        -1
      )
    ),
    c3 = st(() =>
      t(
        "a",
        {
          href: "https://doc.linkease.com/zh/guide/istoreos/basic/domain.html#%E9%98%BF%E9%87%8C%E4%BA%91",
          target: "_blank",
        },
        "\u67E5\u770B\u6559\u7A0B>>",
        -1
      )
    ),
    u3 = [s3, d3, c3],
    l3 = { key: 1, class: "title_info" },
    p3 = st(() => t("p", null, " dnspod ", -1)),
    f3 = st(() =>
      t(
        "span",
        null,
        " \u4E3A\u62E5\u6709\u52A8\u6001IP\u7684\u4E3B\u673A\u914D\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u53EF\u8BBF\u95EE\u57DF\u540D ",
        -1
      )
    ),
    m3 = st(() =>
      t(
        "a",
        {
          href: "https://doc.linkease.com/zh/guide/istoreos/basic/domain.html#dnspod",
          target: "_blank",
        },
        "\u67E5\u770B\u6559\u7A0B>>",
        -1
      )
    ),
    v3 = [p3, f3, m3],
    b3 = { key: 2, class: "title_info" },
    g3 = st(() => t("p", null, " \u82B1\u751F\u58F3 ", -1)),
    _3 = st(() =>
      t(
        "span",
        null,
        " \u4E3A\u62E5\u6709\u52A8\u6001IP\u7684\u4E3B\u673A\u914D\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684\u53EF\u8BBF\u95EE\u57DF\u540D ",
        -1
      )
    ),
    h3 = st(() =>
      t(
        "a",
        {
          href: "https://doc.linkease.com/zh/guide/istoreos/basic/domain.html#%E8%8A%B1%E7%94%9F%E5%A3%B3",
          target: "_blank",
        },
        "\u67E5\u770B\u6559\u7A0B>>",
        -1
      )
    ),
    x3 = [g3, _3, h3],
    k3 = { class: "label-item" },
    w3 = st(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "IP\u5730\u5740\u7248\u672C\uFF1A")],
        -1
      )
    ),
    y3 = { class: "label-item_value" },
    F3 = st(() => t("option", { value: "ipv4" }, "IPv4\u5730\u5740", -1)),
    C3 = st(() => t("option", { value: "ipv6" }, "IPv6\u5730\u5740", -1)),
    E3 = [F3, C3],
    $3 = st(() =>
      t(
        "div",
        { class: "label_tips" },
        [
          t(
            "svg",
            {
              width: "14px",
              height: "14px",
              viewBox: "0 0 14 14",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
            },
            [
              t(
                "g",
                {
                  id: "icon_alert",
                  stroke: "none",
                  "stroke-width": "1",
                  fill: "none",
                  "fill-rule": "evenodd",
                },
                [
                  t("g", { id: "Icon/Warning" }, [
                    t("rect", {
                      id: "\u77E9\u5F62",
                      fill: "#000000",
                      "fill-rule": "nonzero",
                      opacity: "0",
                      x: "0",
                      y: "0",
                      width: "14",
                      height: "14",
                    }),
                    t("path", {
                      d: "M7,0.875 C3.61757813,0.875 0.875,3.61757813 0.875,7 C0.875,10.3824219 3.61757813,13.125 7,13.125 C10.3824219,13.125 13.125,10.3824219 13.125,7 C13.125,3.61757813 10.3824219,0.875 7,0.875 Z M6.5625,4.046875 C6.5625,3.98671875 6.61171875,3.9375 6.671875,3.9375 L7.328125,3.9375 C7.38828125,3.9375 7.4375,3.98671875 7.4375,4.046875 L7.4375,7.765625 C7.4375,7.82578125 7.38828125,7.875 7.328125,7.875 L6.671875,7.875 C6.61171875,7.875 6.5625,7.82578125 6.5625,7.765625 L6.5625,4.046875 Z M7,10.0625 C6.63769531,10.0625 6.34375,9.76855469 6.34375,9.40625 C6.34375,9.04394531 6.63769531,8.75 7,8.75 C7.36230469,8.75 7.65625,9.04394531 7.65625,9.40625 C7.65625,9.76855469 7.36230469,10.0625 7,10.0625 Z",
                      id: "\u5F62\u72B6",
                      fill: "#FAAD14",
                    }),
                  ]),
                ]
              ),
            ]
          ),
          t(
            "span",
            { class: "info" },
            "\u8BBE\u5B9A\u54EA\u4E00\u4E2A IP \u5730\u5740\uFF08IPv4 \u6216 IPv6\uFF09\u4F1A\u88AB\u53D1\u9001\u7ED9 DDNS \u63D0\u4F9B\u5546"
          ),
        ],
        -1
      )
    ),
    D3 = { class: "label-item" },
    B3 = st(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u57DF\u540D\uFF1A")],
        -1
      )
    ),
    Y3 = { class: "label-item_value" },
    A3 = { class: "label-item" },
    S3 = st(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u7528\u6237\u540D\uFF1A")],
        -1
      )
    ),
    z3 = { class: "label-item_value" },
    P3 = { class: "label-item" },
    T3 = st(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u5BC6\u7801\uFF1A")],
        -1
      )
    ),
    I3 = { class: "label-item_value" },
    L3 = { class: "actioner-container_footer" },
    M3 = ["disabled"],
    O3 = T({
      props: {
        name: { type: String, default: "ali" },
        onSetup: { type: Function, required: !0 },
        target: { type: String, required: !0 },
      },
      emits: ["update:target"],
      setup(e, { emit: a }) {
        const o = e,
          n = F("ipv4"),
          s = F(o.name),
          m = F(""),
          b = F(""),
          f = F(""),
          u = F(!1),
          c = () => {
            o.onSetup("index");
          },
          d = () => {
            u.value = !0;
            const p = x.Loading("\u68C0\u6D4B\u4E2D...");
            Y.Network.CheckPublickNet.POST({ ipVersion: n.value })
              .then((h) => {
                var g, w;
                if (h != null && h.data) {
                  if ((g = h == null ? void 0 : h.data) != null && g.error) {
                    x.Warning(h == null ? void 0 : h.data.error);
                    return;
                  }
                  if (
                    (((w = h == null ? void 0 : h.data) == null
                      ? void 0
                      : w.success) || 0) == 0
                  ) {
                    const E = h.data.result;
                    E && E.address ? _() : v();
                    return;
                  }
                }
                throw "\u672A\u77E5\u9519\u8BEF";
              })
              .catch((h) => {
                x.Error(h);
              })
              .finally(() => {
                p.Close(), (u.value = !1);
              });
          },
          v = () => {
            ce({
              title: "\u6E29\u99A8\u63D0\u793A",
              nextTitle: "\u4F7F\u7528DDNSTO",
              continuerTitle: "\u7EE7\u7EED\u4FDD\u5B58",
              content:
                "\u68C0\u6D4B\u5230\u60A8\u7684wan\u53E3\u6CA1\u6709\u516C\u7F51IP\u6216\u8005IPv6\u5730\u5740\uFF0C\u53EF\u4EE5\u4F7F\u7528DDNSTO\u914D\u7F6E\u8FDC\u7A0B\u57DF\u540D\u8BBF\u95EE",
              next() {
                l();
              },
              continuer() {
                _();
              },
              clear() {},
            });
          },
          l = () => {
            o.onSetup("ddnsto");
          },
          _ = () => {
            u.value = !0;
            const p = x.Loading("\u914D\u7F6E\u4E2D...");
            Y.Guide.PostDdns.POST({
              ipVersion: n.value,
              serviceName: s.value,
              domain: m.value,
              userName: b.value,
              password: f.value,
            })
              .then((h) => {
                if (h != null && h.data) {
                  const { error: g, scope: w, success: E } = h.data;
                  if (g == "-100" && w == "guide.ddns") {
                    ce({
                      title: "\u6E29\u99A8\u63D0\u793A",
                      content:
                        "\u68C0\u6D4B\u5230\u4F60\u6709\u672A\u4FDD\u5B58\u7684\u914D\u7F6E\uFF0C\u53EF\u524D\u5F80\u9875\u9762\u53F3\u4E0A\u89D2\u70B9\u51FB\u67E5\u770B\uFF0C\u4FDD\u5B58\u5E76\u5E94\u7528\u6216\u8005\u6062\u590D\u914D\u7F6E\u540E\u7EE7\u7EED",
                      next() {},
                    });
                    return;
                  }
                  if (g) {
                    x.Warning(g);
                    return;
                  }
                  if ((E || 0) == 0) {
                    a("update:target", m.value), o.onSetup("ddns-success");
                    return;
                  }
                }
                throw "\u672A\u77E5\u9519\u8BEF";
              })
              .catch((h) => {
                x.Error(h);
              })
              .finally(() => {
                p.Close(), (u.value = !1);
              });
          };
        return (p, h) => (
          i(),
          r("div", o3, [
            t(
              "form",
              { class: "actioner-dns", onSubmit: it(d, ["prevent"]) },
              [
                i3,
                t(
                  "div",
                  { class: ct(["actioner-container_body", e.name]) },
                  [
                    e.name == "ali"
                      ? (i(), r("div", r3, u3))
                      : e.name == "dnspod"
                      ? (i(), r("div", l3, v3))
                      : e.name == "oray"
                      ? (i(), r("div", b3, x3))
                      : $("", !0),
                    t("div", k3, [
                      w3,
                      t("div", y3, [
                        P(
                          t(
                            "select",
                            {
                              name: "",
                              id: "",
                              "onUpdate:modelValue":
                                h[0] || (h[0] = (g) => (n.value = g)),
                            },
                            E3,
                            512
                          ),
                          [[Q, n.value]]
                        ),
                      ]),
                      $3,
                    ]),
                    t("div", D3, [
                      B3,
                      t("div", Y3, [
                        P(
                          t(
                            "input",
                            {
                              type: "text",
                              placeholder: "myhost.example.com",
                              "onUpdate:modelValue":
                                h[1] || (h[1] = (g) => (m.value = g)),
                              required: "",
                            },
                            null,
                            512
                          ),
                          [[J, m.value, void 0, { trim: !0 }]]
                        ),
                      ]),
                    ]),
                    t("div", A3, [
                      S3,
                      t("div", z3, [
                        P(
                          t(
                            "input",
                            {
                              type: "text",
                              "onUpdate:modelValue":
                                h[2] || (h[2] = (g) => (b.value = g)),
                              placeholder:
                                "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
                              required: "",
                            },
                            null,
                            512
                          ),
                          [[J, b.value, void 0, { trim: !0 }]]
                        ),
                      ]),
                    ]),
                    t("div", P3, [
                      T3,
                      t("div", I3, [
                        P(
                          t(
                            "input",
                            {
                              type: "password",
                              "onUpdate:modelValue":
                                h[3] || (h[3] = (g) => (f.value = g)),
                              placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
                              required: "",
                            },
                            null,
                            512
                          ),
                          [[J, f.value, void 0, { trim: !0 }]]
                        ),
                      ]),
                    ]),
                  ],
                  2
                ),
                t("div", L3, [
                  t(
                    "div",
                    { class: "close", onClick: c, type: "button" },
                    "\u8FD4\u56DE"
                  ),
                  t(
                    "button",
                    { class: "next save", type: "submit", disabled: u.value },
                    "\u4FDD\u5B58",
                    8,
                    M3
                  ),
                ]),
              ],
              40,
              n3
            ),
          ])
        );
      },
    });
  var Fe = S(O3, [["__scopeId", "data-v-b4c796de"]]);
  const N3 = { class: "action-main" },
    j3 = T({
      props: {
        Close: { type: Function, required: !0 },
        url: { type: String, required: !0 },
      },
      setup(e) {
        const a = e,
          o = F(""),
          n = F("index"),
          s = (u) => {
            if (u != null) {
              if (u == "ddnsto") {
                m();
                return;
              }
              n.value = u;
            } else b();
          },
          m = () => {
            b(), J8({ url: a.url });
          },
          b = () => {
            a.Close && a.Close();
          },
          f = F("ddnsto");
        return (u, c) => (
          i(),
          M(
            ot,
            { Close: e.Close, type: 1 },
            {
              default: q(() => [
                t("div", N3, [
                  n.value == "index"
                    ? (i(),
                      M(
                        Q4,
                        {
                          key: 0,
                          onSetup: s,
                          active: f.value,
                          "onUpdate:active":
                            c[0] || (c[0] = (d) => (f.value = d)),
                        },
                        null,
                        8,
                        ["active"]
                      ))
                    : n.value == "ddns-ali"
                    ? (i(),
                      M(
                        Fe,
                        {
                          key: 1,
                          onSetup: s,
                          target: o.value,
                          "onUpdate:target":
                            c[1] || (c[1] = (d) => (o.value = d)),
                          name: "ali",
                        },
                        null,
                        8,
                        ["target"]
                      ))
                    : n.value == "ddns-dnspod"
                    ? (i(),
                      M(
                        Fe,
                        {
                          key: 2,
                          onSetup: s,
                          target: o.value,
                          "onUpdate:target":
                            c[2] || (c[2] = (d) => (o.value = d)),
                          name: "dnspod",
                        },
                        null,
                        8,
                        ["target"]
                      ))
                    : n.value == "ddns-oray"
                    ? (i(),
                      M(
                        Fe,
                        {
                          key: 3,
                          onSetup: s,
                          target: o.value,
                          "onUpdate:target":
                            c[3] || (c[3] = (d) => (o.value = d)),
                          name: "oray",
                        },
                        null,
                        8,
                        ["target"]
                      ))
                    : n.value == "ddns-success"
                    ? (i(),
                      M(u8, { key: 4, onSetup: s, target: o.value }, null, 8, [
                        "target",
                      ]))
                    : $("", !0),
                ]),
              ]),
              _: 1,
            },
            8,
            ["Close"]
          )
        );
      },
    });
  var q3 = S(j3, [["__scopeId", "data-v-8a1e6470"]]);
  const R3 = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        q3,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    },
    Nt = (e) => (O("data-v-5d6e3347"), (e = e()), N(), e),
    G3 = { class: "app-container" },
    V3 = Nt(() =>
      t("span", null, [t("span", null, "\u8FDC\u7A0B\u57DF\u540D")], -1)
    ),
    U3 = { class: "app-container_domain" },
    W3 = { class: "domain-item" },
    Z3 = Nt(() =>
      t(
        "div",
        { class: "domain-item_name" },
        [t("span", null, "DDNSTO\uFF1A")],
        -1
      )
    ),
    H3 = { class: "domain-item_value" },
    J3 = ["href", "title"],
    K3 = Nt(() =>
      t(
        "a",
        {
          class: "item_btn",
          href: "https://www.kooldns.cn/app/#/devices",
          target: "_blank",
        },
        "\u63A7\u5236\u53F0",
        -1
      )
    ),
    X3 = { class: "domain-item" },
    Q3 = Nt(() =>
      t(
        "div",
        { class: "domain-item_name" },
        [t("span", null, "myddns_ipv4\uFF1A")],
        -1
      )
    ),
    t7 = { class: "domain-item_value" },
    e7 = { key: 0 },
    a7 = ["href"],
    o7 = { key: 2, href: "/cgi-bin/luci/admin/services/ddns" },
    n7 = Nt(() =>
      t(
        "svg",
        {
          t: "1653625385794",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "4476",
          width: "28",
          height: "28",
        },
        [
          t("path", {
            d: "M145.83060282785186 873.7309800675556h650.2280809434073c24.411293468444445 0 44.384169832296294-19.97287636385185 44.38416861866666-44.384169832296294V500.90395784533337c0-13.315251313777777-8.876834209185184-22.19208430933333-22.19208430933333-22.19208430933333s-22.19208430933333 8.876834209185184-22.19208430933333 22.19208430933333v326.22364444444446H145.83060282785186V179.1187305054815h616.9399532657777c13.315251313777777 0 22.19208430933333-8.876834209185184 22.19208552296296-22.19208552296296s-8.876834209185184-22.19208430933333-22.19208552296296-22.19208430933333H145.83060282785186c-24.411293468444445 0-44.384169832296294 19.97287636385185-44.38416861866666 44.384169832296294v650.2280797297777c0 24.411293468444445 19.97287636385185 44.384169832296294 44.38416861866666 44.384169832296294z",
            fill: "#666",
            "p-id": "4477",
          }),
          t("path", {
            d: "M887.0462301677038 203.53002276029633l-488.225862087111 488.2258633007407c-8.876834209185184 8.876834209185184-8.876834209185184 22.19208430933333 0 31.06891851851852 4.438417104592592 4.438417104592592 11.096042154666666 6.657625050074073 15.53445925925926 6.657625050074073s11.096042154666666-2.2192079454814815 15.53445925925926-6.657625050074073l490.4450712462222-490.4450712462222c8.876834209185184-8.876834209185184 8.876834209185184-22.19208430933333 0-31.06891851851852s-24.411293468444445-6.657625050074073-33.288127677629625 2.2192079454814815z",
            fill: "#666",
            "p-id": "4478",
          }),
        ],
        -1
      )
    ),
    i7 = [n7],
    r7 = { class: "domain-item" },
    s7 = Nt(() =>
      t(
        "div",
        { class: "domain-item_name" },
        [t("span", null, "myddns_ipv6\uFF1A")],
        -1
      )
    ),
    d7 = { class: "domain-item_value" },
    c7 = { key: 0 },
    u7 = ["href"],
    l7 = { key: 2, href: "/cgi-bin/luci/admin/services/ddns" },
    p7 = Nt(() =>
      t(
        "svg",
        {
          t: "1653625385794",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "4476",
          width: "28",
          height: "28",
        },
        [
          t("path", {
            d: "M145.83060282785186 873.7309800675556h650.2280809434073c24.411293468444445 0 44.384169832296294-19.97287636385185 44.38416861866666-44.384169832296294V500.90395784533337c0-13.315251313777777-8.876834209185184-22.19208430933333-22.19208430933333-22.19208430933333s-22.19208430933333 8.876834209185184-22.19208430933333 22.19208430933333v326.22364444444446H145.83060282785186V179.1187305054815h616.9399532657777c13.315251313777777 0 22.19208430933333-8.876834209185184 22.19208552296296-22.19208552296296s-8.876834209185184-22.19208430933333-22.19208552296296-22.19208430933333H145.83060282785186c-24.411293468444445 0-44.384169832296294 19.97287636385185-44.38416861866666 44.384169832296294v650.2280797297777c0 24.411293468444445 19.97287636385185 44.384169832296294 44.38416861866666 44.384169832296294z",
            fill: "#666",
            "p-id": "4477",
          }),
          t("path", {
            d: "M887.0462301677038 203.53002276029633l-488.225862087111 488.2258633007407c-8.876834209185184 8.876834209185184-8.876834209185184 22.19208430933333 0 31.06891851851852 4.438417104592592 4.438417104592592 11.096042154666666 6.657625050074073 15.53445925925926 6.657625050074073s11.096042154666666-2.2192079454814815 15.53445925925926-6.657625050074073l490.4450712462222-490.4450712462222c8.876834209185184-8.876834209185184 8.876834209185184-22.19208430933333 0-31.06891851851852s-24.411293468444445-6.657625050074073-33.288127677629625 2.2192079454814815z",
            fill: "#666",
            "p-id": "4478",
          }),
        ],
        -1
      )
    ),
    f7 = [p7],
    m7 = T({
      setup(e) {
        let a = !1,
          o;
        const n = F({}),
          s = function () {
            !a ||
              Y.Guide.GetDdns.GET()
                .then((u) => {
                  var c;
                  u != null &&
                    u.data &&
                    (((c = u == null ? void 0 : u.data) == null
                      ? void 0
                      : c.success) || 0) == 0 &&
                    u.data.result &&
                    (n.value = u.data.result);
                })
                .then(() => {
                  !a || (o = window.setTimeout(s, 3e3));
                });
          };
        At(() => {
          (a = !0), s();
        }),
          Wt(() => {
            o !== void 0 && window.clearTimeout(o), (a = !1);
          });
        const m = () => {
            R3({ url: n.value.ddnstoDomain });
          },
          b = H(() => {
            const u = n.value.ipv4Domain;
            return u != null && u != "" && u != "Stopped" ? `http://${u}` : u;
          }),
          f = H(() => {
            const u = n.value.ipv6Domain;
            return u != null && u != "" && u != "Stopped" ? `http://${u}` : u;
          });
        return (u, c) => {
          var d, v, l;
          return (
            i(),
            r("div", G3, [
              t("div", { class: "app-container_title" }, [
                V3,
                t("div", { class: "app-container_tool" }, [
                  t(
                    "div",
                    { class: "app-container_configure", onClick: m },
                    "\u5FEB\u901F\u914D\u7F6E"
                  ),
                ]),
              ]),
              t("ul", U3, [
                t("li", W3, [
                  Z3,
                  t("div", H3, [
                    t(
                      "a",
                      {
                        class: "configure",
                        href: (d = n.value) == null ? void 0 : d.ddnstoDomain,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: (v = n.value) == null ? void 0 : v.ddnstoDomain,
                      },
                      k((l = n.value) == null ? void 0 : l.ddnstoDomain),
                      9,
                      J3
                    ),
                    K3,
                  ]),
                ]),
                t("li", X3, [
                  Q3,
                  t("div", t7, [
                    y(b) == "Stopped"
                      ? (i(), r("span", e7, k(y(b)), 1))
                      : (i(),
                        r(
                          "a",
                          {
                            key: 1,
                            class: "configure",
                            href: y(b),
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          k(y(b)),
                          9,
                          a7
                        )),
                    y(b) ? (i(), r("a", o7, i7)) : $("", !0),
                  ]),
                ]),
                t("li", r7, [
                  s7,
                  t("div", d7, [
                    y(f) == "Stopped"
                      ? (i(), r("span", c7, k(y(f)), 1))
                      : (i(),
                        r(
                          "a",
                          {
                            key: 1,
                            class: "configure",
                            href: y(f),
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          k(y(f)),
                          9,
                          u7
                        )),
                    y(f) ? (i(), r("a", l7, f7)) : $("", !0),
                  ]),
                ]),
              ]),
            ])
          );
        };
      },
    });
  var v7 = S(m7, [["__scopeId", "data-v-5d6e3347"]]);
  const de = (e) =>
      !Array.isArray(window.quickstart_features) ||
      window.quickstart_features.indexOf(e) != -1,
    b7 = { class: "nas-container" },
    g7 = { class: "nas-container_card" },
    _7 = { class: "nas-container_card" },
    h7 = { key: 0, class: "nas-container_card" },
    x7 = { class: "nas-container_card" },
    k7 = { class: "nas-container_card" },
    w7 = T({
      setup(e) {
        return (a, o) => (
          i(),
          r("div", b7, [
            t("div", g7, [z(hc)]),
            t("div", _7, [z(Ql)]),
            y(de)("dockerd") ? (i(), r("div", h7, [z(k5)])) : $("", !0),
            t("div", x7, [z(I4)]),
            t("div", k7, [z(v7)]),
          ])
        );
      },
    });
  const kt = (e) => (O("data-v-a4f582d0"), (e = e()), N(), e),
    F7 = { class: "app-container" },
    C7 = { class: "app-container_title" },
    E7 = kt(() => t("span", null, "\u7CFB\u7EDF\u4FE1\u606F", -1)),
    $7 = { class: "more_icon", title: "\u67E5\u770B\u7CFB\u7EDF\u4FE1\u606F" },
    D7 = { class: "DeviceBlock" },
    B7 = kt(() =>
      t(
        "li",
        null,
        [
          t(
            "a",
            { href: "/cgi-bin/luci/admin/system/flash" },
            "\u5907\u4EFD\u5347\u7EA7"
          ),
        ],
        -1
      )
    ),
    A7 = { class: "item-label" },
    S7 = kt(() =>
      t(
        "div",
        { class: "item-label_key" },
        [t("span", null, "CPU\u6E29\u5EA6")],
        -1
      )
    ),
    z7 = { class: "item-label_value" },
    P7 = { class: "item-label" },
    T7 = kt(() =>
      t(
        "div",
        { class: "item-label_key" },
        [t("span", null, "CPU\u4F7F\u7528\u7387")],
        -1
      )
    ),
    I7 = { class: "item-label_value" },
    L7 = { class: "item-label" },
    M7 = kt(() =>
      t(
        "div",
        { class: "item-label_key" },
        [t("span", null, "\u5185\u5B58\u4F7F\u7528\u7387")],
        -1
      )
    ),
    O7 = { class: "item-label_value" },
    N7 = { class: "item-label" },
    j7 = kt(() =>
      t(
        "div",
        { class: "item-label_key" },
        [t("span", null, "\u56FA\u4EF6\u7248\u672C")],
        -1
      )
    ),
    q7 = { class: "item-label_value" },
    R7 = { class: "item-label" },
    G7 = kt(() =>
      t(
        "div",
        { class: "item-label_key" },
        [t("span", null, "\u5185\u6838\u7248\u672C")],
        -1
      )
    ),
    V7 = { class: "item-label_value" },
    U7 = { class: "item-label" },
    W7 = kt(() =>
      t(
        "div",
        { class: "item-label_key" },
        [t("span", null, "\u5DF2\u542F\u52A8")],
        -1
      )
    ),
    Z7 = { class: "item-label_value" },
    H7 = { class: "item-label" },
    J7 = kt(() =>
      t(
        "div",
        { class: "item-label_key" },
        [t("span", null, "\u7CFB\u7EDF\u65F6\u95F4")],
        -1
      )
    ),
    K7 = { class: "item-label_value" },
    X7 = T({
      setup(e) {
        const a = De(),
          o = H(() => a.version),
          n = H(() => a.systemStatus),
          s = F(!1),
          m = H(() => {
            var l;
            return ((l = n.value) == null ? void 0 : l.cpuUsage) || 0;
          }),
          b = H(() => {
            var l;
            return ((l = n.value) == null ? void 0 : l.cpuTemperature) || 0;
          }),
          f = H(() => {
            var _;
            const l =
              ((_ = n.value) == null ? void 0 : _.memAvailablePercentage) ||
              100;
            return 100 - l;
          }),
          u = Ut.stampForm;
        At(() => {});
        const c = () => {
            s.value = !s.value;
          },
          d = () => {
            c(),
              (() =>
                A(this, null, function* () {
                  let _ = x.Loading("");
                  try {
                    const p = yield Y.App.Check.POST({
                      name: "app-meta-netdata",
                    });
                    if ((_.Close(), p != null && p.data)) {
                      const { result: h, error: g } = p.data;
                      if ((g && x.Warning(g), h)) {
                        if (h.status == "installed")
                          location.href = "/cgi-bin/luci/admin/status/netdata";
                        else if (
                          confirm(
                            "\u68C0\u6D4B\u5230\u4F60\u5C1A\u672A\u5B89\u88C5NetData\u5B9E\u65F6\u76D1\u63A7\u63D2\u4EF6,\u662F\u5426\u5B89\u88C5\uFF1F"
                          )
                        ) {
                          _ = x.Loading("\u6B63\u5728\u5B89\u88C5\u4E2D...");
                          const w = yield v("app-meta-netdata");
                          _.Close(),
                            w
                              ? (x.Success("\u5B89\u88C5\u6210\u529F"),
                                (location.href =
                                  "/cgi-bin/luci/admin/status/netdata"))
                              : x.Warning("\u5B89\u88C5\u5931\u8D25");
                        }
                      }
                    }
                  } catch (p) {
                    x.Error(p);
                  }
                  _.Close();
                }))();
          },
          v = (l) =>
            A(this, null, function* () {
              return (
                Y.App.Install.POST({ name: l }).then(() => {}),
                new Promise((_, p) =>
                  A(this, null, function* () {
                    let h = 0;
                    const g = setInterval(
                      () =>
                        A(this, null, function* () {
                          if (h > 20) {
                            clearInterval(g), p(!1);
                            return;
                          }
                          const w = yield Y.App.Check.POST({ name: l });
                          if (w != null && w.data) {
                            const { result: E } = w.data;
                            if (
                              (E == null ? void 0 : E.status) == "installed"
                            ) {
                              clearInterval(g), _(!0);
                              return;
                            }
                          }
                          h++;
                        }),
                      3e3
                    );
                  })
                )
              );
            });
        return (l, _) => {
          var h, g, w, E;
          const p = ut("progress-item");
          return (
            i(),
            r("div", F7, [
              t("div", C7, [
                E7,
                t("span", $7, [z(Yt, { onClick: c })]),
                P(
                  t(
                    "div",
                    D7,
                    [
                      t("div", { class: "menu_background", onClick: c }),
                      t("ul", null, [
                        t("li", null, [
                          t("a", { onClick: d }, "\u7CFB\u7EDF\u76D1\u63A7"),
                        ]),
                        B7,
                      ]),
                    ],
                    512
                  ),
                  [[Ft, s.value]]
                ),
              ]),
              t("div", A7, [
                S7,
                t("div", z7, [
                  z(p, { value: y(b) / 1.5, text: `${y(b)}\u2103` }, null, 8, [
                    "value",
                    "text",
                  ]),
                ]),
              ]),
              t("div", P7, [
                T7,
                t("div", I7, [
                  z(p, { value: y(m), text: `${y(m)}%` }, null, 8, [
                    "value",
                    "text",
                  ]),
                ]),
              ]),
              t("div", L7, [
                M7,
                t("div", O7, [
                  z(p, { value: y(f), text: `${y(f)}%` }, null, 8, [
                    "value",
                    "text",
                  ]),
                ]),
              ]),
              t("div", N7, [
                j7,
                t("div", q7, [
                  t(
                    "span",
                    null,
                    k((h = y(o)) == null ? void 0 : h.firmwareVersion),
                    1
                  ),
                ]),
              ]),
              t("div", R7, [
                G7,
                t("div", V7, [
                  t(
                    "span",
                    null,
                    k((g = y(o)) == null ? void 0 : g.kernelVersion),
                    1
                  ),
                ]),
              ]),
              t("div", U7, [
                W7,
                t("div", Z7, [
                  t(
                    "span",
                    null,
                    k(y(u)((w = y(n)) == null ? void 0 : w.uptime)),
                    1
                  ),
                ]),
              ]),
              t("div", H7, [
                J7,
                t("div", K7, [
                  t(
                    "span",
                    null,
                    k((E = y(n)) == null ? void 0 : E.localtime),
                    1
                  ),
                ]),
              ]),
            ])
          );
        };
      },
    });
  var Q7 = S(X7, [["__scopeId", "data-v-a4f582d0"]]);
  const tp = {},
    ep = {
      t: "1649907260906",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "2793",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "40",
      height: "40",
    },
    ap = t(
      "path",
      {
        d: "M764.904497 251.418146 259.086289 251.418146c-143.076626 0-259.065314 115.989711-259.065314 259.065314 0 143.077649 115.988688 259.063267 259.065314 259.063267l505.818207 0c143.074579 0 259.063267-115.985618 259.063267-259.063267C1023.967764 367.407857 907.980099 251.418146 764.904497 251.418146zM764.904497 747.164974c-130.507356 0-236.682537-106.175181-236.682537-236.682537S634.397141 273.798876 764.904497 273.798876s236.683561 106.176205 236.683561 236.683561S895.411853 747.164974 764.904497 747.164974z",
        "p-id": "2794",
        fill: "#52C41A",
      },
      null,
      -1
    ),
    op = [ap];
  function np(e, a) {
    return i(), r("svg", ep, op);
  }
  var ip = S(tp, [["render", np]]);
  const rp = {},
    sp = {
      t: "1649902779464",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "2617",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "40",
      height: "40",
    },
    dp = t(
      "path",
      {
        d: "M309.794 819.848h404.239c169.953 0 307.726-137.774 307.726-307.727s-137.774-307.726-307.726-307.726h-404.239c-169.952 0-307.726 137.773-307.726 307.726s137.774 307.727 307.726 307.727zM309.445 233.5c154.23 0 279.268 125.031 279.268 279.268s-125.039 279.268-279.268 279.268c-154.24 0-279.269-125.033-279.269-279.268 0-154.238 125.030-279.268 279.269-279.268z",
        fill: "#bbb",
        "p-id": "2618",
        "data-spm-anchor-id": "a313x.7781069.0.i0",
        class: "selected",
      },
      null,
      -1
    ),
    cp = [dp];
  function up(e, a) {
    return i(), r("svg", sp, cp);
  }
  var lp = S(rp, [["render", up]]);
  const pp = (e) => ue.isValid(e),
    Bt = (e) => {
      const a = ue.IPv4.parse(e).toByteArray();
      return (a[0] << 24) | (a[1] << 16) | (a[2] << 8) | a[3];
    },
    We = (e) =>
      ue
        .fromByteArray([
          (e >> 24) & 255,
          (e >> 16) & 255,
          (e >> 8) & 255,
          e & 255,
        ])
        .toString(),
    fp = (e) => {
      if (!ue.IPv4.isIPv4(e)) return !1;
      let a = 0,
        o = Bt(e);
      for (let n = 31; n >= 0 && (o & (1 << n)) != 0; n--) a = a + (1 << n);
      return (~a & o) == 0;
    },
    mp = (e, a, o, n) => {
      let s = Bt(e) & Bt(a),
        m = Bt(o),
        b = Bt(n),
        u = ~Bt(a);
      return m < b && m > s + 1 && b < s + u;
    },
    vp = (e, a) => {
      let o = Bt(a),
        n = Bt(e) & o,
        s = ~o,
        m;
      return (
        s >= 105
          ? ((m = n | (s - 5)), (n = n | 100))
          : s >= 3
          ? ((m = n | (s - 1)), (n = n | 2))
          : ((n = n | 1), (m = n)),
        [We(n), We(m)]
      );
    };
  var Dt = {
    isValidMask: fp,
    isValidIP: pp,
    isValidMaskRange: mp,
    calcMaskRange: vp,
  };
  const gt = (e) => (O("data-v-1b8d3ee0"), (e = e()), N(), e),
    bp = ["onSubmit"],
    gp = gt(() =>
      t(
        "div",
        { class: "actioner-dns_header" },
        [t("span", null, "\u5185\u7F51\u914D\u7F6E")],
        -1
      )
    ),
    _p = { class: "actioner-dns_body" },
    hp = { class: "label-item" },
    xp = gt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "IPv4\u5730\u5740")],
        -1
      )
    ),
    kp = { class: "label-item_value" },
    wp = { class: "label-item" },
    yp = gt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "IPv4\u5B50\u7F51\u63A9\u7801")],
        -1
      )
    ),
    Fp = { class: "label-item_value" },
    Cp = { class: "mobie_icon" },
    Ep = { key: 1, class: "dhcp_info" },
    $p = { key: 2, class: "dhcp_info" },
    Dp = { class: "label-item" },
    Bp = gt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "IP\u6C60\u8D77\u59CB\u5730\u5740")],
        -1
      )
    ),
    Yp = { class: "label-item_value" },
    Ap = { class: "label-item" },
    Sp = gt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "IP\u6C60\u7ED3\u675F\u5730\u5740")],
        -1
      )
    ),
    zp = { class: "label-item_value" },
    Pp = { class: "actioner-dns_footer" },
    Tp = ["disabled"],
    Ip = { key: 1, class: "actioner-dns" },
    Lp = gt(() =>
      t(
        "div",
        { class: "actioner-dns_header" },
        [t("span", null, "\u66F4\u6362\u914D\u7F6E")],
        -1
      )
    ),
    Mp = { class: "actioner-dns_body" },
    Op = { key: 0, class: "setting_status" },
    Np = gt(() =>
      t(
        "div",
        { class: "success_icon" },
        [
          t(
            "svg",
            {
              t: "1642063181211",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "5062",
              width: "128",
              height: "128",
            },
            [
              t("path", {
                d: "M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-74.965333 550.4L346.453333 545.152a42.666667 42.666667 0 1 0-60.330666 60.330667l120.704 120.704a42.666667 42.666667 0 0 0 60.330666 0l301.653334-301.696a42.666667 42.666667 0 1 0-60.288-60.330667l-271.530667 271.488z",
                fill: "#52C41A",
                "p-id": "5063",
              }),
            ]
          ),
        ],
        -1
      )
    ),
    jp = gt(() =>
      t("div", { class: "config-message" }, "\u914D\u7F6E\u6210\u529F", -1)
    ),
    qp = ["href"],
    Rp = { key: 1, class: "setting_status" },
    Gp = gt(() =>
      t(
        "div",
        { class: "success_icon" },
        [
          t(
            "svg",
            {
              t: "1642063200324",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "5898",
              width: "128",
              height: "128",
            },
            [
              t("path", {
                d: "M549.044706 512l166.189176-166.249412a26.383059 26.383059 0 0 0 0-36.98447 26.383059 26.383059 0 0 0-37.044706 0L512 475.015529l-166.249412-166.249411a26.383059 26.383059 0 0 0-36.98447 0 26.383059 26.383059 0 0 0 0 37.044706L475.015529 512l-166.249411 166.249412a26.383059 26.383059 0 0 0 0 36.98447 26.383059 26.383059 0 0 0 37.044706 0L512 548.984471l166.249412 166.249411a26.383059 26.383059 0 0 0 36.98447 0 26.383059 26.383059 0 0 0 0-37.044706L548.984471 512zM512 1024a512 512 0 1 1 0-1024 512 512 0 0 1 0 1024z",
                fill: "#E84335",
                "p-id": "5899",
              }),
            ]
          ),
        ],
        -1
      )
    ),
    Vp = gt(() =>
      t("div", { class: "config-message" }, "\u914D\u7F6E\u5931\u8D25", -1)
    ),
    Up = gt(() =>
      t("p", null, "\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u914D\u7F6E", -1)
    ),
    Wp = { key: 2, class: "setting_status" },
    Zp = gt(() =>
      t(
        "div",
        { class: "success_icon" },
        [
          t(
            "svg",
            {
              width: "128px",
              height: "128px",
              viewBox: "0 0 128 128",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
            },
            [
              t(
                "g",
                {
                  id: "icon_yellow",
                  stroke: "none",
                  "stroke-width": "1",
                  fill: "none",
                  "fill-rule": "evenodd",
                },
                [
                  t("g", { id: "Icon/Warning" }, [
                    t("rect", {
                      id: "\u77E9\u5F62",
                      fill: "#000000",
                      "fill-rule": "nonzero",
                      opacity: "0",
                      x: "0",
                      y: "0",
                      width: "128",
                      height: "128",
                    }),
                    t("path", {
                      d: "M64,8 C33.075,8 8,33.075 8,64 C8,94.925 33.075,120 64,120 C94.925,120 120,94.925 120,64 C120,33.075 94.925,8 64,8 Z M60,37 C60,36.45 60.45,36 61,36 L67,36 C67.55,36 68,36.45 68,37 L68,71 C68,71.55 67.55,72 67,72 L61,72 C60.45,72 60,71.55 60,71 L60,37 Z M64,92 C60.6875,92 58,89.3125 58,86 C58,82.6875 60.6875,80 64,80 C67.3125,80 70,82.6875 70,86 C70,89.3125 67.3125,92 64,92 Z",
                      id: "\u5F62\u72B6",
                      fill: "#FAAD14",
                    }),
                  ]),
                ]
              ),
            ]
          ),
        ],
        -1
      )
    ),
    Hp = gt(() =>
      t("div", { class: "config-message" }, "\u914D\u7F6E\u8D85\u65F6", -1)
    ),
    Jp = gt(() =>
      t("p", null, "\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u914D\u7F6E", -1)
    ),
    Kp = T({
      props: { Close: { type: Function, required: !0 } },
      setup(e) {
        const a = e,
          o = F(0),
          n = F({
            lanIp: "",
            netMask: "255.255.255.0",
            enableDhcp: !1,
            dhcpStart: "",
            dhcpEnd: "",
          });
        F("");
        const s = F(!1);
        F(!0), F(!1);
        const m = F(""),
          b = F(2),
          f = F("timeout"),
          u = () => {
            n.value.enableDhcp = !1;
          },
          c = () => {
            n.value.enableDhcp = !0;
          };
        let d = !0;
        (() => {
          Y.Guide.GetLan.GET().then((g) => {
            g.data.result &&
              ((g.data.result.enableDhcp = g.data.result.enableDhcp || !1),
              (n.value = g.data.result),
              g.data.result.lanIp !== location.hostname && (d = !1));
          });
        })();
        const l = () => {
            const g = n.value;
            if (!Dt.isValidIP(g.lanIp)) {
              x.Error("IPv4\u5730\u5740\u683C\u5F0F\u9519\u8BEF");
              return;
            }
            if (!Dt.isValidMask(g.netMask)) {
              x.Error("IPv4\u5B50\u7F51\u63A9\u7801\u683C\u5F0F\u9519\u8BEF");
              return;
            }
            const w = Dt.calcMaskRange(g.lanIp, g.netMask);
            (g.dhcpStart = w[0]), (g.dhcpEnd = w[1]), (n.value = g);
          },
          _ = () => {
            const g = n.value;
            if (!Dt.isValidIP(g.lanIp)) {
              x.Error("IPv4\u5730\u5740\u683C\u5F0F\u9519\u8BEF");
              return;
            }
            if (!Dt.isValidMask(g.netMask)) {
              x.Error("IPv4\u5B50\u7F51\u63A9\u7801\u683C\u5F0F\u9519\u8BEF");
              return;
            }
            if (
              (g.enableDhcp && !Dt.isValidIP(g.dhcpStart)) ||
              !Dt.isValidIP(g.dhcpEnd) ||
              !Dt.isValidMaskRange(g.lanIp, g.netMask, g.dhcpStart, g.dhcpEnd)
            ) {
              x.Error(
                "DHCP\u7684IP\u6C60\u683C\u5F0F\u9519\u8BEF\u6216\u8D85\u51FA\u5B50\u7F51\u8303\u56F4"
              );
              return;
            }
            const w = x.Loading(
              "\u6B63\u5728\u914D\u7F6E\u2026\u8BF7\u7A0D\u7B49",
              30
            );
            Y.Guide.LanIp.POST(g)
              .then((E) => {
                var C;
                if (E != null && E.data) {
                  if ((E.data.success || 0) == 0) return;
                  if ((C = E.data) != null && C.error) throw E.data.error;
                }
                throw "\u672A\u77E5\u9519\u8BEF";
              })
              .then(
                () =>
                  new Promise((E, C) => {
                    const B = new Date().getTime() + 3e4,
                      D = d
                        ? location.protocol +
                          "//" +
                          g.lanIp +
                          (location.port ? ":" + location.port : "")
                        : location.origin,
                      j = D + "/luci-static/resources/icons/loading.gif",
                      W = () => {
                        new Date().getTime() > B
                          ? ((f.value = "timeout"), (o.value = 1), E())
                          : window.setTimeout(G, 2e3);
                      },
                      Z = () => {
                        (m.value = D + location.pathname),
                          (f.value = "success"),
                          (o.value = 1),
                          E(),
                          window.setTimeout(() => {
                            b.value = 1;
                          }, 1e3),
                          window.setTimeout(() => {
                            location.href = m.value;
                          }, 2e3);
                      },
                      G = () => {
                        console.log("check online ", j);
                        const R = new Image();
                        (R.onload = Z), (R.onerror = W), (R.src = j);
                      };
                    window.setTimeout(G, 5e3);
                  })
              )
              .catch((E) => {
                (f.value = "fail"), (o.value = 1), x.Error(E);
              })
              .finally(() => w.Close());
          },
          p = (g) => {
            g.preventDefault(), a.Close && a.Close();
          },
          h = (g) => {
            location.reload();
          };
        return (g, w) => (
          i(),
          M(
            ot,
            { Close: e.Close, type: 1 },
            {
              default: q(() => [
                o.value == 0
                  ? (i(),
                    r(
                      "form",
                      {
                        key: 0,
                        class: "actioner-dns",
                        onSubmit: it(_, ["prevent"]),
                      },
                      [
                        gp,
                        t("div", _p, [
                          t("div", hp, [
                            xp,
                            t("div", kp, [
                              P(
                                t(
                                  "input",
                                  {
                                    type: "text",
                                    placeholder: "192.168.100.1",
                                    "onUpdate:modelValue":
                                      w[0] ||
                                      (w[0] = (E) => (n.value.lanIp = E)),
                                    onChange: l,
                                  },
                                  null,
                                  544
                                ),
                                [[J, n.value.lanIp, void 0, { trim: !0 }]]
                              ),
                            ]),
                          ]),
                          t("div", wp, [
                            yp,
                            t("div", Fp, [
                              P(
                                t(
                                  "input",
                                  {
                                    type: "text",
                                    placeholder: "255.255.255.0",
                                    "onUpdate:modelValue":
                                      w[1] ||
                                      (w[1] = (E) => (n.value.netMask = E)),
                                    onChange: l,
                                  },
                                  null,
                                  544
                                ),
                                [[J, n.value.netMask, void 0, { trim: !0 }]]
                              ),
                            ]),
                          ]),
                          t("div", Cp, [
                            n.value.enableDhcp
                              ? (i(),
                                r("span", { key: 0, onClick: u }, [z(ip)]))
                              : $("", !0),
                            t("span", null, [
                              n.value.enableDhcp
                                ? $("", !0)
                                : (i(), M(lp, { key: 0, onClick: c })),
                            ]),
                            n.value.enableDhcp
                              ? (i(),
                                r("span", Ep, "\u4FEE\u6539DHCP\u670D\u52A1"))
                              : (i(),
                                r(
                                  "span",
                                  $p,
                                  "\u4FDD\u6301DHCP\u670D\u52A1\u8BBE\u7F6E"
                                )),
                          ]),
                          n.value.enableDhcp
                            ? (i(),
                              r(
                                L,
                                { key: 0 },
                                [
                                  t("div", Dp, [
                                    Bp,
                                    t("div", Yp, [
                                      P(
                                        t(
                                          "input",
                                          {
                                            type: "text",
                                            placeholder: "192.168.100.100",
                                            "onUpdate:modelValue":
                                              w[2] ||
                                              (w[2] = (E) =>
                                                (n.value.dhcpStart = E)),
                                          },
                                          null,
                                          512
                                        ),
                                        [
                                          [
                                            J,
                                            n.value.dhcpStart,
                                            void 0,
                                            { trim: !0 },
                                          ],
                                        ]
                                      ),
                                    ]),
                                  ]),
                                  t("div", Ap, [
                                    Sp,
                                    t("div", zp, [
                                      P(
                                        t(
                                          "input",
                                          {
                                            type: "text",
                                            placeholder: "192.168.100.100",
                                            "onUpdate:modelValue":
                                              w[3] ||
                                              (w[3] = (E) =>
                                                (n.value.dhcpEnd = E)),
                                          },
                                          null,
                                          512
                                        ),
                                        [
                                          [
                                            J,
                                            n.value.dhcpEnd,
                                            void 0,
                                            { trim: !0 },
                                          ],
                                        ]
                                      ),
                                    ]),
                                  ]),
                                ],
                                64
                              ))
                            : $("", !0),
                        ]),
                        t("div", Pp, [
                          t(
                            "button",
                            {
                              class: "cbi-button cbi-button-apply app-btn",
                              disabled: s.value,
                            },
                            "\u786E\u8BA4",
                            8,
                            Tp
                          ),
                          t(
                            "button",
                            {
                              class:
                                "cbi-button cbi-button-remove app-btn app-back",
                              onClick: p,
                            },
                            "\u53D6\u6D88"
                          ),
                        ]),
                      ],
                      40,
                      bp
                    ))
                  : o.value == 1
                  ? (i(),
                    r("div", Ip, [
                      Lp,
                      t("div", Mp, [
                        f.value == "success"
                          ? (i(),
                            r("div", Op, [
                              Np,
                              jp,
                              t(
                                "a",
                                { href: m.value, class: "NewAdress" },
                                k(b.value) +
                                  "s\u540E \u8DF3\u8F6C\u65B0\u5730\u5740",
                                9,
                                qp
                              ),
                            ]))
                          : f.value == "fail"
                          ? (i(),
                            r("div", Rp, [
                              Gp,
                              Vp,
                              Up,
                              t(
                                "button",
                                {
                                  class: "cbi-button cbi-button-apply app-btn",
                                  onClick: h,
                                },
                                "\u6211\u77E5\u9053\u4E86"
                              ),
                            ]))
                          : f.value == "timeout"
                          ? (i(),
                            r("div", Wp, [
                              Zp,
                              Hp,
                              Jp,
                              t(
                                "button",
                                {
                                  class: "cbi-button cbi-button-apply app-btn",
                                  onClick: h,
                                },
                                "\u6211\u77E5\u9053\u4E86"
                              ),
                            ]))
                          : $("", !0),
                      ]),
                    ]))
                  : $("", !0),
              ]),
              _: 1,
            },
            8,
            ["Close"]
          )
        );
      },
    });
  var Xp = S(Kp, [["__scopeId", "data-v-1b8d3ee0"]]);
  const Qp = () => {
      const e = document.createElement("div");
      document.body.appendChild(e);
      const a = tt(Xp, {
        Close: () => {
          o();
        },
      });
      a.mount(e);
      const o = () => {
        a.unmount(), e.remove();
      };
      return { Close: o };
    },
    pt = (e) => (O("data-v-cef3145a"), (e = e()), N(), e),
    tf = pt(() =>
      t(
        "div",
        { class: "actioner-dns_header" },
        [t("span", null, "\u6C99\u7BB1\u6A21\u5F0F\u914D\u7F6E\u5411\u5BFC")],
        -1
      )
    ),
    ef = { class: "actioner-dns_body" },
    af = pt(() =>
      t(
        "p",
        { class: "sandbox_info" },
        "\u4E00\u4E2A\u7B80\u6613\u6C99\u7BB1\uFF0C\u65B9\u4FBF\u7528\u6765\u5B9E\u9A8C\u7CFB\u7EDF\u914D\u7F6E\u548C\u7A0B\u5E8F\uFF0C\u65B9\u4FBF\u5F00\u53D1\u672A\u5B8C\u6210\u7684\u8F6F\u4EF6\uFF0C\u4F46\u4E0D\u4FDD\u62A4Docker\u548C\u786C\u76D8\u7684\u6570\u636E",
        -1
      )
    ),
    of = { key: 0, class: "disk_loading_icon" },
    nf = pt(() =>
      t(
        "div",
        { class: "loading icon" },
        [
          t(
            "svg",
            {
              t: "1631799919469",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "3453",
              width: "80",
              height: "80",
            },
            [
              t("path", {
                d: "M522.695111 1.991111c-26.339556 0.170667-47.416889 21.475556-47.672889 48.753778-0.284444 26.453333-0.056889 52.963556-0.056889 79.445333 0 27.249778-0.369778 54.528 0.113778 81.777778 0.483556 27.050667 22.016 47.132444 49.351111 46.904889a47.786667 47.786667 0 0 0 47.729778-47.445333c0.284444-53.76 0.284444-107.52-0.028444-161.251556-0.170667-27.676444-21.902222-48.355556-49.436445-48.184889m-195.896889 88.092445c-8.334222-14.222222-21.646222-21.276444-38.314666-21.333334-35.128889 0-56.576 36.949333-38.968889 68.152889a11616.995556 11616.995556 0 0 0 78.961777 137.614222 44.942222 44.942222 0 0 0 61.838223 16.896c21.304889-12.202667 29.667556-38.968889 17.379555-60.871111-26.453333-47.104-53.560889-93.866667-80.896-140.458666m-228.693333 234.524444c44.316444 25.799111 88.746667 51.342222 133.176889 76.970667 6.712889 3.896889 13.681778 6.912 21.703111 6.428444 20.138667 0.142222 35.953778-11.946667 41.301333-31.573333 5.006222-18.261333-2.673778-36.721778-20.224-46.990222-44.629333-26.026667-89.372444-51.882667-134.115555-77.710223-22.528-12.999111-47.815111-7.025778-59.818667 13.909334-12.231111 21.248-4.977778 45.624889 17.948444 58.965333m34.161778 235.975111c26.396444 0 52.821333 0.199111 79.217778-0.085333 23.409778-0.256 39.139556-16.412444 38.798222-39.139556-0.341333-21.617778-16.924444-37.347556-39.594666-37.376-51.655111-0.056889-103.310222-0.056889-154.965334 0.028445-24.177778 0.056889-40.704 15.985778-40.561778 38.684444 0.142222 22.186667 16.583111 37.745778 40.192 37.859556 25.656889 0.142222 51.285333 0.028444 76.913778 0m151.722667 100.238222a34.247111 34.247111 0 0 0-46.876445-12.942222 13764.778667 13764.778667 0 0 0-139.008 80.583111c-11.093333 6.485333-16.327111 16.867556-16.497777 25.372444 0.085333 30.549333 27.249778 47.957333 50.403555 35.072 47.160889-26.197333 93.724444-53.475556 140.145778-80.924444 17.180444-10.154667 21.504-30.378667 11.832889-47.160889m91.875555 101.660444c-14.250667-4.067556-27.619556 1.422222-35.84 15.644445a24375.466667 24375.466667 0 0 0-77.312 134.485333c-10.012444 17.550222-5.859556 35.669333 9.784889 45.027556 16.014222 9.557333 34.247111 4.039111 44.714667-13.994667 25.543111-44.088889 50.915556-88.263111 76.373333-132.352 3.299556-5.745778 5.688889-11.690667 5.745778-14.933333 0-17.834667-9.272889-29.866667-23.466667-33.877334m147.456 44.288c-16.384 0.085333-27.306667 11.918222-27.448888 30.151111-0.142222 25.372444-0.028444 50.716444-0.028445 76.060445h-0.085333c0 26.112-0.113778 52.252444 0.056889 78.364444 0.113778 18.261333 11.064889 30.065778 27.448889 30.208 16.952889 0.142222 28.046222-11.832889 28.103111-30.748444 0.113778-51.086222 0.142222-102.172444 0.056889-153.258667 0-18.773333-11.207111-30.862222-28.103112-30.776889m177.208889-26.112c-7.509333-12.8-21.902222-16.014222-33.792-8.874666a23.722667 23.722667 0 0 0-8.533333 32.995555c26.282667 46.279111 52.906667 92.330667 79.644444 138.353778 4.494222 7.765333 11.633778 11.946667 20.906667 11.804444 18.545778-0.142222 30.520889-19.342222 21.219556-35.868444-26.026667-46.392889-52.650667-92.444444-79.473778-138.410667m239.957333-41.187555c-45.283556-26.254222-90.595556-52.48-135.964444-78.648889-4.693333-2.702222-9.728-4.323556-15.36-2.958222-9.102222 2.247111-14.933333 8.049778-16.497778 17.095111-1.877333 10.894222 3.84 18.204444 12.885333 23.438222 29.809778 17.180444 59.562667 34.417778 89.344 51.598222 15.217778 8.789333 30.236444 17.976889 45.738667 26.225778 14.677333 7.793778 31.061333-2.048 31.061333-18.033778-0.056889-8.448-4.096-14.592-11.207111-18.716444m48.867556-234.638222c-24.888889-0.085333-49.749333 0-74.609778 0v-0.085334c-25.258667 0-50.517333-0.056889-75.776 0.028445-13.425778 0.056889-20.963556 6.343111-21.162667 17.294222-0.199111 11.150222 7.082667 17.521778 20.679111 17.550222 50.488889 0.113778 100.977778 0.142222 151.495112 0.085333 13.368889 0 21.191111-6.485333 21.390222-17.152 0.227556-10.808889-8.106667-17.664-22.016-17.720888m-187.960889-127.146667c45.084444-26.026667 90.140444-52.110222 135.168-78.222222 4.864-2.844444 8.248889-6.855111 8.135111-12.942223-0.142222-11.036444-11.207111-17.436444-21.504-11.548444-45.511111 26.055111-90.851556 52.394667-136.135111 78.819556-7.68 4.494222-10.524444 11.52-5.575111 19.569777 4.835556 7.850667 12.088889 8.817778 19.911111 4.323556m-122.311111-115.114667c5.205333-0.256 8.220444-3.413333 10.609778-7.651555 4.920889-8.647111 10.040889-17.208889 14.990222-25.827556 20.48-35.555556 40.931556-71.025778 61.297778-106.609778 5.091556-8.874667 3.015111-16.668444-4.778667-18.517333-7.68-1.848889-10.894222 3.697778-14.051556 9.159111l-68.778666 119.495111c-2.844444 4.977778-6.030222 9.870222-8.305778 15.104-3.128889 7.196444 1.678222 14.648889 9.045333 14.848",
                "p-id": "3454",
              }),
            ]
          ),
        ],
        -1
      )
    ),
    rf = pt(() =>
      t(
        "span",
        { class: "disk_loading_info" },
        "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
        -1
      )
    ),
    sf = [nf, rf],
    df = { key: 1, class: "disk_tips" },
    cf = pt(() =>
      t(
        "span",
        null,
        "\u68C0\u6D4B\u4E0D\u5230\u6302\u8F7D\u7684\u78C1\u76D8\u4FE1\u606F\uFF0C\u8BF7\u5148\u63D2\u4E0A\u78C1\u76D8\uFF0C\u5EFA\u8BAE\u4F7F\u7528U\u76D8\u6216\u8005\u79FB\u52A8\u786C\u76D8\uFF0C\u65B9\u4FBF\u88C5\u5378",
        -1
      )
    ),
    uf = { class: "label-item" },
    lf = pt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [
          t(
            "span",
            null,
            "\u76EE\u6807\u78C1\u76D8\uFF08\u5EFA\u8BAE\u9009\u62E9U\u76D8\u6216\u8005\u79FB\u52A8\u786C\u76D8\uFF0C\u65B9\u4FBF\u88C5\u5378\uFF09"
          ),
        ],
        -1
      )
    ),
    pf = { class: "label-item_value" },
    ff = pt(() =>
      t(
        "option",
        { value: "" },
        "\u8BF7\u9009\u62E9\u76EE\u6807\u78C1\u76D8",
        -1
      )
    ),
    mf = ["value"],
    vf = { class: "label-item" },
    bf = pt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [
          t(
            "span",
            null,
            "\u76EE\u6807\u5206\u533A\uFF08\u5206\u533A\u5927\u5C0F\u987B\u5927\u4E8E8G\uFF0C\u5C06\u6B64\u5206\u533A\u4F5C\u4E3A\u5916\u90E8 overlay \u4F7F\u7528\uFF09"
          ),
        ],
        -1
      )
    ),
    gf = { class: "label-item_value" },
    _f = pt(() =>
      t(
        "option",
        { selected: "true", value: "" },
        "\u8BF7\u9009\u62E9\u76EE\u6807\u5206\u533A",
        -1
      )
    ),
    hf = ["value", "disabled"],
    xf = { class: "sandbox_tips" },
    kf = pt(() =>
      t(
        "span",
        null,
        "\u6B64\u64CD\u4F5C\u4F1A\u5C06\u4F1A\u5220\u9664\u8BE5\u5206\u533A\u5168\u90E8\u6570\u636E",
        -1
      )
    ),
    wf = { class: "actioner-dns_footer" },
    yf = ["disabled"],
    Ff = { key: 1, class: "actioner-tips" },
    Cf = pt(() =>
      t(
        "div",
        { class: "actioner-tips_header" },
        [t("span", null, "\u6E29\u99A8\u63D0\u793A")],
        -1
      )
    ),
    Ef = pt(() =>
      t(
        "div",
        { class: "actioner-tips_body" },
        [
          t(
            "p",
            { class: "sandbox_info" },
            "\u6B64\u64CD\u4F5C\u4F1A\u5C06\u4F1A\u5220\u9664\u8BE5\u5206\u533A\u5168\u90E8\u6570\u636E\uFF0C\u5E76\u4F1A\u683C\u5F0F\u5316\u6210EXT4,\u91CD\u542F\u540E\u53EF\u8FDB\u5165\u6C99\u7BB1\u6A21\u5F0F\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F"
          ),
        ],
        -1
      )
    ),
    $f = ["onSubmit"],
    Df = pt(() =>
      t(
        "div",
        { class: "actioner-dns_header" },
        [t("span", null, "\u6C99\u7BB1\u6A21\u5F0F\u914D\u7F6E\u5411\u5BFC")],
        -1
      )
    ),
    Bf = { class: "actioner-dns_body" },
    Yf = pt(() =>
      t(
        "p",
        { class: "sandbox_info" },
        "\u4E00\u4E2A\u7B80\u6613\u6C99\u7BB1\uFF0C\u65B9\u4FBF\u7528\u6765\u5B9E\u9A8C\u7CFB\u7EDF\u914D\u7F6E\u548C\u7A0B\u5E8F\uFF0C\u65B9\u4FBF\u5F00\u53D1\u672A\u5B8C\u6210\u7684\u8F6F\u4EF6\uFF0C\u4F46\u4E0D\u4FDD\u62A4Docker\u548C\u786C\u76D8\u7684\u6570\u636E",
        -1
      )
    ),
    Af = { class: "sandbox_info timeout" },
    Sf = K("\u5373\u5C06\u91CD\u542F\u8BBE\u5907 "),
    zf = pt(() =>
      t(
        "p",
        { class: "sandbox_roboot_tips" },
        [
          K(
            "\u7B49\u5F85\u8BBE\u5907\u91CD\u542F\uFF0C\u91CD\u542F\u5B8C\u6210\u540E"
          ),
          t(
            "span",
            { class: "sandbox_roboot_refresh" },
            "\u8BF7\u5237\u65B0\u754C\u9762"
          ),
        ],
        -1
      )
    ),
    Pf = { key: 3, class: "actioner-tips" },
    Tf = pt(() =>
      t(
        "div",
        { class: "actioner-tips_header" },
        [t("span", null, "\u9519\u8BEF")],
        -1
      )
    ),
    If = { class: "actioner-tips_body" },
    Lf = { class: "sandbox_info" },
    Mf = T({
      props: { Close: { type: Function, required: !0 } },
      setup(e) {
        const a = e,
          o = F(0);
        F("disk");
        const n = F(""),
          s = F(3),
          m = F(""),
          b = F([]),
          f = F(""),
          u = F(null);
        (() => {
          Y.Nas.SandboxDisks.GET()
            .then((w) => {
              var E;
              if (w != null && w.data && (E = w.data) != null && E.result) {
                u.value = w.data.result;
                return;
              }
              throw "\u52A0\u8F7D\u78C1\u76D8\u4FE1\u606F\u5931\u8D25";
            })
            .catch((w) => {
              (n.value = w), (o.value = 3);
            });
        })();
        const d = () =>
            Y.System.Reboot.POST({ name: m.value, path: f.value }).then((w) => {
              var E;
              if (
                !(
                  w != null &&
                  w.data &&
                  (((E = w == null ? void 0 : w.data) == null
                    ? void 0
                    : E.success) || 0) == 0
                )
              )
                throw "\u672A\u77E5\u9519\u8BEF";
            }),
          v = (w) => {
            var E, C;
            (f.value = ""),
              (b.value =
                (m.value &&
                  ((C =
                    (E = u.value) == null
                      ? void 0
                      : E.disks.find((B) => B.path == m.value)) == null
                    ? void 0
                    : C.childrens)) ||
                []);
          },
          l = () => {
            s.value > 0 && ((s.value -= 1), window.setTimeout(l, 1e3));
          },
          _ = (w) => {
            w.preventDefault(), a.Close && a.Close();
          },
          p = () => {
            new Promise((w, E) => {
              const C = "/luci-static/resources/icons/loading.gif",
                B = () => {
                  window.setTimeout(D, 2e3);
                },
                D = () => {
                  const j = new Image();
                  (j.onload = w), (j.onerror = B), (j.src = C);
                };
              window.setTimeout(D, 1e4);
            }).then(() => {
              window.setTimeout(() => {
                location.reload();
              }, 2e3);
            });
          },
          h = (w) => {
            const E = x.Loading("\u52A0\u8F7D\u4E2D...");
            Y.Nas.Sandbox.POST({ path: f.value })
              .then((C) => {
                var B;
                if (C != null && C.data) {
                  if ((C.data.success || 0) == 0)
                    return (o.value = 2), window.setTimeout(l, 1e3), d();
                  if ((B = C.data) != null && B.error) throw C.data.error;
                }
                throw "\u672A\u77E5\u9519\u8BEF";
              })
              .then(p)
              .catch((C) => x.Error(C))
              .finally(() => E.Close());
          },
          g = () => {
            o.value = 0;
          };
        return (w, E) => (
          i(),
          M(
            ot,
            { Close: e.Close, type: 1 },
            {
              default: q(() => [
                o.value == 0
                  ? (i(),
                    r(
                      "form",
                      {
                        key: 0,
                        class: "actioner-dns",
                        onSubmit:
                          E[2] ||
                          (E[2] = it((C) => (o.value = 1), ["prevent"])),
                      },
                      [
                        tf,
                        t("div", ef, [
                          af,
                          u.value ? $("", !0) : (i(), r("div", of, sf)),
                          u.value && u.value.disks.length == 0
                            ? (i(), r("div", df, [z(ht), cf]))
                            : $("", !0),
                          u.value && u.value.disks.length > 0
                            ? (i(),
                              r(
                                L,
                                { key: 2 },
                                [
                                  t("div", uf, [
                                    lf,
                                    t("div", pf, [
                                      P(
                                        t(
                                          "select",
                                          {
                                            name: "",
                                            id: "",
                                            onChange: v,
                                            "onUpdate:modelValue":
                                              E[0] ||
                                              (E[0] = (C) => (m.value = C)),
                                          },
                                          [
                                            ff,
                                            (i(!0),
                                            r(
                                              L,
                                              null,
                                              V(
                                                u.value.disks,
                                                (C, B) => (
                                                  i(),
                                                  r(
                                                    "option",
                                                    { value: C.path, key: B },
                                                    k(C.venderModel) +
                                                      "\uFF08" +
                                                      k(C.size) +
                                                      "\uFF09 ",
                                                    9,
                                                    mf
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ],
                                          544
                                        ),
                                        [[Q, m.value]]
                                      ),
                                    ]),
                                  ]),
                                  t("div", vf, [
                                    bf,
                                    t("div", gf, [
                                      P(
                                        t(
                                          "select",
                                          {
                                            name: "",
                                            id: "",
                                            "onUpdate:modelValue":
                                              E[1] ||
                                              (E[1] = (C) => (f.value = C)),
                                          },
                                          [
                                            _f,
                                            (i(!0),
                                            r(
                                              L,
                                              null,
                                              V(
                                                b.value,
                                                (C, B) => (
                                                  i(),
                                                  r(
                                                    "option",
                                                    {
                                                      value: C.path,
                                                      key: B,
                                                      disabled:
                                                        C.sizeInt <
                                                        (1 << 30) * 2,
                                                    },
                                                    k(C.name) +
                                                      "\uFF08" +
                                                      k(
                                                        C.filesystem ||
                                                          "\u672A\u683C\u5F0F\u5316"
                                                      ) +
                                                      "\uFF09" +
                                                      k(C.total),
                                                    9,
                                                    hf
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ],
                                          512
                                        ),
                                        [[Q, f.value]]
                                      ),
                                    ]),
                                  ]),
                                  t("div", xf, [z(ht), kf]),
                                ],
                                64
                              ))
                            : $("", !0),
                        ]),
                        t("div", wf, [
                          t(
                            "button",
                            {
                              class: "cbi-button cbi-button-apply app-btn",
                              disabled: !f.value,
                            },
                            "\u5F00\u542F\u6C99\u7BB1",
                            8,
                            yf
                          ),
                          t(
                            "button",
                            {
                              class:
                                "cbi-button cbi-button-remove app-btn app-back",
                              onClick: _,
                            },
                            "\u53D6\u6D88"
                          ),
                        ]),
                      ],
                      32
                    ))
                  : $("", !0),
                o.value == 1
                  ? (i(),
                    r("div", Ff, [
                      Cf,
                      Ef,
                      t("div", { class: "actioner-tips_footer" }, [
                        t(
                          "button",
                          {
                            class: "cbi-button cbi-button-apply app-btn",
                            onClick: h,
                          },
                          "\u7EE7\u7EED"
                        ),
                        t(
                          "button",
                          {
                            class:
                              "cbi-button cbi-button-remove app-btn app-back",
                            onClick: g,
                          },
                          "\u53D6\u6D88"
                        ),
                      ]),
                    ]))
                  : $("", !0),
                o.value == 2
                  ? (i(),
                    r(
                      "form",
                      {
                        key: 2,
                        class: "actioner-dns",
                        onSubmit: it(h, ["prevent"]),
                      },
                      [
                        Df,
                        t("div", Bf, [
                          Yf,
                          t("p", Af, [
                            Sf,
                            t(
                              "span",
                              null,
                              "\uFF08" + k(s.value) + "s\uFF09",
                              1
                            ),
                          ]),
                          zf,
                        ]),
                      ],
                      40,
                      $f
                    ))
                  : $("", !0),
                o.value == 3
                  ? (i(),
                    r("div", Pf, [
                      Tf,
                      t("div", If, [t("p", Lf, k(n.value), 1)]),
                      t("div", { class: "actioner-tips_footer" }, [
                        t(
                          "button",
                          {
                            class:
                              "cbi-button cbi-button-remove app-btn app-back",
                            onClick: g,
                          },
                          "\u53D6\u6D88"
                        ),
                      ]),
                    ]))
                  : $("", !0),
              ]),
              _: 1,
            },
            8,
            ["Close"]
          )
        );
      },
    });
  var Of = S(Mf, [["__scopeId", "data-v-cef3145a"]]);
  const Nf = () => {
      const e = document.createElement("div");
      document.body.appendChild(e);
      const a = tt(Of, {
        Close: () => {
          o();
        },
      });
      a.mount(e);
      const o = () => {
        a.unmount(), e.remove();
      };
      return { Close: o };
    },
    ma = (e) => (O("data-v-5be8f1c6"), (e = e()), N(), e),
    jf = { key: 0, class: "actioner-dns" },
    qf = ma(() =>
      t(
        "div",
        { class: "actioner-dns_header" },
        [t("span", null, "\u6C99\u7BB1\u6A21\u5F0F\u914D\u7F6E\u5411\u5BFC")],
        -1
      )
    ),
    Rf = ma(() =>
      t(
        "div",
        { class: "actioner-dns_body" },
        [
          t(
            "p",
            { class: "sandbox_info" },
            "\u4E00\u4E2A\u7B80\u6613\u6C99\u7BB1\uFF0C\u65B9\u4FBF\u7528\u6765\u5B9E\u9A8C\u7CFB\u7EDF\u914D\u7F6E\u548C\u7A0B\u5E8F\uFF0C\u65B9\u4FBF\u5F00\u53D1\u672A\u5B8C\u6210\u7684\u8F6F\u4EF6\uFF0C\u4F46\u4E0D\u4FDD\u62A4 Docker \u548C\u786C\u76D8\u7684\u6570\u636E"
          ),
          t("div", { class: "sandbox_environment" }, [
            t(
              "p",
              null,
              "\u5F53\u524D\u5904\u4E8E\u6C99\u7BB1\u73AF\u5883\uFF1A"
            ),
            t(
              "p",
              null,
              "1\u3001\u70B9\u51FB\u201C\u63D0\u4EA4\u201D\u53EF\u5C06\u53D8\u66F4\u5408\u5E76\u5230\u975E\u6C99\u7BB1\u73AF\u5883"
            ),
            t(
              "p",
              null,
              "2\u3001\u70B9\u51FB\u201C\u91CD\u7F6E\u201D\u53EF\u5C06\u6C99\u7BB1\u6062\u590D\u5230\u521D\u59CB\u72B6\u6001"
            ),
            t(
              "p",
              null,
              "3\u3001\u70B9\u51FB\u201C\u9000\u51FA\u201D\u53EF\u9000\u51FA\u6C99\u7BB1\u73AF\u5883\uFF0C\u5E76\u653E\u5F03\u6C99\u7BB1\u4E2D\u7684\u6570\u636E"
            ),
          ]),
          t("div", { class: "sandbox_environment_info" }, [
            K(
              "\u4EE5\u4E0A\u64CD\u4F5C\u90FD\u5C06\u91CD\u542F\u8BBE\u5907\uFF0C\u8BBE\u5907\u91CD\u542F\u5B8C\u6210\u540E\u4F1A\u81EA\u52A8\u5237\u65B0\u9875\u9762\u3002\u5982\u679C IP \u53D8\u5316\u53EF\u80FD\u9700\u8981"
            ),
            t(
              "span",
              { class: "sandbox_environment_reboot" },
              "\u624B\u52A8\u5728\u5730\u5740\u680F\u8F93\u5165\u5730\u5740"
            ),
            t("p", { class: "sandbox_environment_tex" }, [
              K(" \u5982\u9700"),
              t("b", null, "\u4E34\u65F6"),
              K(
                "\u9000\u51FA\u6C99\u7BB1\u73AF\u5883\uFF0C\u8BF7\u5C06\u8BBE\u5907\u5173\u673A\u540E\u62D4\u51FA\u76F8\u5173\u78C1\u76D8\uFF0C\u542F\u52A8\u524D\u63D2\u5165\u76F8\u5173\u78C1\u76D8\u53EF\u518D\u6B21\u8FDB\u5165\u6C99\u7BB1\u3002"
              ),
              t("br"),
              K(
                " \u6CE8\u610F\u4E34\u65F6\u9000\u51FA\u6C99\u7BB1\u73AF\u5883\u4EE5\u540E\u5347\u7EA7\u56FA\u4EF6\u4F1A\u5BFC\u81F4\u4E4B\u524D\u7684\u6C99\u7BB1\u6570\u636E\u65E0\u6548 "
              ),
            ]),
          ]),
        ],
        -1
      )
    ),
    Gf = { class: "actioner-dns_footer" },
    Vf = ["disabled"],
    Uf = ["disabled"],
    Wf = ["disabled"],
    Zf = T({
      props: { Close: { type: Function, required: !0 } },
      setup(e) {
        const a = e,
          o = F(0),
          n = F(!1),
          s = () => {
            new Promise((c, d) => {
              const v = "/luci-static/resources/icons/loading.gif",
                l = () => {
                  window.setTimeout(_, 2e3);
                },
                _ = () => {
                  const p = new Image();
                  (p.onload = c), (p.onerror = l), (p.src = v);
                };
              window.setTimeout(_, 1e4);
            }).then(() => {
              window.setTimeout(() => {
                location.reload();
              }, 2e3);
            });
          },
          m = () => {
            n.value = !0;
            const c = x.Loading("\u63D0\u4EA4\u4E2D...");
            Y.Nas.SandboxCommit.POST()
              .then((d) => {
                var v, l;
                if (d != null && d.data)
                  if (
                    (((v = d == null ? void 0 : d.data) == null
                      ? void 0
                      : v.success) || 0) == 0
                  ) {
                    x.Loading("\u8BBE\u5907\u91CD\u542F\u4E2D...");
                    return;
                  } else
                    (l = d == null ? void 0 : d.data) != null &&
                      l.error &&
                      alert(d.data.error);
                throw "\u672A\u77E5\u9519\u8BEF";
              })
              .then(s)
              .catch((d) => {
                x.Error(d), (n.value = !1);
              })
              .finally(() => c.Close());
          },
          b = () => {
            n.value = !0;
            const c = x.Loading("\u91CD\u7F6E\u4E2D...");
            Y.Nas.SandboxReset.POST()
              .then((d) => {
                var v, l;
                if (d != null && d.data)
                  if (
                    (((v = d == null ? void 0 : d.data) == null
                      ? void 0
                      : v.success) || 0) == 0
                  ) {
                    x.Loading(
                      "\u8BBE\u5907\u91CD\u542F\u4E2D... \u82E5\u9875\u9762\u957F\u65F6\u95F4\u672A\u5237\u65B0\u53EF\u80FD\u9700\u8981\u624B\u52A8\u586B\u5199\u5730\u5740"
                    );
                    return;
                  } else
                    (l = d == null ? void 0 : d.data) != null &&
                      l.error &&
                      alert(d.data.error);
                throw "\u672A\u77E5\u9519\u8BEF";
              })
              .then(s)
              .catch((d) => {
                x.Error(d), (n.value = !1);
              })
              .finally(() => c.Close());
          },
          f = () => {
            if (
              !confirm(
                "\u786E\u5B9A\u653E\u5F03\u6C99\u7BB1\u4E2D\u7684\u6570\u636E\uFF1F\u518D\u6B21\u8FDB\u5165\u6C99\u7BB1\u9700\u8981\u91CD\u65B0\u683C\u5F0F\u5316\u76F8\u5E94\u78C1\u76D8\u5206\u533A"
              )
            )
              return;
            n.value = !0;
            const c = x.Loading("\u6267\u884C\u4E2D...");
            Y.Nas.SandboxExit.POST()
              .then((d) => {
                var v, l;
                if (d != null && d.data)
                  if (
                    (((v = d == null ? void 0 : d.data) == null
                      ? void 0
                      : v.success) || 0) == 0
                  ) {
                    x.Loading(
                      "\u8BBE\u5907\u91CD\u542F\u4E2D... \u82E5\u9875\u9762\u957F\u65F6\u95F4\u672A\u5237\u65B0\u53EF\u80FD\u9700\u8981\u624B\u52A8\u586B\u5199\u5730\u5740"
                    );
                    return;
                  } else
                    (l = d == null ? void 0 : d.data) != null &&
                      l.error &&
                      alert(d.data.error);
                throw "\u672A\u77E5\u9519\u8BEF";
              })
              .then(s)
              .catch((d) => {
                x.Error(d), (n.value = !1);
              })
              .finally(() => c.Close());
          },
          u = (c) => {
            c.preventDefault(), a.Close && a.Close();
          };
        return (c, d) => (
          i(),
          M(
            ot,
            { Close: e.Close, type: 1 },
            {
              default: q(() => [
                o.value == 0
                  ? (i(),
                    r("div", jf, [
                      qf,
                      Rf,
                      t("div", Gf, [
                        t(
                          "button",
                          {
                            class: "cbi-button cbi-button-apply app-btn",
                            onClick: m,
                            disabled: n.value,
                          },
                          "\u63D0\u4EA4",
                          8,
                          Vf
                        ),
                        t(
                          "button",
                          {
                            class: "cbi-button cbi-button-apply app-btn",
                            onClick: b,
                            disabled: n.value,
                          },
                          "\u91CD\u7F6E",
                          8,
                          Uf
                        ),
                        t(
                          "button",
                          {
                            class: "cbi-button cbi-button-apply app-btn",
                            onClick: f,
                            disabled: n.value,
                          },
                          "\u9000\u51FA",
                          8,
                          Wf
                        ),
                        t(
                          "button",
                          {
                            class:
                              "cbi-button cbi-button-remove app-btn app-back",
                            onClick: u,
                          },
                          "\u53D6\u6D88"
                        ),
                      ]),
                    ]))
                  : $("", !0),
              ]),
              _: 1,
            },
            8,
            ["Close"]
          )
        );
      },
    });
  var Hf = S(Zf, [["__scopeId", "data-v-5be8f1c6"]]);
  const Jf = () => {
      const e = document.createElement("div");
      document.body.appendChild(e);
      const a = tt(Hf, {
        Close: () => {
          o();
        },
      });
      a.mount(e);
      const o = () => {
        a.unmount(), e.remove();
      };
      return { Close: o };
    },
    Kf = { class: "nav-container" },
    Xf = ["onClick"],
    Qf = {
      key: 0,
      class: "btn_styles color3 app-update-button",
      onclick: "window.location.href='/cgi-bin/luci/admin/system/ota'",
    },
    t9 = K(" \u56FA\u4EF6\u66F4\u65B0 "),
    e9 = { key: 0 },
    a9 = T({
      setup(e) {
        const a = De(),
          o = H(() => a.checkUpdate.needUpdate);
        F(!1), F(!0);
        const n = F(),
          s = () => {
            oa();
          },
          m = () => {
            Nf();
          },
          b = () => {
            Jf();
          },
          f = () => {
            alert(
              "\u8BE5\u56FA\u4EF6\u4E0D\u652F\u6301\u6C99\u7BB1\u6A21\u5F0F"
            );
          },
          u = () => {
            Qp();
          },
          c = () => {
            ra();
          },
          d = () => {
            window.open(`http://${window.location.hostname}:7681/`, "_blank");
          };
        return (
          de("sandbox") &&
            Y.Nas.GetSandbox.GET()
              .then((l) => {
                var _, p, h;
                l != null &&
                  l.data &&
                  ((((_ = l == null ? void 0 : l.data) == null
                    ? void 0
                    : _.success) || 0) == 0
                    ? (p = l == null ? void 0 : l.data) != null &&
                      p.result &&
                      (n.value = l.data.result)
                    : (h = l == null ? void 0 : l.data) != null &&
                      h.error &&
                      alert(l.data.error));
              })
              .catch((l) => x.Error(l)),
          (v, l) => {
            var p, h, g;
            const _ = ut("router-link");
            return (
              i(),
              r("div", Kf, [
                z(
                  _,
                  { to: "/network", custom: "" },
                  {
                    default: q(({ navigate: w }) => [
                      t(
                        "button",
                        { class: "btn_styles color1", onClick: w },
                        "\u7F51\u7EDC\u5411\u5BFC",
                        8,
                        Xf
                      ),
                    ]),
                    _: 1,
                  }
                ),
                t(
                  "button",
                  { class: "btn_styles color2 app-btn-ttyd", onClick: d },
                  "\u7EC8\u7AEF"
                ),
                y(de)("ota")
                  ? (i(),
                    r("button", Qf, [t9, y(o) ? (i(), r("i", e9)) : $("", !0)]))
                  : $("", !0),
                t(
                  "button",
                  { class: "btn_styles color4", onClick: u },
                  "\u5185\u7F51\u914D\u7F6E"
                ),
                t(
                  "button",
                  { class: "btn_styles color5", onClick: s },
                  "DNS\u914D\u7F6E"
                ),
                t(
                  "button",
                  { class: "btn_styles color1", onClick: c },
                  "\u8F6F\u4EF6\u6E90\u914D\u7F6E"
                ),
                y(de)("sandbox")
                  ? (i(),
                    r(
                      L,
                      { key: 1 },
                      [
                        ((p = n.value) == null ? void 0 : p.status) ==
                        "unsupport"
                          ? (i(),
                            r(
                              "button",
                              {
                                key: 0,
                                class: "btn_styles color2",
                                onClick: f,
                              },
                              "\u5F00\u542F\u6C99\u7BB1"
                            ))
                          : ((h = n.value) == null ? void 0 : h.status) ==
                            "stopped"
                          ? (i(),
                            r(
                              "button",
                              {
                                key: 1,
                                class: "btn_styles color3",
                                onClick: m,
                              },
                              "\u5F00\u542F\u6C99\u7BB1"
                            ))
                          : ((g = n.value) == null ? void 0 : g.status) ==
                            "running"
                          ? (i(),
                            r(
                              "button",
                              {
                                key: 2,
                                class: "btn_styles color4",
                                onClick: b,
                              },
                              "\u6C99\u7BB1\u5F00\u542F\u4E2D"
                            ))
                          : $("", !0),
                      ],
                      64
                    ))
                  : $("", !0),
              ])
            );
          }
        );
      },
    });
  var o9 = S(a9, [["__scopeId", "data-v-06518a41"]]);
  const he = (e) => (O("data-v-3bf8b888"), (e = e()), N(), e),
    n9 = { id: "page" },
    i9 = he(() => t("em", null, null, -1)),
    r9 = he(() => t("em", null, null, -1)),
    s9 = he(() => t("em", null, null, -1)),
    d9 = he(() => t("em", null, null, -1)),
    c9 = T({
      setup(e) {
        return (
          Ha(),
          (a, o) => (
            i(), r("div", n9, [i9, z(y0), r9, z(o9), s9, z(Q7), d9])
          )
        );
      },
    });
  var u9 = S(c9, [["__scopeId", "data-v-3bf8b888"]]);
  const l9 = {};
  function p9(e, a) {
    const o = ut("router-view");
    return i(), M(o);
  }
  var f9 = S(l9, [["render", p9]]);
  const m9 = {},
    v9 = {
      width: "136px",
      height: "136px",
      viewBox: "0 0 136 136",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
    },
    b9 = Lt(
      '<title>icon_router</title><defs><rect id="path-1" x="0" y="0" width="72" height="72" rx="10"></rect><filter x="-68.1%" y="-65.3%" width="236.1%" height="236.1%" filterUnits="objectBoundingBox" id="filter-2"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.00576685472   0 0 0 0 0.712891067   0 0 0 0 0.523400265  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g id="icon_router" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group" transform="translate(32.000000, 30.000000)"><g id="Rectangle"><use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use><use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use></g><g id="luyouqi" transform="translate(9.000000, 12.000000)" fill="#2FBE96" fill-rule="nonzero"><path d="M5,36.25 L6.24999997,36.25 L6.24999997,37.5 C6.24999997,38.8750001 7.37499997,40 8.74999999,40 L13.75,40 C15.125,40 16.25,38.875 16.25,37.5 L16.25,36.25 L38.75,36.25 L38.75,37.5 C38.75,38.8750001 39.875,40 41.25,40 L46.25,40 C47.625,40 48.75,38.875 48.75,37.5 L48.75,36.25 L50,36.25 C52.75,36.25 55,34 55,31.25 L0,31.25 C0,34 2.25,36.25 5,36.25 Z M50,20 L45,20 L45,1.875 C45,0.874999981 44.1250001,0 43.125,0 C42.125,0 41.25,0.874999981 41.25,1.875 L41.25,20 L13.75,20 L13.75,1.875 C13.75,0.874999981 12.875,0 11.875,0 C10.8749999,0 10,0.874999981 10,1.875 L10,20 L5,20 C2.25,20 0,22.25 0,25 L0,28.75 L55,28.75 L55,25 C55,22.25 52.75,20 50,20 Z M30.625,26.25 C29.625,26.25 28.75,25.375 28.75,24.375 C28.75,23.375 29.625,22.5 30.625,22.5 C31.625,22.5 32.5,23.375 32.5,24.375 C32.5,25.375 31.625,26.25 30.625,26.25 Z M36.875,26.25 C35.875,26.25 35,25.375 35,24.375 C35,23.375 35.875,22.5 36.875,22.5 C37.875,22.5 38.75,23.375 38.75,24.375 C38.75,25.375 37.875,26.25 36.875,26.25 Z M43.125,26.25 C42.125,26.25 41.25,25.375 41.25,24.375 C41.25,23.375 42.125,22.5 43.125,22.5 C44.1250001,22.5 45,23.375 45,24.375 C45,25.375 44.1250001,26.25 43.125,26.25 Z" id="Shape"></path></g></g></g>',
      3
    ),
    g9 = [b9];
  function _9(e, a) {
    return i(), r("svg", v9, g9);
  }
  var h9 = S(m9, [["render", _9]]);
  const x9 = {},
    k9 = {
      width: "136px",
      height: "136px",
      viewBox: "0 0 136 136",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
    },
    w9 = Lt(
      '<title>icon_dial</title><defs><rect id="path-1" x="0" y="0" width="72" height="72" rx="10"></rect><filter x="-68.1%" y="-65.3%" width="236.1%" height="236.1%" filterUnits="objectBoundingBox" id="filter-2"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.788163337   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g id="icon_dial" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group" transform="translate(32.000000, 30.000000)"><g id="Rectangle"><use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use><use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use></g><g id="bohao" transform="translate(14.000000, 13.000000)" fill="#FF6C68" fill-rule="nonzero"><path d="M27.2980992,0.874200971 C26.7268663,0.758523804 26.1331134,0.866913453 25.6392917,1.17701641 C25.1554389,1.47930436 24.8141653,1.96483113 24.6930984,2.52315663 C24.5731079,3.07574301 24.6878398,3.65344238 25.0098158,4.11789644 C25.3371296,4.5939296 25.8390162,4.92096156 26.4060118,5.02766508 C31.045922,5.95330175 35.0418401,8.55830791 37.6547588,12.3772204 C40.2676774,16.1961329 41.1782401,20.7555549 40.2228092,25.2210907 C40.1022213,25.7732483 40.2170154,26.350782 40.5395266,26.8145082 C40.9402684,27.3951092 41.5930751,27.7496771 42.2973083,27.7692363 C42.7546094,27.787238 43.2065645,27.6654879 43.5932104,27.420139 C44.0774855,27.1189844 44.4196894,26.6344423 44.542043,26.0766435 C47.0071602,14.5551113 39.2726569,3.24779794 27.2980992,0.874200971 M31.0947493,32.74255 C31.2267149,32.824535 34.1299578,34.6215925 36.3733729,36.8312195 C37.2153133,37.6669372 38.6247059,39.0646486 38.5877555,40.6871575 C38.5560837,41.7952768 37.906813,42.9047185 36.5990341,44.0789548 C36.2743987,44.3844149 33.3645574,46.9999998 28.710131,46.9999998 C27.3912247,46.9937384 26.0799397,46.7991615 24.8158264,46.422138 C23.3601676,45.9861014 21.9649286,45.3685851 20.6628693,44.584088 C15.2153297,41.4871721 11.0188239,37.5109013 7.02422548,31.6621998 C0.162014763,21.6230086 -0.0293353467,13.0238438 0.00233638896,11.4039796 C0.0142132841,3.92483507 6.48844518,0.983955044 7.22613283,0.671883236 C8.2422679,0.218321248 9.12907663,6.56389309e-05 9.94594365,6.56389309e-05 C10.3221663,-0.00210452636 10.6967773,0.0495481459 11.0584136,0.153526698 C11.7736671,0.362456139 12.7647287,0.901970084 13.4337942,2.28910278 C14.3430371,4.17343462 15.2021331,6.8736491 15.7880603,9.69419635 C16.4056593,12.6271423 14.6953853,13.450959 13.0418564,14.2470065 L12.9771933,14.2734533 C12.9771933,14.2734533 10.0515161,15.4476896 9.53685034,15.6513296 C9.03619964,15.8421642 8.77356796,16.3935308 8.94036587,16.9035838 C10.1201383,20.341663 11.9227882,23.9119759 14.1477281,27.2178213 C16.2898673,30.4151399 18.819615,33.3337939 21.6790044,35.9069051 C21.8774142,36.0783671 22.130935,36.1722806 22.3929382,36.1713728 L22.4826748,36.1713728 C22.7712253,36.1486937 23.0383058,36.009873 23.2230017,35.7865724 C23.7910711,35.0765111 24.4084443,34.4075091 25.07052,33.7845524 C26.4350442,32.5349429 27.6702421,31.933279 28.8434163,31.9332791 C29.1639159,31.9320794 29.4829541,31.9766039 29.7909292,32.0655129 C30.2528699,32.2365199 30.6924376,32.4629666 31.1000279,32.7399053 M21.8400024,18.2655921 C21.2727998,18.1576666 20.7707788,17.8303809 20.4424867,17.3545011 C20.1195351,16.8899676 20.0042929,16.3116272 20.1244497,15.758439 C20.3633736,14.7240741 21.3099013,14.0116196 22.3678647,14.0698132 C22.4897786,14.07308 22.61119,14.0867942 22.7307701,14.1108057 C27.8483957,15.1263614 31.1554534,19.9595073 30.1010483,24.8852168 C29.9793303,25.4425668 29.6381304,25.9270351 29.1548551,26.2287124 C28.767264,26.4717676 28.3158939,26.5928996 27.8589529,26.5764873 C27.7379231,26.5712459 27.6174771,26.5566569 27.4986869,26.5328501 C26.9296524,26.4268815 26.4259713,26.0986569 26.098532,25.6204368 C25.77801,25.1583614 25.6633089,24.5836905 25.7818146,24.033631 C26.0564522,22.762289 25.7906175,21.4337675 25.0480859,20.3667874 C24.2959909,19.2710084 23.1434575,18.5161347 21.8400024,18.2655921 M24.130925,11.620843 C22.9432347,11.3828221 22.1738753,10.2628017 22.4153724,9.11633459 C22.5346624,8.55724948 22.875754,8.07082659 23.360246,7.76887199 C23.8543437,7.45823035 24.448547,7.34937141 25.0203731,7.46473423 C29.1614533,8.28722853 32.7258439,10.6145437 35.0589956,14.0235314 C37.3755259,17.3601994 38.204796,21.5111457 37.3485986,25.484236 C37.2282609,26.0425595 36.8861326,26.5276693 36.4010857,26.8277315 C35.9088475,27.1418728 35.3138166,27.2514444 34.7422782,27.1331916 C33.5545879,26.8951707 32.7852285,25.7751504 33.0267255,24.6286832 C33.6442543,21.7595069 33.0443871,18.7622168 31.3705573,16.3534912 C29.6708669,13.8824331 27.0678646,12.1820541 24.1256464,11.620843 L24.130925,11.620843 Z" id="Shape"></path></g></g></g>',
      3
    ),
    y9 = [w9];
  function F9(e, a) {
    return i(), r("svg", k9, y9);
  }
  var C9 = S(x9, [["render", F9]]);
  const E9 = {},
    $9 = {
      width: "136px",
      height: "136px",
      viewBox: "0 0 136 136",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
    },
    D9 = Lt(
      '<title>icon_side router</title><defs><rect id="path-1" x="0" y="0" width="72" height="72" rx="10"></rect><filter x="-68.1%" y="-65.3%" width="236.1%" height="236.1%" filterUnits="objectBoundingBox" id="filter-2"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="16" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.064613567   0 0 0 0 0.378874402   0 0 0 0 0.840799967  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g id="icon_side-router" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-5" transform="translate(32.000000, 30.000000)"><g id="Rectangle"><use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use><use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use></g><g id="route" transform="translate(15.000000, 15.000000)" fill="#3B89FE"><path d="M37.25,31 L37.25,18.66 L22.2525,18.66 L22.2525,11 L26,11 L26,1 L16,1 L16,11 L19.75,11 L19.75,18.6625 L4.75,18.6625 L4.75,31 L1,31 L1,41 L11,41 L11,31 L7.25,31 L7.25,21.16 L19.75,21.16 L19.75,31 L16,31 L16,41 L26,41 L26,31 L22.2525,31 L22.2525,21.16 L34.75,21.16 L34.75,31 L31,31 L31,41 L41,41 L41,31 L37.25,31 Z M23.1425,38.1425 L18.8575,38.1425 L18.8575,33.855 L23.1425,33.855 L23.1425,38.1425 Z M8.1425,38.14 L3.8575,38.14 L3.8575,33.855 L8.1425,33.855 L8.1425,38.14 Z M23.1425,8.1425 L18.8575,8.1425 L18.8575,3.8575 L23.1425,3.8575 L23.1425,8.1425 Z M38.285,38.1425 L34,38.1425 L34,33.855 L38.285,33.855 L38.285,38.1425 Z" id="Shape" fill-rule="nonzero"></path><rect id="Rectangle" x="15" y="0" width="12" height="12" rx="2"></rect><rect id="Rectangle" x="0" y="30" width="12" height="12" rx="2"></rect><rect id="Rectangle" x="15" y="30" width="12" height="12" rx="2"></rect><rect id="Rectangle" x="30" y="30" width="12" height="12" rx="2"></rect></g></g></g>',
      3
    ),
    B9 = [D9];
  function Y9(e, a) {
    return i(), r("svg", $9, B9);
  }
  var A9 = S(E9, [["render", Y9]]);
  const Jt = (e) => (O("data-v-4f3d8412"), (e = e()), N(), e),
    S9 = { id: "page" },
    z9 = Jt(() =>
      t(
        "div",
        { class: "title" },
        "\u6B22\u8FCE\u4F7F\u7528\u7F51\u7EDC\u914D\u7F6E\u5411\u5BFC",
        -1
      )
    ),
    P9 = Jt(() =>
      t(
        "div",
        { class: "desc" },
        "\u9009\u62E9\u4E00\u79CD\u8FDE\u63A5\u65B9\u5F0F\u4EE5\u5F00\u59CB",
        -1
      )
    ),
    T9 = { class: "network-containers" },
    I9 = { class: "network-container_item" },
    L9 = { class: "cover" },
    M9 = { class: "thumbnail" },
    O9 = Jt(() => t("span", null, "\u5BBD\u5E26\u62E8\u53F7\u8FDE\u63A5", -1)),
    N9 = { class: "network-container_item" },
    j9 = { class: "cover" },
    q9 = { class: "thumbnail" },
    R9 = Jt(() =>
      t("span", null, "\u8FDE\u63A5\u73B0\u6709\u8DEF\u7531\u5668", -1)
    ),
    G9 = { class: "network-container_item" },
    V9 = { class: "cover" },
    U9 = { class: "thumbnail" },
    W9 = Jt(() => t("span", null, "\u914D\u7F6E\u4E3A\u65C1\u8DEF\u7531", -1)),
    Z9 = Jt(() =>
      t(
        "div",
        { class: "info" },
        [
          K(
            " \u6CA1\u627E\u5230\u60F3\u8981\u7684\u914D\u7F6E\uFF1F\u8BF7\u4F7F\u7528 "
          ),
          t(
            "a",
            { href: "/cgi-bin/luci/admin/network/network" },
            "\u9AD8\u7EA7\u6A21\u5F0F"
          ),
        ],
        -1
      )
    ),
    H9 = T({
      setup(e) {
        return (a, o) => {
          const n = ut("router-link");
          return (
            i(),
            r("div", S9, [
              z9,
              P9,
              t("div", T9, [
                t("div", I9, [
                  z(
                    n,
                    { to: "/network/pppoe" },
                    {
                      default: q(() => [
                        t("div", L9, [t("div", M9, [z(C9), O9])]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                t("div", N9, [
                  z(
                    n,
                    { to: "/network/dhcp" },
                    {
                      default: q(() => [
                        t("div", j9, [t("div", q9, [z(h9), R9])]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                t("div", G9, [
                  z(
                    n,
                    { to: "/network/gateway" },
                    {
                      default: q(() => [
                        t("div", V9, [t("div", U9, [z(A9), W9])]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              Z9,
            ])
          );
        };
      },
    });
  var J9 = S(H9, [["__scopeId", "data-v-4f3d8412"]]);
  const jt = (e) => (O("data-v-20e2a1da"), (e = e()), N(), e),
    K9 = { key: 0, id: "page" },
    X9 = jt(() =>
      t("h2", { class: "title" }, "\u914D\u7F6E\u5BBD\u5E26\u8D26\u53F7", -1)
    ),
    Q9 = jt(() =>
      t(
        "h3",
        { class: "desc" },
        "\u8BF7\u786E\u4FDD\u60A8\u5DF2\u5C06\u8DEF\u7531 WAN \u53E3\u8FDE\u63A5\u5230\u5149\u732B",
        -1
      )
    ),
    tm = { class: "network-message" },
    em = { key: 0 },
    am = K(" \u56E0\u4E3A\u60A8\u7684\u8BBE\u5907"),
    om = jt(() => t("span", null, "\u6CA1\u6709 WAN \u53E3", -1)),
    nm = K(
      "\uFF0C\u65E0\u6CD5\u8D70\u672C\u8BBE\u7F6E\u5411\u5BFC\uFF0C\u5177\u4F53\u8BF7\u770B "
    ),
    im = jt(() =>
      t(
        "a",
        {
          href: "https://doc.linkease.com/zh/guide/istoreos/question.html#%E7%BD%91%E7%BB%9C",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "\u94FE\u63A5",
        -1
      )
    ),
    rm = [am, om, nm, im],
    sm = ["onSubmit"],
    dm = jt(() =>
      t(
        "div",
        { class: "label-key" },
        [t("span", null, "\u5BBD\u5E26\u8D26\u53F7")],
        -1
      )
    ),
    cm = ["disabled"],
    um = jt(() =>
      t("div", { class: "label-key" }, [t("span", null, "\u5BC6\u7801")], -1)
    ),
    lm = ["disabled"],
    pm = { key: 0, class: "msg" },
    fm = { class: "btns" },
    mm = ["disabled"],
    vm = ["onClick"],
    bm = { key: 1, id: "page" },
    gm = jt(() => t("h2", { class: "title" }, "\u914D\u7F6E\u6210\u529F", -1)),
    _m = { class: "btns" },
    hm = ["onClick"],
    xm = ["onClick"],
    km = T({
      setup(e) {
        const a = F(0),
          o = F({ account: "", password: "" }),
          n = F(""),
          s = F(!1),
          m = F(0);
        (() =>
          A(this, null, function* () {
            s.value = !0;
            try {
              const u = yield Y.Guide.Pppoe.GET();
              if (u.data) {
                const { success: c, error: d, result: v } = u.data;
                v && (o.value = v),
                  c == -1011 && ((s.value = !0), (m.value = c));
              }
            } catch (u) {
              n.value = u;
            }
            m.value == 0 && (s.value = !1);
          }))();
        const f = () =>
          A(this, null, function* () {
            const u = o.value.account || "",
              c = o.value.password || "";
            if (u == "") {
              n.value = "\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A";
              return;
            }
            if (c == "") {
              n.value = "\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A";
              return;
            }
            s.value = !0;
            const d = x.Loading("\u914D\u7F6E\u4E2D...");
            try {
              const v = yield Y.Guide.Pppoe.POST({ account: u, password: c });
              if (v != null && v.data) {
                const { error: l, success: _ } = v.data;
                l && (n.value = l),
                  (_ == null || _ == 0) &&
                    (x.Success("\u914D\u7F6E\u6210\u529F"), (a.value = 1));
              }
            } catch (v) {
              n.value = v;
            }
            (s.value = !1), d.Close();
          });
        return (u, c) => {
          const d = ut("router-link");
          return a.value == 0
            ? (i(),
              r("div", K9, [
                X9,
                Q9,
                t("div", tm, [
                  m.value == -1011 ? (i(), r("li", em, rm)) : $("", !0),
                ]),
                t(
                  "form",
                  { onSubmit: it(f, ["prevent"]) },
                  [
                    t("label", null, [
                      dm,
                      P(
                        t(
                          "input",
                          {
                            type: "text",
                            "onUpdate:modelValue":
                              c[0] || (c[0] = (v) => (o.value.account = v)),
                            placeholder: "\u5BBD\u5E26\u8D26\u53F7",
                            required: "",
                            disabled: s.value,
                          },
                          null,
                          8,
                          cm
                        ),
                        [[J, o.value.account, void 0, { trim: !0 }]]
                      ),
                    ]),
                    t("label", null, [
                      um,
                      P(
                        t(
                          "input",
                          {
                            type: "password",
                            "onUpdate:modelValue":
                              c[1] || (c[1] = (v) => (o.value.password = v)),
                            placeholder: "\u5BBD\u5E26\u5BC6\u7801",
                            required: "",
                            disabled: s.value,
                          },
                          null,
                          8,
                          lm
                        ),
                        [[J, o.value.password, void 0, { trim: !0 }]]
                      ),
                    ]),
                    n.value ? (i(), r("div", pm, k(n.value), 1)) : $("", !0),
                    t("div", fm, [
                      t(
                        "button",
                        {
                          class: "cbi-button cbi-button-apply app-btn app-next",
                          disabled: s.value,
                        },
                        "\u4FDD\u5B58\u914D\u7F6E",
                        8,
                        mm
                      ),
                      z(
                        d,
                        { to: "/network", custom: "" },
                        {
                          default: q(({ navigate: v }) => [
                            t(
                              "button",
                              {
                                class:
                                  "cbi-button cbi-button-remove app-btn app-back",
                                onClick: v,
                              },
                              "\u8FD4\u56DE",
                              8,
                              vm
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ],
                  40,
                  sm
                ),
              ]))
            : a.value == 1
            ? (i(),
              r("div", bm, [
                gm,
                t("div", _m, [
                  z(
                    d,
                    { to: "/", custom: "" },
                    {
                      default: q(({ navigate: v }) => [
                        t(
                          "button",
                          {
                            class:
                              "cbi-button cbi-button-apply app-btn app-next",
                            onClick: v,
                          },
                          "\u8FDB\u5165\u63A7\u5236\u53F0",
                          8,
                          hm
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  z(
                    d,
                    { to: "/network", custom: "" },
                    {
                      default: q(({ navigate: v }) => [
                        t(
                          "button",
                          {
                            class:
                              "cbi-button cbi-button-remove app-btn app-back",
                            onClick: v,
                          },
                          "\u8FD4\u56DE",
                          8,
                          xm
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]))
            : $("", !0);
        };
      },
    });
  var wm = S(km, [["__scopeId", "data-v-20e2a1da"]]);
  const dt = (e) => (O("data-v-12cfdb08"), (e = e()), N(), e),
    ym = { key: 0, id: "page" },
    Fm = dt(() =>
      t("h2", { class: "title" }, "\u914D\u7F6E\u4E92\u8054\u7F51", -1)
    ),
    Cm = dt(() =>
      t(
        "h3",
        { class: "desc" },
        "\u8BF7\u786E\u4FDD\u60A8\u5DF2\u5C06\u8DEF\u7531 WAN \u53E3\u8FDE\u63A5\u5230\u4E0A\u7EA7\u8DEF\u7531\u5C40\u57DF\u7F51\uFF08 LAN \uFF09\u63A5\u53E3",
        -1
      )
    ),
    Em = { class: "network-message" },
    $m = { key: 0 },
    Dm = K(" \u56E0\u4E3A\u60A8\u7684\u8BBE\u5907"),
    Bm = dt(() => t("span", null, "\u6CA1\u6709 WAN \u53E3", -1)),
    Ym = K(
      "\uFF0C\u65E0\u6CD5\u8D70\u672C\u8BBE\u7F6E\u5411\u5BFC\uFF0C\u5177\u4F53\u8BF7\u770B "
    ),
    Am = dt(() =>
      t(
        "a",
        {
          href: "https://doc.linkease.com/zh/guide/istoreos/question.html#%E7%BD%91%E7%BB%9C",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "\u94FE\u63A5",
        -1
      )
    ),
    Sm = [Dm, Bm, Ym, Am],
    zm = ["onSubmit"],
    Pm = dt(() =>
      t(
        "div",
        { class: "label-key" },
        [t("span", null, "WAN \u63A5\u53E3\u914D\u7F6E\u65B9\u5F0F")],
        -1
      )
    ),
    Tm = dt(() =>
      t(
        "option",
        { value: "dhcp" },
        "\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740\uFF08DHCP\uFF09",
        -1
      )
    ),
    Im = dt(() =>
      t("option", { value: "static" }, "\u9759\u6001IP\u5730\u5740", -1)
    ),
    Lm = [Tm, Im],
    Mm = dt(() =>
      t("div", { class: "label-key" }, [t("span", null, "IP\u5730\u5740")], -1)
    ),
    Om = ["disabled"],
    Nm = { key: 0, class: "msg" },
    jm = dt(() =>
      t(
        "div",
        { class: "label-key" },
        [t("span", null, "\u5B50\u7F51\u63A9\u7801")],
        -1
      )
    ),
    qm = ["disabled"],
    Rm = { key: 1, class: "msg" },
    Gm = dt(() =>
      t(
        "div",
        { class: "label-key" },
        [t("span", null, "\u7F51\u5173\u5730\u5740")],
        -1
      )
    ),
    Vm = ["disabled"],
    Um = dt(() =>
      t(
        "div",
        { class: "label-key" },
        [t("span", null, "DNS \u914D\u7F6E\u65B9\u5F0F")],
        -1
      )
    ),
    Wm = dt(() =>
      t(
        "option",
        { value: "auto" },
        "\u81EA\u52A8\u83B7\u53D6\uFF08DHCP\uFF09",
        -1
      )
    ),
    Zm = dt(() =>
      t("option", { value: "manual" }, "\u624B\u5DE5\u914D\u7F6E", -1)
    ),
    Hm = [Wm, Zm],
    Jm = dt(() =>
      t(
        "div",
        { class: "label-key" },
        [t("span", null, "DNS\u670D\u52A1\u5668")],
        -1
      )
    ),
    Km = ["onUpdate:modelValue", "disabled"],
    Xm = dt(() =>
      t(
        "div",
        { class: "label-key" },
        [t("span", null, "DNS\u670D\u52A1\u5668")],
        -1
      )
    ),
    Qm = ["disabled"],
    tv = dt(() =>
      t("div", { class: "label-key" }, "\u5907\u7528DNS\u670D\u52A1\u5668", -1)
    ),
    ev = ["disabled"],
    av = { key: 2, class: "msgs" },
    ov = { class: "btns" },
    nv = ["disabled"],
    iv = ["onClick"],
    rv = { key: 1, id: "page" },
    sv = dt(() => t("h2", { class: "title" }, "\u914D\u7F6E\u6210\u529F", -1)),
    dv = { class: "btns" },
    cv = ["onClick"],
    uv = ["onClick"],
    lv = T({
      setup(e) {
        const a = F(0),
          o = F({}),
          n = F(""),
          s = F(""),
          m = F(""),
          b = F(""),
          f = F(!1),
          u = F(""),
          c = F(""),
          d = F(0),
          v = Ut.checkIsIP;
        (() =>
          A(this, null, function* () {
            var E;
            f.value = !0;
            try {
              const C = yield Promise.all([
                Y.Guide.ClientModel.GET(),
                Y.Network.Status.GET(),
              ]);
              if (C[0]) {
                const B = C[0];
                if (B.data) {
                  const { success: D, error: j, result: W } = B.data;
                  W && (o.value = W),
                    D == -1011 && ((d.value = D), (f.value = !0));
                }
              }
              if (C[1]) {
                const B = C[1];
                if ((E = B == null ? void 0 : B.data) != null && E.result) {
                  const D = B.data.result;
                  D.ipv4addr && (n.value = D.ipv4addr);
                }
              }
            } catch (C) {
              s.value = C;
            }
            d.value == 0 && (f.value = !1);
          }))();
        const _ = (E) => {
            E.target.value == "static" &&
              ((o.value.staticIp == null || o.value.staticIp == "") &&
                (o.value.staticIp = n.value),
              (o.value.subnetMask == null || o.value.subnetMask == "") &&
                (o.value.subnetMask = "255.255.255.0"));
          },
          p = (E) => {
            E.target.value == "manual";
          },
          h = (E) => {
            const C = E.target;
            if (C.value == "") {
              u.value = "";
              return;
            }
            v(C.value)
              ? (u.value = "")
              : (u.value =
                  "\u8BF7\u8F93\u5165\u5408\u6CD5\u7684IP\u5730\u5740");
          },
          g = (E) => {
            const C = E.target;
            if (C.value == "") {
              c.value = "";
              return;
            }
            v(C.value)
              ? (c.value = "")
              : (c.value = "\u8BF7\u8F93\u5165\u5408\u6CD5\u7684\u5730\u5740");
          },
          w = () =>
            A(this, null, function* () {
              const E = {};
              switch (o.value.wanProto) {
                case "dhcp":
                  break;
                case "static":
                  (E.staticIp = o.value.staticIp),
                    (E.subnetMask = o.value.subnetMask),
                    (E.gateway = o.value.gateway);
                  break;
              }
              switch (o.value.dnsProto) {
                case "auto":
                  break;
                case "manual":
                  (E.manualDnsIp = []),
                    o.value.manualDnsIp != null &&
                    o.value.manualDnsIp.length > 0
                      ? (E.manualDnsIp = o.value.manualDnsIp)
                      : (E.manualDnsIp.push(m.value),
                        b.value && E.manualDnsIp.push(b.value));
                  break;
              }
              (E.dnsProto = o.value.dnsProto), (E.wanProto = o.value.wanProto);
              const C = x.Loading("\u914D\u7F6E\u4E2D....");
              f.value = !0;
              try {
                const B = yield Y.Guide.ClientModel.POST(E);
                if (B != null && B.data) {
                  const { success: D, error: j } = B == null ? void 0 : B.data;
                  j && (s.value = j),
                    (D == null || D == 0) &&
                      (x.Success("\u914D\u7F6E\u6210\u529F"), (a.value = 1));
                }
              } catch (B) {
                s.value = B;
              }
              (f.value = !1), C.Close();
            });
        return (E, C) => {
          const B = ut("router-link");
          return a.value == 0
            ? (i(),
              r("div", ym, [
                Fm,
                Cm,
                t("div", Em, [
                  d.value == -1011 ? (i(), r("li", $m, Sm)) : $("", !0),
                ]),
                t(
                  "form",
                  { onSubmit: it(w, ["prevent"]) },
                  [
                    t("label", null, [
                      Pm,
                      P(
                        t(
                          "select",
                          {
                            "onUpdate:modelValue":
                              C[0] || (C[0] = (D) => (o.value.wanProto = D)),
                            onInput: _,
                          },
                          Lm,
                          544
                        ),
                        [[Q, o.value.wanProto]]
                      ),
                    ]),
                    o.value.wanProto == "static"
                      ? (i(),
                        r(
                          L,
                          { key: 0 },
                          [
                            t("label", null, [
                              Mm,
                              P(
                                t(
                                  "input",
                                  {
                                    type: "text",
                                    "onUpdate:modelValue":
                                      C[1] ||
                                      (C[1] = (D) => (o.value.staticIp = D)),
                                    placeholder: "\u9759\u6001IP\u5730\u5740",
                                    required: "",
                                    disabled: f.value,
                                    onInput: h,
                                  },
                                  null,
                                  40,
                                  Om
                                ),
                                [[J, o.value.staticIp, void 0, { trim: !0 }]]
                              ),
                            ]),
                            u.value
                              ? (i(), r("p", Nm, k(u.value), 1))
                              : $("", !0),
                            t("label", null, [
                              jm,
                              P(
                                t(
                                  "input",
                                  {
                                    type: "text",
                                    "onUpdate:modelValue":
                                      C[2] ||
                                      (C[2] = (D) => (o.value.subnetMask = D)),
                                    placeholder: "\u5B50\u7F51\u63A9\u7801",
                                    required: "",
                                    disabled: f.value,
                                    onInput: g,
                                  },
                                  null,
                                  40,
                                  qm
                                ),
                                [[J, o.value.subnetMask, void 0, { trim: !0 }]]
                              ),
                            ]),
                            c.value
                              ? (i(), r("p", Rm, k(c.value), 1))
                              : $("", !0),
                            t("label", null, [
                              Gm,
                              P(
                                t(
                                  "input",
                                  {
                                    type: "text",
                                    "onUpdate:modelValue":
                                      C[3] ||
                                      (C[3] = (D) => (o.value.gateway = D)),
                                    placeholder: "\u7F51\u5173\u5730\u5740",
                                    required: "",
                                    disabled: f.value,
                                  },
                                  null,
                                  8,
                                  Vm
                                ),
                                [[J, o.value.gateway, void 0, { trim: !0 }]]
                              ),
                            ]),
                          ],
                          64
                        ))
                      : $("", !0),
                    t("label", null, [
                      Um,
                      P(
                        t(
                          "select",
                          {
                            "onUpdate:modelValue":
                              C[4] || (C[4] = (D) => (o.value.dnsProto = D)),
                            onInput: p,
                          },
                          Hm,
                          544
                        ),
                        [[Q, o.value.dnsProto]]
                      ),
                    ]),
                    o.value.dnsProto == "manual"
                      ? (i(),
                        r(
                          L,
                          { key: 1 },
                          [
                            o.value.manualDnsIp != null &&
                            o.value.manualDnsIp.length > 0
                              ? (i(!0),
                                r(
                                  L,
                                  { key: 0 },
                                  V(
                                    o.value.manualDnsIp,
                                    (D, j) => (
                                      i(),
                                      r("label", null, [
                                        Jm,
                                        P(
                                          t(
                                            "input",
                                            {
                                              type: "text",
                                              "onUpdate:modelValue": (W) =>
                                                (o.value.manualDnsIp[j] = W),
                                              placeholder:
                                                "DNS\u670D\u52A1\u5668",
                                              required: "",
                                              disabled: f.value,
                                            },
                                            null,
                                            8,
                                            Km
                                          ),
                                          [
                                            [
                                              J,
                                              o.value.manualDnsIp[j],
                                              void 0,
                                              { trim: !0 },
                                            ],
                                          ]
                                        ),
                                      ])
                                    )
                                  ),
                                  256
                                ))
                              : (i(),
                                r(
                                  L,
                                  { key: 1 },
                                  [
                                    t("label", null, [
                                      Xm,
                                      P(
                                        t(
                                          "input",
                                          {
                                            type: "text",
                                            "onUpdate:modelValue":
                                              C[5] ||
                                              (C[5] = (D) => (m.value = D)),
                                            placeholder:
                                              "DNS\u670D\u52A1\u5668",
                                            required: "",
                                            disabled: f.value,
                                          },
                                          null,
                                          8,
                                          Qm
                                        ),
                                        [[J, m.value, void 0, { trim: !0 }]]
                                      ),
                                    ]),
                                    t("label", null, [
                                      tv,
                                      P(
                                        t(
                                          "input",
                                          {
                                            type: "text",
                                            "onUpdate:modelValue":
                                              C[6] ||
                                              (C[6] = (D) => (b.value = D)),
                                            placeholder:
                                              "\u5907\u7528DNS\u670D\u52A1\u5668",
                                            disabled: f.value,
                                          },
                                          null,
                                          8,
                                          ev
                                        ),
                                        [[J, b.value, void 0, { trim: !0 }]]
                                      ),
                                    ]),
                                  ],
                                  64
                                )),
                          ],
                          64
                        ))
                      : $("", !0),
                    s.value ? (i(), r("div", av, k(s.value), 1)) : $("", !0),
                    t("div", ov, [
                      t(
                        "button",
                        {
                          class: "cbi-button cbi-button-apply app-btn app-next",
                          disabled: f.value,
                        },
                        "\u4FDD\u5B58\u914D\u7F6E",
                        8,
                        nv
                      ),
                      z(
                        B,
                        { to: "/network", custom: "" },
                        {
                          default: q(({ navigate: D }) => [
                            t(
                              "button",
                              {
                                class:
                                  "cbi-button cbi-button-remove app-btn app-back",
                                onClick: D,
                              },
                              "\u8FD4\u56DE",
                              8,
                              iv
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ],
                  40,
                  zm
                ),
              ]))
            : a.value == 1
            ? (i(),
              r("div", rv, [
                sv,
                t("div", dv, [
                  z(
                    B,
                    { to: "/", custom: "" },
                    {
                      default: q(({ navigate: D }) => [
                        t(
                          "button",
                          {
                            class:
                              "cbi-button cbi-button-apply app-btn app-next",
                            onClick: D,
                          },
                          "\u8FDB\u5165\u63A7\u5236\u53F0",
                          8,
                          cv
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  z(
                    B,
                    { to: "/network", custom: "" },
                    {
                      default: q(({ navigate: D }) => [
                        t(
                          "button",
                          {
                            class:
                              "cbi-button cbi-button-remove app-btn app-back",
                            onClick: D,
                          },
                          "\u8FD4\u56DE",
                          8,
                          uv
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]))
            : $("", !0);
        };
      },
    });
  var pv = S(lv, [["__scopeId", "data-v-12cfdb08"]]);
  const mt = (e) => (O("data-v-5bc4ca91"), (e = e()), N(), e),
    fv = { key: 0, id: "page" },
    mv = mt(() =>
      t(
        "h2",
        { class: "title" },
        "\u65C1\u8DEF\u7531\u914D\u7F6E\u524D\u7684\u51C6\u5907\u5DE5\u4F5C",
        -1
      )
    ),
    vv = mt(() =>
      t(
        "code",
        null,
        [
          K(
            " \u65C1\u8DEF\u7531\u6A21\u5F0F\uFF0C\u4E5F\u53EB\u5355\u81C2\u8DEF\u7531\u6A21\u5F0F\u3002 "
          ),
          t("br"),
          K(
            "\u60A8\u53EF\u4EE5\u7528\u4E0A\u4E00\u7EA7\u8DEF\u7531\u62E8\u53F7\uFF0C\u7136\u540E\u7531ARS2\u6765\u5B9E\u73B0\u4E00\u4E9B\u9AD8\u7EA7\u529F\u80FD\u3002 "
          ),
        ],
        -1
      )
    ),
    bv = mt(() =>
      t(
        "h3",
        { class: "desc" },
        "\u8BF7\u60A8\u83B7\u5F97\u4E3B\u8DEF\u7531\u5668\u7684IP\u5730\u5740\uFF08\u4F8B\u5982 192.168.2.1 \uFF09\uFF0C\u8BB0\u5F55\u4EE5\u5907\u4F7F\u7528",
        -1
      )
    ),
    gv = mt(() =>
      t(
        "div",
        { class: "info" },
        [
          K(" \u4F60\u53EF\u4EE5\u67E5\u770B\u6211\u4EEC\u7684 "),
          t(
            "a",
            {
              target: "_blank",
              href: "https://doc.linkease.com/zh/guide/easepi/common.html#%E6%97%81%E8%B7%AF%E7%94%B1%E6%A8%A1%E5%BC%8F",
            },
            "\u914D\u7F6E\u6559\u7A0B"
          ),
        ],
        -1
      )
    ),
    _v = { class: "btns" },
    hv = ["disabled"],
    xv = ["onClick"],
    kv = { key: 1, id: "page" },
    wv = mt(() =>
      t(
        "h2",
        { class: "title" },
        "\u914D\u7F6E\u65C1\u8DEF\u7531\u7F51\u7EDC",
        -1
      )
    ),
    yv = mt(() =>
      t(
        "h3",
        { class: "desc" },
        "\u73B0\u5728\uFF0C\u8BF7\u4F60\u914D\u7F6E\u65C1\u8DEF\u7531\u4FE1\u606F",
        -1
      )
    ),
    Fv = ["onSubmit"],
    Cv = mt(() =>
      t(
        "div",
        { class: "label-key" },
        [t("span", null, "LAN \u63A5\u53E3\u914D\u7F6E\u65B9\u5F0F")],
        -1
      )
    ),
    Ev = { class: "label-value" },
    $v = mt(() =>
      t(
        "option",
        null,
        "\u65C1\u8DEF\u7531\u6A21\u5F0F\u4EC5\u652F\u6301\u9759\u6001IP\u5730\u5740",
        -1
      )
    ),
    Dv = [$v],
    Bv = mt(() =>
      t(
        "div",
        { class: "label-key" },
        [
          t(
            "span",
            null,
            "IP \u5730\u5740\uFF08\u8BF7\u548C\u4E0A\u4E00\u6B65\u8BB0\u5F55\u7684\u4E3B\u8DEF\u7531\u5730\u5740\u5728\u540C\u4E00\u7F51\u6BB5\uFF09"
          ),
        ],
        -1
      )
    ),
    Yv = ["disabled"],
    Av = mt(() =>
      t(
        "div",
        { class: "label-key" },
        [t("span", null, "\u5B50\u7F51\u63A9\u7801")],
        -1
      )
    ),
    Sv = ["disabled"],
    zv = mt(() =>
      t(
        "div",
        { class: "label-key" },
        [t("span", null, "\u7F51\u5173\u5730\u5740")],
        -1
      )
    ),
    Pv = ["disabled"],
    Tv = mt(() =>
      t(
        "div",
        { class: "label-key" },
        [t("span", null, "DNS\u670D\u52A1\u5668")],
        -1
      )
    ),
    Iv = ["disabled"],
    Lv = { key: 0, class: "msgs" },
    Mv = { class: "chose_dhcp" },
    Ov = { class: "chose_dhcp_icon" },
    Nv = mt(() =>
      t(
        "svg",
        {
          t: "1649907260906",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "2793",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          width: "40",
          height: "40",
        },
        [
          t("path", {
            d: "M764.904497 251.418146 259.086289 251.418146c-143.076626 0-259.065314 115.989711-259.065314 259.065314 0 143.077649 115.988688 259.063267 259.065314 259.063267l505.818207 0c143.074579 0 259.063267-115.985618 259.063267-259.063267C1023.967764 367.407857 907.980099 251.418146 764.904497 251.418146zM764.904497 747.164974c-130.507356 0-236.682537-106.175181-236.682537-236.682537S634.397141 273.798876 764.904497 273.798876s236.683561 106.176205 236.683561 236.683561S895.411853 747.164974 764.904497 747.164974z",
            "p-id": "2794",
            fill: "#52C41A",
          }),
        ],
        -1
      )
    ),
    jv = [Nv],
    qv = mt(() =>
      t(
        "svg",
        {
          t: "1649907515643",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "2971",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          width: "40",
          height: "40",
        },
        [
          t("path", {
            d: "M764.867148 249.793136 259.0735 249.793136c-143.070486 0-259.052011 115.984594-259.052011 259.052011 0 143.07151 115.982548 259.050987 259.052011 259.050987l505.793648 0c143.067416 0 259.050987-115.979478 259.050987-259.050987C1023.917112 365.778754 907.933541 249.793136 764.867148 249.793136zM259.0735 745.516428c-130.501216 0-236.671281-106.172111-236.671281-236.671281 0-130.501216 106.170065-236.671281 236.671281-236.671281S495.744781 378.344954 495.744781 508.84617C495.744781 639.34534 389.574716 745.516428 259.0735 745.516428z",
            "p-id": "2972",
            fill: "#999",
          }),
        ],
        -1
      )
    ),
    Rv = [qv],
    Gv = { key: 0, class: "dhcp_info" },
    Vv = { class: "btns" },
    Uv = ["disabled"],
    Wv = ["onClick"],
    Zv = { key: 2, id: "page" },
    Hv = mt(() => t("h2", { class: "title" }, "\u914D\u7F6E\u6210\u529F", -1)),
    Jv = { class: "btns" },
    Kv = ["onClick"],
    Xv = ["onClick"],
    Qv = T({
      setup(e) {
        const a = F(0),
          o = F(!1),
          n = F(""),
          s = F({
            subnetMask: "255.255.255.0",
            staticDnsIp: "223.5.5.5",
            staticLanIp: "",
            gateway: "",
            enableDhcp: !0,
          }),
          m = () => {
            s.value.enableDhcp = !1;
          },
          b = () => {
            s.value.enableDhcp = !0;
          },
          f = (c) => {
            a.value = c;
          },
          u = () =>
            A(this, null, function* () {
              const c = s.value,
                d = x.Loading("\u914D\u7F6E\u4E2D...");
              try {
                const v = yield Y.Guide.GatewayRouter.POST(c);
                if (v != null && v.data) {
                  const { success: l, error: _ } = v == null ? void 0 : v.data;
                  _ && (n.value = _),
                    (l == null || l == 0) &&
                      (x.Success("\u914D\u7F6E\u6210\u529F"), (a.value = 2));
                }
              } catch (v) {
                n.value = v;
              }
              d.Close();
            });
        return (c, d) => {
          const v = ut("router-link");
          return a.value == 0
            ? (i(),
              r("div", fv, [
                mv,
                vv,
                bv,
                gv,
                t("div", _v, [
                  t(
                    "button",
                    {
                      class: "cbi-button cbi-button-apply app-btn app-next",
                      disabled: o.value,
                      onClick: d[0] || (d[0] = (l) => f(1)),
                    },
                    "\u4E0B\u4E00\u6B65",
                    8,
                    hv
                  ),
                  z(
                    v,
                    { to: "/network", custom: "" },
                    {
                      default: q(({ navigate: l }) => [
                        t(
                          "button",
                          {
                            class:
                              "cbi-button cbi-button-remove app-btn app-back",
                            onClick: l,
                          },
                          "\u8FD4\u56DE",
                          8,
                          xv
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]))
            : a.value == 1
            ? (i(),
              r("div", kv, [
                wv,
                yv,
                t(
                  "form",
                  { onSubmit: it(u, ["prevent"]) },
                  [
                    t("label", null, [
                      Cv,
                      t("div", Ev, [
                        t(
                          "select",
                          {
                            disabled: "",
                            style: Gt({
                              backgroundColor: "rgba(215, 215, 215, 1)",
                              color: "#333",
                            }),
                          },
                          Dv,
                          4
                        ),
                      ]),
                    ]),
                    t("label", null, [
                      Bv,
                      P(
                        t(
                          "input",
                          {
                            type: "text",
                            "onUpdate:modelValue":
                              d[1] || (d[1] = (l) => (s.value.staticLanIp = l)),
                            placeholder: "IP\u5730\u5740",
                            required: "",
                            disabled: o.value,
                          },
                          null,
                          8,
                          Yv
                        ),
                        [[J, s.value.staticLanIp, void 0, { trim: !0 }]]
                      ),
                    ]),
                    t("label", null, [
                      Av,
                      P(
                        t(
                          "input",
                          {
                            type: "text",
                            "onUpdate:modelValue":
                              d[2] || (d[2] = (l) => (s.value.subnetMask = l)),
                            placeholder: "\u5B50\u7F51\u63A9\u7801",
                            required: "",
                            disabled: o.value,
                          },
                          null,
                          8,
                          Sv
                        ),
                        [[J, s.value.subnetMask, void 0, { trim: !0 }]]
                      ),
                    ]),
                    t("label", null, [
                      zv,
                      P(
                        t(
                          "input",
                          {
                            type: "text",
                            "onUpdate:modelValue":
                              d[3] || (d[3] = (l) => (s.value.gateway = l)),
                            placeholder: "\u7F51\u5173\u5730\u5740",
                            required: "",
                            disabled: o.value,
                          },
                          null,
                          8,
                          Pv
                        ),
                        [[J, s.value.gateway, void 0, { trim: !0 }]]
                      ),
                    ]),
                    t("label", null, [
                      Tv,
                      P(
                        t(
                          "input",
                          {
                            type: "text",
                            "onUpdate:modelValue":
                              d[4] || (d[4] = (l) => (s.value.staticDnsIp = l)),
                            placeholder: "223.5.5.5",
                            required: "",
                            disabled: o.value,
                          },
                          null,
                          8,
                          Iv
                        ),
                        [[J, s.value.staticDnsIp, void 0, { trim: !0 }]]
                      ),
                    ]),
                    n.value ? (i(), r("div", Lv, k(n.value), 1)) : $("", !0),
                    t("div", Mv, [
                      t("div", Ov, [
                        s.value.enableDhcp
                          ? (i(),
                            r(
                              "span",
                              { key: 0, class: "mobie_open", onClick: m },
                              jv
                            ))
                          : $("", !0),
                        s.value.enableDhcp
                          ? $("", !0)
                          : (i(),
                            r(
                              "span",
                              { key: 1, class: "mobie_close", onClick: b },
                              Rv
                            )),
                      ]),
                      s.value.enableDhcp
                        ? (i(),
                          r(
                            "span",
                            Gv,
                            "\u662F\u5426\u63D0\u4F9B DHCP\uFF08\u5982\u679C\u662F\u63D0\u4F9B DHCP\uFF0C\u5219\u9700\u8981\u5173\u95ED\u4E3B\u8DEF\u7531 DHCP\uFF09"
                          ))
                        : $("", !0),
                    ]),
                    t("div", Vv, [
                      t(
                        "button",
                        {
                          class: "cbi-button cbi-button-apply app-btn app-next",
                          disabled: o.value,
                        },
                        "\u4FDD\u5B58\u914D\u7F6E",
                        8,
                        Uv
                      ),
                      z(
                        v,
                        { to: "/network", custom: "" },
                        {
                          default: q(({ navigate: l }) => [
                            t(
                              "button",
                              {
                                class:
                                  "cbi-button cbi-button-remove app-btn app-back",
                                onClick: l,
                              },
                              "\u8FD4\u56DE",
                              8,
                              Wv
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ],
                  40,
                  Fv
                ),
              ]))
            : a.value == 2
            ? (i(),
              r("div", Zv, [
                Hv,
                t("div", Jv, [
                  z(
                    v,
                    { to: "/", custom: "" },
                    {
                      default: q(({ navigate: l }) => [
                        t(
                          "button",
                          {
                            class:
                              "cbi-button cbi-button-apply app-btn app-next",
                            onClick: l,
                          },
                          "\u8FDB\u5165\u63A7\u5236\u53F0",
                          8,
                          Kv
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  z(
                    v,
                    { to: "/network", custom: "" },
                    {
                      default: q(({ navigate: l }) => [
                        t(
                          "button",
                          {
                            class:
                              "cbi-button cbi-button-remove app-btn app-back",
                            onClick: l,
                          },
                          "\u8FD4\u56DE",
                          8,
                          Xv
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]))
            : $("", !0);
        };
      },
    });
  var tb = S(Qv, [["__scopeId", "data-v-5bc4ca91"]]);
  const Pt = (e) => (O("data-v-9e567cec"), (e = e()), N(), e),
    eb = { class: "actioner-container" },
    ab = Pt(() =>
      t(
        "div",
        { class: "actioner-container_header" },
        [t("span", null, "RAID\u521B\u5EFA\u5411\u5BFC")],
        -1
      )
    ),
    ob = { class: "actioner-container_body" },
    nb = Pt(() =>
      t(
        "p",
        null,
        "RAID\u78C1\u76D8\u9635\u5217\u662F\u7528\u591A\u4E2A\u72EC\u7ACB\u7684\u78C1\u76D8\u7EC4\u6210\u5728\u4E00\u8D77\u5F62\u6210\u4E00\u4E2A\u5927\u7684\u78C1\u76D8\u7CFB\u7EDF\uFF0C \u4ECE\u800C\u5B9E\u73B0\u6BD4\u5355\u5757\u78C1\u76D8\u66F4\u597D\u7684\u5B58\u50A8\u6027\u80FD\u548C\u66F4\u9AD8\u7684\u53EF\u9760\u6027\u3002",
        -1
      )
    ),
    ib = { class: "label-item" },
    rb = Pt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "RAID\u7EA7\u522B\uFF1A")],
        -1
      )
    ),
    sb = { class: "label-item_value" },
    db = ["value"],
    cb = { class: "label-item_tips" },
    ub = { class: "label-item" },
    lb = Pt(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u78C1\u76D8\u9635\u5217\u6210\u5458\uFF1A")],
        -1
      )
    ),
    pb = { key: 0, class: "label-item_value" },
    fb = Pt(() =>
      t("span", { class: "msg-warning" }, " \u68C0\u6D4B\u4E2D... ", -1)
    ),
    mb = [fb],
    vb = { key: 1, class: "label-item_value" },
    bb = ["value"],
    gb = { key: 1, class: "msg-warning" },
    _b = { class: "label-item_tips" },
    hb = K(
      " \u9009\u62E9\u5C06\u8981\u7528\u4E8E\u521B\u5EFA RAID \u7684\u786C\u76D8\uFF0C\u901A\u8FC7 USB \u63A5\u5165\u7684\u8BBE\u5907\u4E0D\u4F1A\u5728\u5217\u8868\u4E2D\u663E\u793A\uFF08USB\u63A5\u5165\u4E0D\u7A33\u5B9A\uFF09\u3002 "
    ),
    xb = { class: "actioner-container_footer" },
    kb = ["disabled"],
    wb = ["disabled"],
    yb = { key: 1, class: "actioner-container_body setup-loading" },
    Fb = Pt(() => t("span", null, "\u6B63\u5728\u521B\u5EFA\u4E2D...", -1)),
    Cb = { class: "actioner-container_body setup-error" },
    Eb = { class: "actioner-container_footer" },
    $b = ["disabled"],
    Db = { class: "actioner-container_body setup-success" },
    Bb = Pt(() =>
      t("div", { class: "body-title" }, "\u521B\u5EFA\u6210\u529F", -1)
    ),
    Yb = Pt(() =>
      t(
        "div",
        { class: "body-info" },
        [
          t(
            "span",
            null,
            " \u5982\u9700\u5BF9raid\u8BBE\u5907\u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C\uFF0C\u9700\u8981\u5BF9raid\u8BBE\u5907\u683C\u5F0F\u5316\u5E76\u6302\u8F7D\u6587\u4EF6\u7CFB\u7EDF "
          ),
          t("br"),
          t("span", null, [
            K(" \u53EF\u524D\u5F80 "),
            t(
              "a",
              {
                href: "/cgi-bin/luci/",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              "\u9996\u9875-\u78C1\u76D8\u4FE1\u606F"
            ),
            K(" \u8FDB\u884C\u6302\u8F7D "),
          ]),
        ],
        -1
      )
    ),
    Ab = T({
      props: {
        Close: { type: Function, required: !0 },
        success: { type: Function },
      },
      setup(e) {
        const a = e,
          o = () => {
            a.Close();
          },
          n = () => {
            a.success && a.success();
          },
          s = F("init"),
          m = F(""),
          b = [
            {
              name: "jbod",
              title: "JBOD (\u7EBF\u6027)",
              info: "\u81F3\u5C11\u9700\u89812\u5757\u786C\u76D8\uFF0C\u5C06\u591A\u4E2A\u786C\u76D8\u5408\u5E76\u4E3A\u5355\u4E2A\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5176\u5BB9\u91CF\u7B49\u4E8E\u6240\u6709\u786C\u76D8\u5BB9\u91CF\u7684\u603B\u548C\u3002\u4E0D\u63D0\u4F9B\u6570\u636E\u5197\u4F59\u3002",
              select: 2,
            },
            {
              name: "raid0",
              title: "RAID 0 (\u6761\u5E26)",
              info: "\u81F3\u5C11\u9700\u89812\u5757\u786C\u76D8\uFF0C\u201C\u533A\u5757\u5EF6\u5C55\u201D\u529F\u80FD\u662F\u5C06\u6570\u636E\u5206\u6210\u591A\u4E2A\u5757\uFF0C\u5E76\u5C06\u6570\u636E\u5757\u5206\u6563\u5230\u7EC4\u6210\u7684\u591A\u4E2A\u786C\u76D8\u4E0A\u4EE5\u63D0\u9AD8\u6027\u80FD\u7684\u8FC7\u7A0B\u3002\u4E0D\u63D0\u4F9B\u6570\u636E\u5197\u4F59\u3002",
              select: 2,
            },
            {
              name: "raid1",
              title: "RAID 1 (\u955C\u50CF)",
              info: "\u81F3\u5C11\u9700\u89812\u5757\u786C\u76D8\uFF0C\u540C\u65F6\u5411\u6240\u6709\u786C\u76D8\u5199\u5165\u76F8\u540C\u7684\u6570\u636E\u3002\u63D0\u4F9B\u6570\u636E\u5197\u4F59\u3002",
              select: 2,
            },
            {
              name: "raid5",
              title: "RAID 5 ",
              info: "\u81F3\u5C11\u9700\u89813\u5757\u786C\u76D8\uFF0C\u6267\u884C\u6BB5\u843D\u5206\u5757\u5EF6\u5C55\uFF0C\u5E76\u5BF9\u5206\u5E03\u5230\u6240\u6709\u7EC4\u6210\u786C\u76D8\u4E0A\u7684\u6570\u636E\u6267\u884C\u5947\u5076\u6821\u9A8C\uFF0C\u4ECE\u800C\u63D0\u4F9B\u6BD4 RAID 1 \u66F4\u6709\u6548\u7684\u6570\u636E\u5197\u4F59\u3002",
              select: 3,
            },
            {
              name: "raid6",
              title: "RAID 6 ",
              info: "\u81F3\u5C11\u9700\u89814\u5757\u786C\u76D8\uFF0C\u6267\u884C\u4E24\u4E2A\u5C42\u7EA7\u7684\u6570\u636E\u5947\u5076\u6821\u9A8C\u4EE5\u5B58\u50A8\u7B49\u4E8E 2 \u4E2A\u786C\u76D8\u5BB9\u91CF\u7684\u5197\u4F59\u6570\u636E\uFF0C\u63D0\u4F9B\u6BD4 RAID 5 \u66F4\u5927\u7A0B\u5EA6\u7684\u6570\u636E\u5197\u4F59\u3002",
              select: 4,
            },
            {
              name: "raid10",
              title: "RAID 10",
              info: "\u81F3\u5C11\u9700\u89814\u5757\u786C\u76D8\uFF0C\u63D0\u4F9B RAID 0 \u7684\u6027\u80FD\u548C RAID 1 \u7684\u6570\u636E\u4FDD\u62A4\u7EA7\u522B\uFF0C\u5C06\u786C\u76D8\u7EC4\u5408\u8FDB\u955C\u50CF\u6570\u636E\u7684\u7531\u4E24\u4E2A\u786C\u76D8\u7EC4\u6210\u7684\u7EC4\u3002",
              select: 4,
            },
          ],
          f = F("raid5"),
          u = F([]),
          c = (h) => {
            let g = "";
            return (
              b.forEach((w) => {
                w.name === h && (g = w.info);
              }),
              g
            );
          },
          d = F(!1),
          v = rt({ loading: !1, members: [] }),
          l = (h) => {};
        (() =>
          A(this, null, function* () {
            v.loading = !0;
            try {
              const h = yield Y.Raid.CreateList.GET();
              if (h != null && h.data) {
                const { success: g, error: w, result: E } = h.data;
                if ((E && (v.members = E.members || []), w)) throw w;
              }
            } catch (h) {
              console.log(h);
            } finally {
              v.loading = !1;
            }
          }))();
        const p = () =>
          A(this, null, function* () {
            const h = b.filter((w) => w.name === f.value)[0],
              g = u.value;
            if (!h) {
              x.Warning("\u8BF7\u9009\u62E9raid\u7C7B\u578B");
              return;
            }
            if (g.length == 0) {
              x.Warning("\u8BF7\u9009\u62E9\u78C1\u76D8");
              return;
            }
            if (h.select > g.length) {
              x.Warning(
                "\u8BF7\u9009\u62E9\u81F3\u5C11" +
                  h.select +
                  "\u5757\u78C1\u76D8"
              );
              return;
            }
            if (
              !!confirm(
                `\u662F\u5426\u7ACB\u5373\u521B\u5EFA ${h.name}\uFF1F\u9009\u62E9\u7684\u786C\u76D8\u6240\u6709\u5206\u533A\u5C06\u4F1A\u88AB\u6E05\u9664\uFF0C\u6B64\u64CD\u4F5C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u786C\u76D8\u6570\u636E\u4E22\u5931\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002`
              ) &&
              !!confirm(
                `\u786E\u5B9A\u521B\u5EFA ${h.name}\uFF1F\u8BE5\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C`
              )
            ) {
              (d.value = !0), (s.value = "loading");
              try {
                const w = yield Y.Raid.Create.POST({
                  level: h.name,
                  devicePaths: g,
                });
                if (w.data) {
                  const { success: E, error: C, result: B } = w.data;
                  if (C) throw C;
                  (E || 0) == 0 && ((s.value = "success"), n());
                }
              } catch (w) {
                (m.value = w), (s.value = "error");
              } finally {
                d.value = !1;
              }
            }
          });
        return (h, g) => {
          const w = ut("icon-loading"),
            E = ut("icon-error"),
            C = ut("icon-success");
          return (
            i(),
            r("div", eb, [
              ab,
              s.value == "init"
                ? (i(),
                  r(
                    L,
                    { key: 0 },
                    [
                      t("div", ob, [
                        nb,
                        t("div", ib, [
                          rb,
                          t("div", sb, [
                            P(
                              t(
                                "select",
                                {
                                  "onUpdate:modelValue":
                                    g[0] || (g[0] = (B) => (f.value = B)),
                                  onChange: l,
                                },
                                [
                                  (i(),
                                  r(
                                    L,
                                    null,
                                    V(b, (B) =>
                                      t(
                                        "option",
                                        { value: B.name },
                                        k(B.title),
                                        9,
                                        db
                                      )
                                    ),
                                    64
                                  )),
                                ],
                                544
                              ),
                              [[Q, f.value]]
                            ),
                          ]),
                          t("div", cb, [z(ht), K(" " + k(c(f.value)), 1)]),
                        ]),
                        t("div", ub, [
                          lb,
                          y(v).loading
                            ? (i(), r("div", pb, mb))
                            : (i(),
                              r("div", vb, [
                                y(v).members.length > 0
                                  ? (i(!0),
                                    r(
                                      L,
                                      { key: 0 },
                                      V(
                                        y(v).members,
                                        (B) => (
                                          i(),
                                          r("label", null, [
                                            P(
                                              t(
                                                "input",
                                                {
                                                  type: "checkbox",
                                                  "onUpdate:modelValue":
                                                    g[1] ||
                                                    (g[1] = (D) =>
                                                      (u.value = D)),
                                                  value: B.path,
                                                },
                                                null,
                                                8,
                                                bb
                                              ),
                                              [[Vt, u.value]]
                                            ),
                                            K(
                                              " \u3010" +
                                                k(B.model) +
                                                "\u3011" +
                                                k(B.name) +
                                                " " +
                                                k(B.path) +
                                                " [" +
                                                k(B.sizeStr) +
                                                "] ",
                                              1
                                            ),
                                          ])
                                        )
                                      ),
                                      256
                                    ))
                                  : (i(),
                                    r(
                                      "span",
                                      gb,
                                      " \u68C0\u6D4B\u4E0D\u5230\u53EF\u7528\u78C1\u76D8\u9635\u5217\u6210\u5458... "
                                    )),
                              ])),
                          t("div", _b, [z(ht), hb]),
                        ]),
                      ]),
                      t("div", xb, [
                        t(
                          "div",
                          { class: "close", onClick: o, disabled: d.value },
                          "\u53D6\u6D88",
                          8,
                          kb
                        ),
                        t(
                          "div",
                          { class: "next", onClick: p, disabled: d.value },
                          "\u521B\u5EFA",
                          8,
                          wb
                        ),
                      ]),
                    ],
                    64
                  ))
                : s.value == "loading"
                ? (i(), r("div", yb, [z(w, { size: 60, color: "#666" }), Fb]))
                : s.value == "error"
                ? (i(),
                  r(
                    L,
                    { key: 2 },
                    [
                      t("div", Cb, [z(E), t("span", null, k(m.value), 1)]),
                      t("div", Eb, [
                        t(
                          "div",
                          { class: "close", onClick: o },
                          "\u5173\u95ED"
                        ),
                        t(
                          "div",
                          { class: "next", onClick: p, disabled: d.value },
                          "\u91CD\u65B0\u521B\u5EFA",
                          8,
                          $b
                        ),
                      ]),
                    ],
                    64
                  ))
                : s.value == "success"
                ? (i(),
                  r(
                    L,
                    { key: 3 },
                    [
                      t("div", Db, [z(C), Bb, Yb]),
                      t("div", { class: "actioner-container_footer" }, [
                        t(
                          "div",
                          { class: "close", onClick: o },
                          "\u5173\u95ED"
                        ),
                      ]),
                    ],
                    64
                  ))
                : $("", !0),
            ])
          );
        };
      },
    });
  var Sb = S(Ab, [["__scopeId", "data-v-9e567cec"]]);
  const zb = { class: "actioner-container" },
    Pb = { class: "actioner-container_body" },
    Tb = ["value"],
    Ib = T({
      props: {
        Close: { type: Function, required: !0 },
        raid: { type: Object, required: !0 },
      },
      setup(e) {
        const a = e,
          o = () => {
            a.Close();
          },
          n = F("");
        return (
          (() => {
            Y.Raid.Detail.POST({ path: a.raid.path })
              .then((m) => {
                if (m.data) {
                  const { result: b, error: f } = m.data;
                  f
                    ? (n.value = f)
                    : (n.value = (b == null ? void 0 : b.detail) || "");
                }
              })
              .catch((m) => {
                n.value = m.message;
              });
          })(),
          (m, b) => (
            i(),
            r("div", zb, [
              t("div", Pb, [t("textarea", { value: n.value }, null, 8, Tb)]),
              t("div", { class: "actioner-container_footer" }, [
                t("div", { class: "close", onClick: o }, "\u5173\u95ED"),
              ]),
            ])
          )
        );
      },
    });
  var Lb = S(Ib, [["__scopeId", "data-v-6855fd9e"]]);
  const Me = (e) => (O("data-v-7e95c56e"), (e = e()), N(), e),
    Mb = { class: "actioner-container" },
    Ob = { class: "actioner-container_header" },
    Nb = { class: "actioner-container_body" },
    jb = { class: "label-item" },
    qb = Me(() => t("div", { class: "label-item_key" }, " \u8BBE\u5907 ", -1)),
    Rb = { class: "label-item_value" },
    Gb = { disabled: "" },
    Vb = { class: "label-item" },
    Ub = Me(() =>
      t(
        "div",
        { class: "label-item_key" },
        " \u9009\u62E9\u786C\u76D8\uFF08\u9009\u62E9\u88AB\u6DFB\u52A0\u5230RAID\u7684\u786C\u76D8\uFF09\uFF1A ",
        -1
      )
    ),
    Wb = { key: 0, class: "label-item_value" },
    Zb = Me(() =>
      t("span", { class: "msg-warning" }, " \u68C0\u6D4B\u4E2D... ", -1)
    ),
    Hb = [Zb],
    Jb = { key: 1, class: "label-item_value" },
    Kb = ["value"],
    Xb = { key: 1, class: "msg-warning" },
    Qb = { class: "actioner-container_footer" },
    tg = ["disabled"],
    eg = ["disabled"],
    ag = T({
      props: {
        Close: { type: Function, required: !0 },
        raid: { type: Object, required: !0 },
        success: { type: Function },
      },
      setup(e) {
        const a = e,
          o = () => {
            a.Close();
          },
          n = () => {
            a.success && a.success();
          },
          s = () =>
            A(this, null, function* () {
              const c = f.value;
              if (c == "") {
                x.Warning(
                  "\u8BF7\u9009\u62E9\u8981\u6DFB\u52A0\u7684\u786C\u76D8"
                );
                return;
              }
              b.value = !0;
              const d = x.Loading("\u4FDD\u5B58\u4E2D...");
              try {
                const v = yield Y.Raid.Add.POST({
                  path: a.raid.path,
                  memberPath: c,
                });
                if (v.data) {
                  const { error: l, success: _ } = v.data;
                  if (l) throw l;
                  (_ || 0) == 0 &&
                    (x.Success("\u4FDD\u5B58\u6210\u529F"), n(), o());
                }
              } catch (v) {
                x.Error(`${v}`);
              } finally {
                (b.value = !1), d.Close();
              }
            }),
          m = rt({ loading: !1, members: [] }),
          b = F(!1),
          f = F("");
        return (
          (() =>
            A(this, null, function* () {
              (m.loading = !0), (b.value = !0);
              try {
                const c = yield Y.Raid.CreateList.GET();
                if (c != null && c.data) {
                  const { success: d, error: v, result: l } = c.data;
                  if ((l && (m.members = l.members || []), v)) throw v;
                }
              } catch (c) {
                console.log(c);
              } finally {
                (b.value = !1), (m.loading = !1);
              }
            }))(),
          (c, d) => (
            i(),
            r("div", Mb, [
              t("div", Ob, [
                t(
                  "span",
                  null,
                  "RAID - " + k(e.raid.name) + " \u4FEE\u6539",
                  1
                ),
              ]),
              t("div", Nb, [
                t("div", jb, [
                  qb,
                  t("div", Rb, [
                    t("select", Gb, [
                      t(
                        "option",
                        null,
                        k(e.raid.name) +
                          "_" +
                          k(e.raid.venderModel) +
                          " (" +
                          k(e.raid.path) +
                          "\uFF0C" +
                          k(e.raid.level) +
                          "\uFF0C" +
                          k(e.raid.size) +
                          ") ",
                        1
                      ),
                    ]),
                  ]),
                ]),
                t("div", Vb, [
                  Ub,
                  y(m).loading
                    ? (i(), r("div", Wb, Hb))
                    : (i(),
                      r("div", Jb, [
                        y(m).members.length > 0
                          ? (i(!0),
                            r(
                              L,
                              { key: 0 },
                              V(
                                y(m).members,
                                (v) => (
                                  i(),
                                  r("label", null, [
                                    P(
                                      t(
                                        "input",
                                        {
                                          type: "radio",
                                          "onUpdate:modelValue":
                                            d[0] ||
                                            (d[0] = (l) => (f.value = l)),
                                          value: v.path,
                                        },
                                        null,
                                        8,
                                        Kb
                                      ),
                                      [[bt, f.value]]
                                    ),
                                    K(
                                      " \u3010" +
                                        k(v.model) +
                                        "\u3011" +
                                        k(v.name) +
                                        " " +
                                        k(v.path) +
                                        " [" +
                                        k(v.sizeStr) +
                                        "] ",
                                      1
                                    ),
                                  ])
                                )
                              ),
                              256
                            ))
                          : (i(),
                            r(
                              "span",
                              Xb,
                              " \u68C0\u6D4B\u4E0D\u5230\u53EF\u7528\u78C1\u76D8\u9635\u5217\u6210\u5458... "
                            )),
                      ])),
                ]),
              ]),
              t("div", Qb, [
                t(
                  "div",
                  { class: "close", onClick: o, disabled: b.value },
                  "\u53D6\u6D88",
                  8,
                  tg
                ),
                t(
                  "div",
                  { class: "next", onClick: s, disabled: b.value },
                  "\u4FDD\u5B58",
                  8,
                  eg
                ),
              ]),
            ])
          )
        );
      },
    });
  var og = S(ag, [["__scopeId", "data-v-7e95c56e"]]);
  const va = (e) => (O("data-v-cabf7b56"), (e = e()), N(), e),
    ng = { class: "actioner-container" },
    ig = { class: "actioner-container_header" },
    rg = { class: "actioner-container_body" },
    sg = { class: "label-item" },
    dg = va(() => t("div", { class: "label-item_key" }, " \u8BBE\u5907 ", -1)),
    cg = { class: "label-item_value" },
    ug = { disabled: "" },
    lg = { class: "label-item" },
    pg = va(() =>
      t(
        "div",
        { class: "label-item_key" },
        " \u9009\u62E9\u786C\u76D8\uFF08\u9009\u62E9\u8981\u4ECERAID\u9635\u5217\u4E2D\u5220\u9664\u7684\u786C\u76D8\uFF09\uFF1A ",
        -1
      )
    ),
    fg = { class: "label-item_value" },
    mg = ["value"],
    vg = { class: "actioner-container_footer" },
    bg = ["disabled"],
    gg = ["disabled"],
    _g = T({
      props: {
        Close: { type: Function, required: !0 },
        raid: { type: Object, required: !0 },
        success: { type: Function },
      },
      setup(e) {
        const a = e,
          o = () => {
            a.Close();
          },
          n = () => {
            a.success && a.success();
          },
          s = () =>
            A(this, null, function* () {
              const f = b.value;
              if (f == "") {
                x.Warning(
                  "\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u786C\u76D8"
                );
                return;
              }
              m.value = !0;
              const u = x.Loading("\u4FDD\u5B58\u4E2D...");
              try {
                const c = yield Y.Raid.Remove.POST({
                  path: a.raid.path,
                  memberPath: f,
                });
                if (c.data) {
                  const { error: d, success: v } = c.data;
                  if (d) throw d;
                  (v || 0) == 0 &&
                    (x.Success("\u4FDD\u5B58\u6210\u529F"), n(), o());
                }
              } catch (c) {
                x.Error(`${c}`);
              } finally {
                (m.value = !1), u.Close();
              }
            }),
          m = F(!1),
          b = F("");
        return (f, u) => (
          i(),
          r("div", ng, [
            t("div", ig, [
              t("span", null, "RAID - " + k(e.raid.name) + " \u79FB\u9664", 1),
            ]),
            t("div", rg, [
              t("div", sg, [
                dg,
                t("div", cg, [
                  t("select", ug, [
                    t(
                      "option",
                      null,
                      k(e.raid.name) +
                        "_" +
                        k(e.raid.venderModel) +
                        " (" +
                        k(e.raid.path) +
                        "\uFF0C" +
                        k(e.raid.level) +
                        "\uFF0C" +
                        k(e.raid.size) +
                        ") ",
                      1
                    ),
                  ]),
                ]),
              ]),
              t("div", lg, [
                pg,
                t("div", fg, [
                  (i(!0),
                  r(
                    L,
                    null,
                    V(
                      e.raid.members,
                      (c) => (
                        i(),
                        r("label", null, [
                          P(
                            t(
                              "input",
                              {
                                type: "radio",
                                "onUpdate:modelValue":
                                  u[0] || (u[0] = (d) => (b.value = d)),
                                value: c,
                              },
                              null,
                              8,
                              mg
                            ),
                            [[bt, b.value]]
                          ),
                          K(" " + k(c), 1),
                        ])
                      )
                    ),
                    256
                  )),
                ]),
              ]),
            ]),
            t("div", vg, [
              t(
                "div",
                { class: "close", onClick: o, disabled: m.value },
                "\u53D6\u6D88",
                8,
                bg
              ),
              t(
                "div",
                { class: "next", onClick: s, disabled: m.value },
                "\u4FDD\u5B58",
                8,
                gg
              ),
            ]),
          ])
        );
      },
    });
  var hg = S(_g, [["__scopeId", "data-v-cabf7b56"]]);
  const Oe = (e) => (O("data-v-529e068a"), (e = e()), N(), e),
    xg = { class: "actioner-container" },
    kg = { class: "actioner-container_header" },
    wg = { class: "actioner-container_body" },
    yg = { class: "label-item" },
    Fg = Oe(() => t("div", { class: "label-item_key" }, " \u8BBE\u5907 ", -1)),
    Cg = { class: "label-item_value" },
    Eg = { disabled: "" },
    $g = { class: "label-item" },
    Dg = Oe(() =>
      t(
        "div",
        { class: "label-item_key" },
        " \u9009\u62E9\u786C\u76D8\uFF08\u9009\u62E9\u7A7A\u95F2\u7684\u786C\u76D8\u6062\u590DRAID\u8BBE\u5907\uFF09\uFF1A ",
        -1
      )
    ),
    Bg = { key: 0, class: "label-item_value" },
    Yg = Oe(() =>
      t("span", { class: "msg-warning" }, " \u68C0\u6D4B\u4E2D... ", -1)
    ),
    Ag = [Yg],
    Sg = { key: 1, class: "label-item_value" },
    zg = ["value"],
    Pg = { key: 1, class: "msg-warning" },
    Tg = { class: "actioner-container_footer" },
    Ig = ["disabled"],
    Lg = ["disabled"],
    Mg = T({
      props: {
        Close: { type: Function, required: !0 },
        raid: { type: Object, required: !0 },
        success: { type: Function },
      },
      setup(e) {
        const a = e,
          o = () => {
            a.Close();
          },
          n = () => {
            a.success && a.success();
          },
          s = () =>
            A(this, null, function* () {
              const c = f.value;
              if (c == "") {
                x.Warning(
                  "\u8BF7\u9009\u62E9\u8981\u6DFB\u52A0\u7684\u786C\u76D8"
                );
                return;
              }
              b.value = !0;
              const d = x.Loading("\u4FDD\u5B58\u4E2D...");
              try {
                const v = yield Y.Raid.Recover.POST({
                  path: a.raid.path,
                  memberPath: c,
                });
                if (v.data) {
                  const { error: l, success: _ } = v.data;
                  if (l) throw l;
                  (_ || 0) == 0 &&
                    (x.Success("\u4FDD\u5B58\u6210\u529F"), n(), o());
                }
              } catch (v) {
                x.Error(`${v}`);
              } finally {
                (b.value = !1), d.Close();
              }
            }),
          m = rt({ loading: !1, members: [] }),
          b = F(!1),
          f = F("");
        return (
          (() =>
            A(this, null, function* () {
              (m.loading = !0), (b.value = !0);
              try {
                const c = yield Y.Raid.CreateList.GET();
                if (c != null && c.data) {
                  const { success: d, error: v, result: l } = c.data;
                  if ((l && (m.members = l.members || []), v)) throw v;
                }
              } catch (c) {
                console.log(c);
              } finally {
                (b.value = !1), (m.loading = !1);
              }
            }))(),
          (c, d) => (
            i(),
            r("div", xg, [
              t("div", kg, [
                t(
                  "span",
                  null,
                  "RAID - " + k(e.raid.name) + " \u6062\u590D",
                  1
                ),
              ]),
              t("div", wg, [
                t("div", yg, [
                  Fg,
                  t("div", Cg, [
                    t("select", Eg, [
                      t(
                        "option",
                        null,
                        k(e.raid.name) +
                          "_" +
                          k(e.raid.venderModel) +
                          " (" +
                          k(e.raid.path) +
                          "\uFF0C" +
                          k(e.raid.level) +
                          "\uFF0C" +
                          k(e.raid.size) +
                          ") ",
                        1
                      ),
                    ]),
                  ]),
                ]),
                t("div", $g, [
                  Dg,
                  y(m).loading
                    ? (i(), r("div", Bg, Ag))
                    : (i(),
                      r("div", Sg, [
                        y(m).members.length > 0
                          ? (i(!0),
                            r(
                              L,
                              { key: 0 },
                              V(
                                y(m).members,
                                (v) => (
                                  i(),
                                  r("label", null, [
                                    P(
                                      t(
                                        "input",
                                        {
                                          type: "radio",
                                          "onUpdate:modelValue":
                                            d[0] ||
                                            (d[0] = (l) => (f.value = l)),
                                          value: v.path,
                                        },
                                        null,
                                        8,
                                        zg
                                      ),
                                      [[bt, f.value]]
                                    ),
                                    K(
                                      " \u3010" +
                                        k(v.model) +
                                        "\u3011" +
                                        k(v.name) +
                                        " " +
                                        k(v.path) +
                                        " [" +
                                        k(v.sizeStr) +
                                        "] ",
                                      1
                                    ),
                                  ])
                                )
                              ),
                              256
                            ))
                          : (i(),
                            r(
                              "span",
                              Pg,
                              " \u68C0\u6D4B\u4E0D\u5230\u53EF\u7528\u78C1\u76D8\u9635\u5217\u6210\u5458... "
                            )),
                      ])),
                ]),
              ]),
              t("div", Tg, [
                t(
                  "div",
                  { class: "close", onClick: o, disabled: b.value },
                  "\u53D6\u6D88",
                  8,
                  Ig
                ),
                t(
                  "div",
                  { class: "next", onClick: s, disabled: b.value },
                  "\u4FDD\u5B58",
                  8,
                  Lg
                ),
              ]),
            ])
          )
        );
      },
    });
  var Og = S(Mg, [["__scopeId", "data-v-529e068a"]]);
  const Ng = { class: "action-main" },
    jg = T({
      props: {
        Close: { type: Function, required: !0 },
        setup: { type: String, default: "create" },
        raid: { type: Object },
        success: { type: Function },
      },
      setup(e) {
        return (a, o) => (
          i(),
          M(
            ot,
            { type: 2 },
            {
              default: q(() => [
                t("div", Ng, [
                  e.setup == "create"
                    ? (i(),
                      M(Sb, { key: 0, Close: e.Close }, null, 8, ["Close"]))
                    : e.setup == "info" && e.raid != null
                    ? (i(),
                      M(
                        Lb,
                        {
                          key: 1,
                          Close: e.Close,
                          raid: e.raid,
                          success: e.success,
                        },
                        null,
                        8,
                        ["Close", "raid", "success"]
                      ))
                    : e.setup == "edit" && e.raid != null
                    ? (i(),
                      M(
                        og,
                        {
                          key: 2,
                          Close: e.Close,
                          raid: e.raid,
                          success: e.success,
                        },
                        null,
                        8,
                        ["Close", "raid", "success"]
                      ))
                    : e.setup == "remove" && e.raid != null
                    ? (i(),
                      M(
                        hg,
                        {
                          key: 3,
                          Close: e.Close,
                          raid: e.raid,
                          success: e.success,
                        },
                        null,
                        8,
                        ["Close", "raid", "success"]
                      ))
                    : e.setup == "recover" && e.raid != null
                    ? (i(),
                      M(
                        Og,
                        {
                          key: 4,
                          Close: e.Close,
                          raid: e.raid,
                          success: e.success,
                        },
                        null,
                        8,
                        ["Close", "raid", "success"]
                      ))
                    : $("", !0),
                ]),
              ]),
              _: 1,
            }
          )
        );
      },
    });
  var qg = S(jg, [["__scopeId", "data-v-e20ba082"]]);
  const Xt = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        qg,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.use(aa), o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
      return { Close: n };
    },
    ie = (e) => (O("data-v-bb34e5bc"), (e = e()), N(), e),
    Rg = { id: "page" },
    Gg = ie(() => t("h2", { name: "content" }, " RAID\u7BA1\u7406", -1)),
    Vg = ie(() =>
      t(
        "div",
        { class: "cbi-map-descr" },
        [
          t(
            "p",
            null,
            " RAID \uFF08 Redundant Array of Independent Disks \uFF09\u5373\u72EC\u7ACB\u78C1\u76D8\u5197\u4F59\u9635\u5217\uFF0C\u7B80\u79F0\u4E3A\u300C\u78C1\u76D8\u9635\u5217\u300D\uFF0C \u5C31\u662F\u7528\u591A\u4E2A\u72EC\u7ACB\u7684\u78C1\u76D8\u7EC4\u6210\u5728\u4E00\u8D77\u5F62\u6210\u4E00\u4E2A\u5927\u7684\u78C1\u76D8\u7CFB\u7EDF\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6BD4\u5355\u5757\u78C1\u76D8\u66F4\u597D\u7684\u5B58\u50A8\u6027\u80FD\u548C\u66F4\u9AD8\u7684\u53EF\u9760\u6027\u3002 "
          ),
          t(
            "p",
            { style: { color: "#f5365b", "margin-top": "10px" } },
            " * RAID\u529F\u80FD\u6B63\u5728\u516C\u6D4B\u4E2D\uFF0C\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u5982\u9020\u6210\u6570\u636E\u4E22\u5931\u7B49\u95EE\u9898\uFF0C\u6982\u4E0D\u8D1F\u8D23\uFF0C\u8BF7\u8C28\u614E\u4F7F\u7528\u3002 "
          ),
          t(
            "p",
            { style: { color: "#f5365b", "margin-top": "10px" } },
            " * \u5982\u679C\u7531\u4E8E\u7CFB\u7EDF\u91CD\u7F6E\u6216\u91CD\u542F\u5BFC\u81F4\u7684RAID\u8BBE\u5907\u4E22\u5931\u53EF\u4EE5\u5C1D\u8BD5\u901A\u8FC7\u4E0B\u65B9'\u626B\u63CF\u6062\u590DRAID'\u6309\u94AE\u6062\u590D "
          ),
        ],
        -1
      )
    ),
    Ug = { class: "btns" },
    Wg = ["disabled"],
    Zg = { class: "cbi-section cbi-tblsection", id: "cbi-nfs-mount" },
    Hg = { class: "table cbi-section-table" },
    Jg = { style: {} },
    Kg = ie(() =>
      t(
        "tr",
        { class: "tr cbi-section-table-titles anonymous" },
        [
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u540D\u79F0"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u8BBE\u5907"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u72B6\u6001"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u7EA7\u522B"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u5BB9\u91CF"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u6210\u5458"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u6302\u8F7D\u4FE1\u606F"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u64CD\u4F5C"
          ),
        ],
        -1
      )
    ),
    Xg = { class: "tr cbi-section-table-row" },
    Qg = { class: "td cbi-value-field" },
    t_ = { class: "td cbi-value-field" },
    e_ = ["title"],
    a_ = { class: "item-status" },
    o_ = { key: 0, class: "item-status" },
    n_ = { class: "td cbi-value-field" },
    i_ = { class: "td cbi-value-field" },
    r_ = { class: "td cbi-value-field" },
    s_ = ie(() => t("br", null, null, -1)),
    d_ = { class: "td cbi-value-field" },
    c_ = ie(() => t("br", null, null, -1)),
    u_ = { key: 1, href: "/cgi-bin/luci/admin/quickstart/pages/" },
    l_ = { class: "td cbi-section-table-cell nowrap cbi-section-actions" },
    p_ = ["disabled", "onClick"],
    f_ = ["disabled", "onClick"],
    m_ = ["onClick"],
    v_ = ["onClick"],
    b_ = ["onClick"],
    g_ = T({
      setup(e) {
        const a = rt({ disksList: [] }),
          o = () =>
            A(this, null, function* () {
              try {
                const p = yield Y.Raid.List.GET();
                if (p != null && p.data) {
                  const { success: h, error: g, result: w } = p.data;
                  if ((w && (a.disksList = w.disks || []), g)) throw g;
                }
              } catch (p) {
                console.log(p);
              }
            });
        o();
        const n = setInterval(() => {
          o();
        }, 5e3);
        Ee(() => {
          clearInterval(n);
        });
        const s = (p) => {
            switch (p.level) {
              case "raid0":
              case "jbod":
                return !0;
            }
            return (
              p.status.indexOf("degraded") != -1 ||
              p.status.indexOf("resyncing(") != -1
            );
          },
          m = (p) => {
            let h = [];
            return (
              p.childrens &&
                p.childrens.forEach((g) => {
                  g.mountPoint && h.push(`${g.name}(${g.mountPoint})`);
                }),
              h
            );
          },
          b = () =>
            A(this, null, function* () {
              Xt({
                setup: "create",
                success: () => {
                  o();
                },
              });
            }),
          f = (p) => {
            Xt({ setup: "info", raid: p });
          },
          u = (p) =>
            A(this, null, function* () {
              if (
                p.childrens &&
                p.childrens.length > 0 &&
                p.childrens.filter((w) => w.mountPoint).length > 0
              ) {
                ce({
                  content:
                    "\u5220\u9664 RAID \u8BBE\u5907\u4E4B\u524D\u8BF7\u5148\u5378\u8F7D\u6587\u4EF6\u7CFB\u7EDF",
                  nextTitle: "\u53BB\u5378\u8F7D",
                  next: () => {
                    location.href = "/cgi-bin/luci/admin/system/mounts";
                  },
                  clearTitle: "\u53D6\u6D88",
                  clear: () => {},
                });
                return;
              }
              if (
                !confirm(
                  `\u786E\u5B9A\u8981\u5220\u9664 ${p.name} \u8BE5\u78C1\u76D8\u9635\u5217\u5417\uFF1F\u5220\u9664\u64CD\u4F5C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6570\u636E\u4E22\u5931\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002\u5220\u9664\u6210\u529F\u540E\uFF0C\u5982\u9700\u53E6\u5916\u7EC4RAID\uFF0C\u5EFA\u8BAE\u7A0D\u7B49\u51E0\u5206\u949F\u540E\u518D\u8BD5\u3002`
                ) ||
                !confirm(`\u786E\u5B9A\u8981\u5220\u9664 ${p.name} \u5417?`)
              )
                return;
              const h = x.Loading("\u5220\u9664\u4E2D...");
              try {
                const g = yield Y.Raid.Delete.POST({
                  path: p.path,
                  members: p.members,
                });
                if (g.data) {
                  const { success: w, error: E } = g.data;
                  if (E) throw E;
                  (w || 0) == 0 && (x.Success("\u5220\u9664\u6210\u529F"), o());
                }
              } catch (g) {
                x.Error(`${g}`);
              } finally {
                h.Close();
              }
            }),
          c = (p) => {
            Xt({
              setup: "edit",
              raid: p,
              success: () => {
                o();
              },
            });
          },
          d = (p) => {
            Xt({
              setup: "remove",
              raid: p,
              success: () => {
                o();
              },
            });
          },
          v = (p) => {
            Xt({
              setup: "recover",
              raid: p,
              success: () => {
                o();
              },
            });
          },
          l = F(!1),
          _ = () => {
            ce({
              content:
                "\u5C06\u626B\u63CF\u78C1\u76D8\u91CC RAID \u7684\u78C1\u76D8\u9635\u5217\u914D\u7F6E\u5E76\u6062\u590D\uFF0C\u786E\u5B9A\u8981\u6062\u590D RAID \u78C1\u76D8\u9635\u5217\u5417\uFF1F",
              nextTitle: "\u786E\u5B9A",
              next: () =>
                A(this, null, function* () {
                  l.value = !0;
                  const p = x.Loading("\u626B\u63CF\u4E2D...");
                  try {
                    const h = yield Y.Raid.Autofix.GET();
                    if (h.data) {
                      const { error: g, success: w } = h.data;
                      if (g) throw g;
                      (w || 0) == 0 &&
                        (x.Success("\u6062\u590D\u5B8C\u6210"), o());
                    }
                  } catch (h) {
                    x.Error(`${h}`);
                  } finally {
                    p.Close(), (l.value = !1);
                  }
                }),
              clearTitle: "\u53D6\u6D88",
              clear: () => {},
            });
          };
        return (p, h) => (
          i(),
          r("div", Rg, [
            Gg,
            Vg,
            t("div", Ug, [
              t(
                "button",
                {
                  class: "btn cbi-button cbi-button-apply",
                  onClick: h[0] || (h[0] = (g) => b()),
                },
                "\u521B\u5EFARAID"
              ),
              t(
                "button",
                {
                  class: "btn cbi-button cbi-button-apply",
                  onClick: h[1] || (h[1] = (g) => _()),
                  disabled: l.value,
                },
                "\u626B\u63CF\u6062\u590DRAID",
                8,
                Wg
              ),
            ]),
            t("div", null, [
              t("div", Zg, [
                t("table", Hg, [
                  t("tbody", Jg, [
                    Kg,
                    (i(!0),
                    r(
                      L,
                      null,
                      V(
                        y(a).disksList,
                        (g) => (
                          i(),
                          r("tr", Xg, [
                            t("td", Qg, [t("b", null, k(g.name), 1)]),
                            t("td", t_, [t("b", null, k(g.path), 1)]),
                            t(
                              "td",
                              {
                                class: "td cbi-value-field",
                                title: g.status + g.rebuildStatus,
                              },
                              [
                                t("b", a_, k(g.status), 1),
                                g.rebuildStatus
                                  ? (i(),
                                    r("b", o_, k(`(${g.rebuildStatus})`), 1))
                                  : $("", !0),
                              ],
                              8,
                              e_
                            ),
                            t("td", n_, [t("b", null, k(g.level), 1)]),
                            t("td", i_, [t("b", null, k(g.size), 1)]),
                            t("td", r_, [
                              (i(!0),
                              r(
                                L,
                                null,
                                V(
                                  g.members,
                                  (w) => (
                                    i(), r("b", null, [K(k(w) + " ", 1), s_])
                                  )
                                ),
                                256
                              )),
                            ]),
                            t("td", d_, [
                              m(g).length > 0
                                ? (i(!0),
                                  r(
                                    L,
                                    { key: 0 },
                                    V(
                                      m(g),
                                      (w) => (
                                        i(),
                                        r("b", null, [K(k(w) + " ", 1), c_])
                                      )
                                    ),
                                    256
                                  ))
                                : (i(), r("a", u_, "\u53BB\u6302\u8F7D")),
                            ]),
                            t("td", l_, [
                              t(
                                "button",
                                {
                                  class: "btn cbi-button cbi-button-apply",
                                  title: "\u6269\u5145",
                                  disabled: s(g),
                                  onClick: (w) => c(g),
                                },
                                "\u6269\u5145",
                                8,
                                p_
                              ),
                              t(
                                "button",
                                {
                                  class: "btn cbi-button cbi-button-apply",
                                  title: "\u79FB\u9664",
                                  disabled: s(g),
                                  onClick: (w) => d(g),
                                },
                                "\u79FB\u9664",
                                8,
                                f_
                              ),
                              t(
                                "button",
                                {
                                  class: "btn cbi-button cbi-button-apply",
                                  title: "\u6062\u590D",
                                  onClick: (w) => v(g),
                                },
                                "\u6062\u590D",
                                8,
                                m_
                              ),
                              t(
                                "button",
                                {
                                  class: "btn cbi-button cbi-button-apply",
                                  title: "\u8BE6\u60C5",
                                  onClick: (w) => f(g),
                                },
                                "\u8BE6\u60C5",
                                8,
                                v_
                              ),
                              t(
                                "button",
                                {
                                  class: "cbi-button cbi-button-remove",
                                  title:
                                    "\u5982\u679C\u60A8\u5728RAID\u78C1\u76D8\u9635\u5217\u4E2D\u521B\u5EFA\u4E86\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5148\u5378\u8F7D\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u540E\u5220\u9664\u6587\u4EF6\u7CFB\u7EDF\u5220\u9664\u64CD\u4F5C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6570\u636E\u4E22\u5931\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002",
                                  onClick: (w) => u(g),
                                },
                                "\u5220\u9664",
                                8,
                                b_
                              ),
                            ]),
                          ])
                        )
                      ),
                      256
                    )),
                  ]),
                ]),
              ]),
            ]),
          ])
        );
      },
    });
  var __ = S(g_, [["__scopeId", "data-v-bb34e5bc"]]);
  const ba = (e) => (O("data-v-845aadae"), (e = e()), N(), e),
    h_ = { id: "page" },
    x_ = ba(() => t("h2", { name: "content" }, "S.M.A.R.T.", -1)),
    k_ = ba(() =>
      t(
        "div",
        { class: "cbi-map-descr" },
        [
          t(
            "p",
            null,
            " S.M.A.R.T.\uFF0C\u5168\u79F0\u4E3A\u201CSelf-Monitoring Analysis and Reporting Technology\u201D\uFF0C\u5373\u201C\u81EA\u6211\u76D1\u6D4B\u3001\u5206\u6790\u53CA\u62A5\u544A\u6280\u672F\u201D\uFF0C "
          ),
          t(
            "p",
            null,
            " \u662F\u4E00\u79CD\u81EA\u52A8\u7684\u786C\u76D8\u72B6\u6001\u68C0\u6D4B\u4E0E\u9884\u8B66\u7CFB\u7EDF\u548C\u89C4\u8303\u3002\u901A\u8FC7\u5728\u786C\u76D8\u786C\u4EF6\u5185\u7684\u68C0\u6D4B\u6307\u4EE4\u5BF9\u786C\u76D8\u7684\u786C\u4EF6\u5982\u78C1\u5934\u3001\u76D8\u7247\u3001\u9A6C\u8FBE\u3001 "
          ),
          t(
            "p",
            null,
            " \u7535\u8DEF\u7684\u8FD0\u884C\u60C5\u51B5\u8FDB\u884C\u76D1\u63A7\u3001\u8BB0\u5F55\u5E76\u4E0E\u5382\u5546\u6240\u8BBE\u5B9A\u7684\u9884\u8BBE\u5B89\u5168\u503C\u8FDB\u884C\u6BD4\u8F83\uFF0C\u82E5\u76D1\u63A7\u60C5\u51B5\u5C06\u8981\u6216\u5DF2\u8D85\u51FA\u9884\u8BBE\u5B89\u5168\u503C\u7684\u5B89\u5168\u8303\u56F4\uFF0C "
          ),
          t(
            "p",
            null,
            " \u5C31\u53EF\u4EE5\u901A\u8FC7\u4E3B\u673A\u7684\u76D1\u63A7\u786C\u4EF6\u6216\u8F6F\u4EF6\u81EA\u52A8\u5411\u7528\u6237\u4F5C\u51FA\u8B66\u544A\u5E76\u8FDB\u884C\u8F7B\u5FAE\u7684\u81EA\u52A8\u4FEE\u590D\uFF0C\u4EE5\u63D0\u524D\u4FDD\u969C\u786C\u76D8\u6570\u636E\u7684\u5B89\u5168\u3002 "
          ),
        ],
        -1
      )
    ),
    w_ = { class: "tabs" },
    y_ = ["href", "onClick"],
    F_ = T({
      setup(e) {
        const a = [
            { to: "/smart", name: "\u5E38\u89C4\u8BBE\u7F6E" },
            { to: "/smart/task", name: "\u8BA1\u5212\u4EFB\u52A1" },
            { to: "/smart/log", name: "\u67E5\u770B\u65E5\u5FD7" },
          ],
          o = F(!1),
          n = rt({
            global: { enable: !1, powermode: "never", tmpDiff: 0, tmpMax: 0 },
            devices: [],
            tasks: [],
          }),
          s = (f) => {
            const { global: u, devices: c, tasks: d } = f;
            u &&
              ((n.global.enable = u.enable || !1),
              (n.global.powermode = u.powermode || "never")),
              (n.devices = c || []),
              (n.tasks = d || []);
          };
        (() =>
          A(this, null, function* () {
            try {
              const f = yield Y.Smart.Config.GET();
              if (f.data) {
                const { result: u } = f.data;
                u && s(u);
              }
            } catch (f) {
            } finally {
              o.value = !0;
            }
          }))();
        const b = (f) =>
          A(this, null, function* () {
            const u = x.Loading("\u4FDD\u5B58\u4E2D...");
            try {
              const c = yield Y.Smart.Config.POST(f);
              if (c.data) {
                console.log(c.data);
                const { success: d, error: v, result: l } = c.data;
                if (v) throw v;
                (d || 0) == 0 &&
                  (x.Success("\u4FDD\u5B58\u6210\u529F"), l && s(l));
              }
            } catch (c) {
              x.Error(`${c}`);
            } finally {
              u.Close();
            }
          });
        return (f, u) => {
          const c = ut("router-link"),
            d = ut("router-view");
          return (
            i(),
            r("div", h_, [
              x_,
              k_,
              t("ul", w_, [
                (i(),
                r(
                  L,
                  null,
                  V(a, (v) =>
                    z(
                      c,
                      { to: v.to, custom: "", key: v.to },
                      {
                        default: q(
                          ({
                            route: l,
                            href: _,
                            navigate: p,
                            isActive: h,
                            isExactActive: g,
                          }) => [
                            t(
                              "li",
                              { class: ct({ "active cbi-tab": h && g }) },
                              [
                                t(
                                  "a",
                                  { href: _, onClick: p },
                                  k(v.name),
                                  9,
                                  y_
                                ),
                              ],
                              2
                            ),
                          ]
                        ),
                        _: 2,
                      },
                      1032,
                      ["to"]
                    )
                  ),
                  64
                )),
              ]),
              o.value
                ? (i(),
                  M(
                    d,
                    { key: 0, name: "default" },
                    {
                      default: q(({ Component: v, route: l }) => [
                        (i(),
                        M(
                          za,
                          null,
                          {
                            default: q(() => [
                              (i(),
                              M(
                                Pa(v),
                                { key: l.path, config: y(n), saveData: b },
                                null,
                                8,
                                ["config"]
                              )),
                            ]),
                            _: 2,
                          },
                          1024
                        )),
                      ]),
                      _: 1,
                    }
                  ))
                : $("", !0),
            ])
          );
        };
      },
    });
  var C_ = S(F_, [["__scopeId", "data-v-845aadae"]]);
  const E_ = { class: "action-main" },
    $_ = T({
      setup(e) {
        return (a, o) => (
          i(),
          M(
            ot,
            { type: 2 },
            {
              default: q(() => [
                t("div", E_, [It(a.$slots, "default", {}, void 0, !0)]),
              ]),
              _: 3,
            }
          )
        );
      },
    });
  var xe = S($_, [["__scopeId", "data-v-f3b0d6f0"]]);
  const D_ = { class: "actioner-container" },
    B_ = { class: "actioner-container_header" },
    Y_ = { class: "actioner-container_body" },
    A_ = { class: "cbi-value" },
    S_ = t("label", { class: "cbi-value-title" }, " \u78C1\u76D8 ", -1),
    z_ = { class: "cbi-value-field" },
    P_ = { class: "cbi-value-description" },
    T_ = { class: "cbi-value" },
    I_ = t(
      "label",
      { class: "cbi-value-title" },
      " \u6E29\u5EA6\u76D1\u6D4B\uFF08\u5DEE\u5F02\uFF09 ",
      -1
    ),
    L_ = { class: "cbi-value-field" },
    M_ = { class: "cbi-checkbox" },
    O_ = t("option", { value: -1 }, "\u4F7F\u7528\u5168\u5C40\u914D\u7F6E", -1),
    N_ = t("option", { value: 0 }, "\u7981\u7528", -1),
    j_ = ["value"],
    q_ = t(
      "div",
      { class: "cbi-value-description" },
      " \u81EA\u4E0A\u6B21\u62A5\u544A\u4EE5\u6765\u6E29\u5EA6\u53D8\u5316\u81F3\u5C11 N \u5EA6\uFF0C\u5219\u9700\u62A5\u544A. ",
      -1
    ),
    R_ = { class: "cbi-value" },
    G_ = t(
      "label",
      { class: "cbi-value-title" },
      " \u6E29\u5EA6\u76D1\u6D4B\uFF08\u6700\u5927\uFF09 ",
      -1
    ),
    V_ = { class: "cbi-value-field" },
    U_ = { class: "cbi-checkbox" },
    W_ = t("option", { value: -1 }, "\u4F7F\u7528\u5168\u5C40\u914D\u7F6E", -1),
    Z_ = t("option", { value: 0 }, "\u7981\u7528", -1),
    H_ = ["value"],
    J_ = t(
      "div",
      { class: "cbi-value-description" },
      " \u5982\u679C\u6E29\u5EA6\u5927\u4E8E\u6216\u7B49\u4E8E N \u6444\u6C0F\u5EA6\u5219\u62A5\u544A. ",
      -1
    ),
    K_ = { class: "actioner-container_footer" },
    X_ = ["disabled"],
    Q_ = ["disabled"],
    th = T({
      props: {
        close: { type: Function, required: !0 },
        disk: { type: Object, required: !0 },
        device: { type: Object },
        next: { type: Function, required: !0 },
      },
      setup(e) {
        var b, f, u;
        const a = e;
        console.log(a.device);
        const o = F(!1),
          n = rt({
            tmpDiff: ((b = a.device) == null ? void 0 : b.tmpDiff) || 0,
            tmpMax: ((f = a.device) == null ? void 0 : f.tmpMax) || 0,
            devicePath: ((u = a.device) == null ? void 0 : u.devicePath) || "",
          }),
          s = () => {
            (o.value = !0), a.close();
          },
          m = () =>
            A(this, null, function* () {
              o.value = !0;
              try {
                yield a.next({
                  tmpDiff: n.tmpDiff,
                  tmpMax: n.tmpMax,
                  devicePath: n.devicePath,
                }),
                  (o.value = !1),
                  s();
              } catch (c) {}
            });
        return (c, d) => (
          i(),
          M(xe, null, {
            default: q(() => [
              t("div", D_, [
                t("div", B_, [
                  t(
                    "span",
                    null,
                    " S.M.A.R.T. \xBB \u8BBE\u5907 \xBB " + k(e.disk.path),
                    1
                  ),
                ]),
                t("div", Y_, [
                  t("div", A_, [
                    S_,
                    t("div", z_, [
                      t(
                        "div",
                        P_,
                        k(e.disk.model) +
                          " [ " +
                          k(e.disk.path) +
                          "\uFF0C" +
                          k(e.disk.sizeStr) +
                          " ] ",
                        1
                      ),
                    ]),
                  ]),
                  t("div", T_, [
                    I_,
                    t("div", L_, [
                      t("div", M_, [
                        P(
                          t(
                            "select",
                            {
                              class: "cbi-input-select",
                              "onUpdate:modelValue":
                                d[0] || (d[0] = (v) => (y(n).tmpDiff = v)),
                            },
                            [
                              O_,
                              N_,
                              (i(),
                              r(
                                L,
                                null,
                                V(20, (v) =>
                                  t(
                                    "option",
                                    { value: v },
                                    k(v) + "\xB0C",
                                    9,
                                    j_
                                  )
                                ),
                                64
                              )),
                            ],
                            512
                          ),
                          [[Q, y(n).tmpDiff, void 0, { number: !0 }]]
                        ),
                      ]),
                      q_,
                    ]),
                  ]),
                  t("div", R_, [
                    G_,
                    t("div", V_, [
                      t("div", U_, [
                        P(
                          t(
                            "select",
                            {
                              class: "cbi-input-select",
                              "onUpdate:modelValue":
                                d[1] || (d[1] = (v) => (y(n).tmpMax = v)),
                            },
                            [
                              W_,
                              Z_,
                              (i(),
                              r(
                                L,
                                null,
                                V(20, (v) =>
                                  t(
                                    "option",
                                    { value: v * 5 },
                                    k(v * 5) + "\xB0C",
                                    9,
                                    H_
                                  )
                                ),
                                64
                              )),
                            ],
                            512
                          ),
                          [[Q, y(n).tmpMax, void 0, { number: !0 }]]
                        ),
                      ]),
                      J_,
                    ]),
                  ]),
                ]),
                t("div", K_, [
                  t(
                    "button",
                    { class: "close", onClick: s, disabled: o.value },
                    "\u53D6\u6D88",
                    8,
                    X_
                  ),
                  t(
                    "button",
                    { class: "next", onClick: m, disabled: o.value },
                    "\u4FDD\u5B58",
                    8,
                    Q_
                  ),
                ]),
              ]),
            ]),
            _: 1,
          })
        );
      },
    }),
    eh = { class: "actioner-container" },
    ah = t(
      "div",
      { class: "actioner-container_header" },
      [t("span", null, " \u521B\u5EFA\u8BA1\u5212\u4EFB\u52A1 ")],
      -1
    ),
    oh = { class: "actioner-container_body" },
    nh = { class: "cbi-value" },
    ih = t("label", { class: "cbi-value-title" }, " \u78C1\u76D8 ", -1),
    rh = { class: "cbi-value-field" },
    sh = { class: "cbi-checkbox" },
    dh = t("option", { value: "" }, "\u9009\u62E9\u78C1\u76D8", -1),
    ch = ["value"],
    uh = { class: "cbi-value" },
    lh = t("label", { class: "cbi-value-title" }, " \u7C7B\u578B ", -1),
    ph = { class: "cbi-value-field" },
    fh = { class: "cbi-checkbox" },
    mh = t("option", { value: "short" }, "\u77ED\u6682\u81EA\u68C0", -1),
    vh = t("option", { value: "long" }, "\u957F\u65F6\u81EA\u68C0", -1),
    bh = t(
      "option",
      { value: "conveyance" },
      "\u4F20\u8F93\u65F6\u81EA\u68C0",
      -1
    ),
    gh = t(
      "option",
      { value: "offline" },
      "\u79BB\u7EBF\u65F6\u81EA\u68C0",
      -1
    ),
    _h = [mh, vh, bh, gh],
    hh = { class: "cbi-value" },
    xh = t("label", { class: "cbi-value-title" }, " \u5C0F\u65F6 ", -1),
    kh = { class: "cbi-value-field" },
    wh = { class: "cbi-checkbox" },
    yh = t("option", { value: "*" }, "*", -1),
    Fh = ["value"],
    Ch = t(
      "div",
      { class: "cbi-value-description" },
      " * \u8868\u793A\u6BCF\u5C0F\u65F6 ",
      -1
    ),
    Eh = { class: "cbi-value" },
    $h = t("label", { class: "cbi-value-title" }, " \u5929 ", -1),
    Dh = { class: "cbi-value-field" },
    Bh = { class: "cbi-checkbox" },
    Yh = t("option", { value: "*" }, "*", -1),
    Ah = ["value"],
    Sh = t(
      "div",
      { class: "cbi-value-description" },
      " * \u8868\u793A\u6BCF\u5929 ",
      -1
    ),
    zh = { class: "cbi-value" },
    Ph = t("label", { class: "cbi-value-title" }, " \u6708 ", -1),
    Th = { class: "cbi-value-field" },
    Ih = { class: "cbi-checkbox" },
    Lh = t("option", { value: "*" }, "*", -1),
    Mh = ["value"],
    Oh = t(
      "div",
      { class: "cbi-value-description" },
      " * \u8868\u793A\u6BCF\u6708 ",
      -1
    ),
    Nh = { class: "actioner-container_footer" },
    jh = ["disabled"],
    qh = ["disabled"],
    Rh = T({
      props: {
        close: { type: Function, required: !0 },
        config: { type: Object, required: !0 },
        next: { type: Function, required: !0 },
      },
      setup(e) {
        const a = e,
          o = F(!1),
          n = rt({
            type: "short",
            devicePath: "",
            month: "*",
            dayPerMonth: "*",
            hour: "*",
          }),
          s = F([]);
        (() =>
          A(this, null, function* () {
            try {
              const u = yield Y.Smart.List.GET();
              if (u.data) {
                const { result: c, error: d } = u.data;
                c && c.disks && (s.value = c.disks);
              }
            } catch (u) {}
          }))();
        const b = () => {
            (o.value = !0), a.close();
          },
          f = () =>
            A(this, null, function* () {
              if (n.devicePath == "") {
                x.Warning("\u8BF7\u9009\u62E9\u78C1\u76D8");
                return;
              }
              o.value = !0;
              try {
                yield a.next(n), b();
              } catch (u) {
              } finally {
                o.value = !1;
              }
            });
        return (u, c) => (
          i(),
          M(xe, null, {
            default: q(() => [
              t("div", eh, [
                ah,
                t("div", oh, [
                  t("div", nh, [
                    ih,
                    t("div", rh, [
                      t("div", sh, [
                        P(
                          t(
                            "select",
                            {
                              class: "cbi-input-select",
                              "onUpdate:modelValue":
                                c[0] || (c[0] = (d) => (y(n).devicePath = d)),
                            },
                            [
                              dh,
                              (i(!0),
                              r(
                                L,
                                null,
                                V(
                                  s.value,
                                  (d) => (
                                    i(),
                                    r(
                                      "option",
                                      { value: d.path },
                                      k(d.model) +
                                        " [ " +
                                        k(d.path) +
                                        "\uFF0C" +
                                        k(d.sizeStr) +
                                        " ] ",
                                      9,
                                      ch
                                    )
                                  )
                                ),
                                256
                              )),
                            ],
                            512
                          ),
                          [[Q, y(n).devicePath, void 0, { trim: !0 }]]
                        ),
                      ]),
                    ]),
                  ]),
                  t("div", uh, [
                    lh,
                    t("div", ph, [
                      t("div", fh, [
                        P(
                          t(
                            "select",
                            {
                              class: "cbi-input-select",
                              "onUpdate:modelValue":
                                c[1] || (c[1] = (d) => (y(n).type = d)),
                            },
                            _h,
                            512
                          ),
                          [[Q, y(n).type, void 0, { trim: !0 }]]
                        ),
                      ]),
                    ]),
                  ]),
                  t("div", hh, [
                    xh,
                    t("div", kh, [
                      t("div", wh, [
                        P(
                          t(
                            "select",
                            {
                              class: "cbi-input-select",
                              "onUpdate:modelValue":
                                c[2] || (c[2] = (d) => (y(n).hour = d)),
                            },
                            [
                              yh,
                              (i(),
                              r(
                                L,
                                null,
                                V(24, (d, v) =>
                                  t("option", { value: `${v}` }, k(v), 9, Fh)
                                ),
                                64
                              )),
                            ],
                            512
                          ),
                          [[Q, y(n).hour, void 0, { trim: !0 }]]
                        ),
                      ]),
                      Ch,
                    ]),
                  ]),
                  t("div", Eh, [
                    $h,
                    t("div", Dh, [
                      t("div", Bh, [
                        P(
                          t(
                            "select",
                            {
                              class: "cbi-input-select",
                              "onUpdate:modelValue":
                                c[3] || (c[3] = (d) => (y(n).dayPerMonth = d)),
                            },
                            [
                              Yh,
                              (i(),
                              r(
                                L,
                                null,
                                V(31, (d) =>
                                  t("option", { value: `${d}` }, k(d), 9, Ah)
                                ),
                                64
                              )),
                            ],
                            512
                          ),
                          [[Q, y(n).dayPerMonth, void 0, { trim: !0 }]]
                        ),
                      ]),
                      Sh,
                    ]),
                  ]),
                  t("div", zh, [
                    Ph,
                    t("div", Th, [
                      t("div", Ih, [
                        P(
                          t(
                            "select",
                            {
                              class: "cbi-input-select",
                              "onUpdate:modelValue":
                                c[4] || (c[4] = (d) => (y(n).month = d)),
                            },
                            [
                              Lh,
                              (i(),
                              r(
                                L,
                                null,
                                V(12, (d, v) =>
                                  t("option", { value: `${d}` }, k(d), 9, Mh)
                                ),
                                64
                              )),
                            ],
                            512
                          ),
                          [[Q, y(n).month, void 0, { trim: !0 }]]
                        ),
                      ]),
                      Oh,
                    ]),
                  ]),
                ]),
                t("div", Nh, [
                  t(
                    "button",
                    { class: "close", onClick: b, disabled: o.value },
                    "\u53D6\u6D88",
                    8,
                    jh
                  ),
                  t(
                    "button",
                    { class: "next", onClick: f, disabled: o.value },
                    "\u4FDD\u5B58",
                    8,
                    qh
                  ),
                ]),
              ]),
            ]),
            _: 1,
          })
        );
      },
    }),
    Gh = (e) => (O("data-v-8528ed18"), (e = e()), N(), e),
    Vh = { class: "actioner-container" },
    Uh = Gh(() =>
      t(
        "div",
        { class: "actioner-container_header" },
        [t("span", null, " \u8FD0\u884C\u8C03\u8BD5 ")],
        -1
      )
    ),
    Wh = { class: "actioner-container_body" },
    Zh = ["value"],
    Hh = { class: "actioner-container_footer" },
    Jh = ["disabled"],
    Kh = ["disabled"],
    Xh = T({
      props: {
        close: { type: Function, required: !0 },
        task: { type: Object, required: !0 },
      },
      setup(e) {
        const a = e,
          o = F(!1),
          n = F(""),
          s = F(""),
          m = F(""),
          b = () =>
            A(this, null, function* () {
              n.value += ".";
              try {
                const d = yield Y.Smart.Test.Result.POST({
                  type: "selftest",
                  devicePath: a.task.devicePath || "",
                });
                if (d.data) {
                  const { result: v, error: l } = d.data;
                  v && v.result && (m.value = v.result), l && (m.value = l);
                }
              } catch (d) {
                d && (m.value = d);
              }
            });
        b();
        const f = setInterval(
          () =>
            A(this, null, function* () {
              yield b();
            }),
          5e3
        );
        Ee(() => {
          clearInterval(f);
        });
        const u = () => {
            (o.value = !0), clearInterval(f), a.close();
          },
          c = () =>
            A(this, null, function* () {
              o.value = !0;
              try {
                const d = yield Y.Smart.Test.POST({
                  type: a.task.type || "short",
                  devicePath: a.task.devicePath || "",
                });
                if (d.data) {
                  const { success: v, error: l, result: _ } = d.data;
                  l && (s.value = l), _ && _.result && (s.value = _.result);
                }
              } catch (d) {
                s.value = d;
              } finally {
              }
            });
        return (d, v) => (
          i(),
          M(xe, null, {
            default: q(() => [
              t("div", Vh, [
                Uh,
                t("div", Wh, [
                  t(
                    "textarea",
                    {
                      value:
                        s.value +
                        `
` +
                        m.value +
                        `
` +
                        n.value,
                      disabled: "",
                    },
                    null,
                    8,
                    Zh
                  ),
                ]),
                t("div", Hh, [
                  t(
                    "div",
                    { class: "close", onClick: u, disabled: o.value },
                    "\u5173\u95ED",
                    8,
                    Jh
                  ),
                  o.value
                    ? $("", !0)
                    : (i(),
                      r(
                        "div",
                        {
                          key: 0,
                          class: "next",
                          onClick: c,
                          disabled: o.value,
                        },
                        "\u8FD0\u884C",
                        8,
                        Kh
                      )),
                ]),
              ]),
            ]),
            _: 1,
          })
        );
      },
    });
  var Qh = S(Xh, [["__scopeId", "data-v-8528ed18"]]);
  const qt = (e) => (O("data-v-8d4faf94"), (e = e()), N(), e),
    tx = { class: "actioner-container" },
    ex = { class: "actioner-container_header" },
    ax = { class: "tabs" },
    ox = qt(() => t("a", null, "\u8BBE\u5907\u4FE1\u606F", -1)),
    nx = [ox],
    ix = qt(() => t("a", null, "\u5C5E\u6027", -1)),
    rx = [ix],
    sx = qt(() => t("a", null, "\u81EA\u68C0\u65E5\u5FD7", -1)),
    dx = [sx],
    cx = qt(() => t("a", null, "\u6269\u5C55\u4FE1\u606F", -1)),
    ux = [cx],
    lx = { class: "actioner-container_body" },
    px = { key: 0, class: "table" },
    fx = { class: "tr" },
    mx = qt(() => t("td", { class: "td left" }, "\u8BBE\u5907", -1)),
    vx = { class: "td left" },
    bx = { class: "tr" },
    gx = qt(() => t("td", { class: "td left" }, "\u578B\u53F7", -1)),
    _x = { class: "td left" },
    hx = { class: "tr" },
    xx = qt(() => t("td", { class: "td left" }, "\u5E8F\u53F7", -1)),
    kx = { class: "td left" },
    wx = ["value"],
    yx = ["value"],
    Fx = ["value"],
    Cx = { class: "actioner-container_footer" },
    Ex = ["disabled"],
    $x = T({
      props: {
        close: { type: Function, required: !0 },
        disk: { type: Object, required: !0 },
      },
      setup(e) {
        const a = e,
          o = F(!1),
          n = F("info"),
          s = (d) => {
            switch (((n.value = d), d)) {
              case "info":
                break;
              case "attribute":
                u();
                break;
              case "log":
                f();
                break;
              case "extend":
                c();
                break;
            }
          },
          m = () => {
            (o.value = !0), a.close();
          },
          b = rt({ log: "", attribute: "", extend: "" }),
          f = () =>
            A(this, null, function* () {
              try {
                const d = yield Y.Smart.Test.Result.POST({
                  type: "selftest",
                  devicePath: a.disk.path || "",
                });
                if (d.data) {
                  const { result: v, error: l } = d.data;
                  v && v.result && (b.log = v.result), l && (b.log = l);
                }
              } catch (d) {
                b.log = d;
              }
            }),
          u = () =>
            A(this, null, function* () {
              try {
                const d = yield Y.Smart.Attribute.Result.POST({
                  devicePath: a.disk.path || "",
                });
                if (d.data) {
                  const { result: v, error: l } = d.data;
                  v && v.result && (b.attribute = v.result),
                    l && (b.attribute = l);
                }
              } catch (d) {
                b.attribute = d;
              }
            }),
          c = () =>
            A(this, null, function* () {
              try {
                const d = yield Y.Smart.Extend.Result.POST({
                  devicePath: a.disk.path || "",
                });
                if (d.data) {
                  const { result: v, error: l } = d.data;
                  v && v.result && (b.extend = v.result), l && (b.extend = l);
                }
              } catch (d) {
                b.extend = d;
              }
            });
        return (d, v) => (
          i(),
          M(xe, null, {
            default: q(() => [
              t("div", tx, [
                t("div", ex, [
                  t("ul", ax, [
                    t(
                      "li",
                      {
                        class: ct({ "active cbi-tab": n.value == "info" }),
                        onClick: v[0] || (v[0] = (l) => s("info")),
                      },
                      nx,
                      2
                    ),
                    t(
                      "li",
                      {
                        class: ct({ "active cbi-tab": n.value == "attribute" }),
                        onClick: v[1] || (v[1] = (l) => s("attribute")),
                      },
                      rx,
                      2
                    ),
                    t(
                      "li",
                      {
                        class: ct({ "active cbi-tab": n.value == "log" }),
                        onClick: v[2] || (v[2] = (l) => s("log")),
                      },
                      dx,
                      2
                    ),
                    t(
                      "li",
                      {
                        class: ct({ "active cbi-tab": n.value == "extend" }),
                        onClick: v[3] || (v[3] = (l) => s("extend")),
                      },
                      ux,
                      2
                    ),
                  ]),
                ]),
                t("div", lx, [
                  n.value == "info"
                    ? (i(),
                      r("table", px, [
                        t("tr", fx, [mx, t("td", vx, k(e.disk.path), 1)]),
                        t("tr", bx, [gx, t("td", _x, k(e.disk.model), 1)]),
                        t("tr", hx, [xx, t("td", kx, k(e.disk.serial), 1)]),
                      ]))
                    : n.value == "attribute"
                    ? (i(),
                      r(
                        "textarea",
                        { key: 1, disabled: "", value: y(b).attribute },
                        null,
                        8,
                        wx
                      ))
                    : n.value == "log"
                    ? (i(),
                      r(
                        "textarea",
                        { key: 2, disabled: "", value: y(b).log },
                        null,
                        8,
                        yx
                      ))
                    : n.value == "extend"
                    ? (i(),
                      r(
                        "textarea",
                        { key: 3, disabled: "", value: y(b).extend },
                        null,
                        8,
                        Fx
                      ))
                    : $("", !0),
                ]),
                t("div", Cx, [
                  t(
                    "div",
                    { class: "close", onClick: m, disabled: o.value },
                    "\u5173\u95ED",
                    8,
                    Ex
                  ),
                ]),
              ]),
            ]),
            _: 1,
          })
        );
      },
    });
  var Dx = S($x, [["__scopeId", "data-v-8d4faf94"]]);
  const Bx = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = z(
          th,
          nt(X({}, e), {
            close: () => {
              n();
            },
          })
        ),
        n = () => {
          a.remove();
        };
      le(o, a);
    },
    Yx = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = z(
          Rh,
          nt(X({}, e), {
            close: () => {
              n();
            },
          })
        ),
        n = () => {
          a.remove();
        };
      le(o, a);
    },
    Ax = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = z(
          Qh,
          nt(X({}, e), {
            close: () => {
              n();
            },
          })
        ),
        n = () => {
          a.remove();
        };
      le(o, a);
    },
    Sx = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = z(
          Dx,
          nt(X({}, e), {
            close: () => {
              n();
            },
          })
        ),
        n = () => {
          a.remove();
        };
      le(o, a);
    },
    zx = { class: "cbi-section" },
    Px = { class: "cbi-value" },
    Tx = t("label", { class: "cbi-value-title" }, " \u542F\u7528 ", -1),
    Ix = { class: "cbi-value-field" },
    Lx = { class: "cbi-checkbox" },
    Mx = ["value"],
    Ox = { class: "cbi-value" },
    Nx = t(
      "label",
      { class: "cbi-value-title" },
      " \u7535\u6E90\u6A21\u5F0F ",
      -1
    ),
    jx = { class: "cbi-value-field" },
    qx = { class: "cbi-checkbox" },
    Rx = t("option", { value: "never" }, "\u6C38\u4E0D", -1),
    Gx = t("option", { value: "sleep" }, "\u7761\u7720", -1),
    Vx = t("option", { value: "standby" }, "\u5F85\u673A", -1),
    Ux = t("option", { value: "idle" }, "\u95F2\u7F6E", -1),
    Wx = [Rx, Gx, Vx, Ux],
    Zx = t(
      "div",
      { class: "cbi-value-description" },
      [
        t(
          "span",
          null,
          " \u6D4B\u8BD5\u65F6\u78C1\u76D8\u4F1A\u8F6C\u52A8\uFF0C\u8BF7\u9009\u62E9\u5408\u9002\u7684\u6A21\u5F0F\u6765\u63A7\u5236\u78C1\u76D8\u8F6C\u52A8\u3002"
        ),
        t("br"),
        t(
          "span",
          null,
          ".\u6C38\u8FDC-\u65E0\u8BBA\u662F\u4EC0\u4E48\u529F\u8017\u6A21\u5F0F\u4E0B\u90FD\u6D4B\u8BD5(\u68C0\u67E5)\u78C1\u76D8\uFF0C\u5F53\u68C0\u67E5\u65F6\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u4F7F\u505C\u8F6C\u7684\u78C1\u76D8\u5F00\u59CB\u8F6C\u52A8\u3002"
        ),
        t("br"),
        t(
          "span",
          null,
          ".\u7761\u7720-\u5904\u4E8E\u7761\u7720\u6A21\u5F0F\u4E0B\u4E0D\u68C0\u67E5\u8BBE\u5907\u3002"
        ),
        t("br"),
        t(
          "span",
          null,
          ".\u5F85\u673A-\u5904\u4E8E\u5F85\u673A\u548C\u7761\u7720\u6A21\u5F0F\u4E0B\u4E0D\u68C0\u67E5\u8BBE\u5907\u3002\u6B64\u6A21\u5F0F\u4E0B\u78C1\u76D8\u4E00\u822C\u4E0D\u65CB\u8F6C\uFF0C\u5982\u679C\u4F60\u4E0D\u60F3\u6BCF\u6B21\u68C0\u67E5\u90FD\u8F6C\u52A8\u78C1\u76D8\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6A21\u5F0F\u6BD4\u8F83\u9002\u5408\u3002"
        ),
        t("br"),
        t(
          "span",
          null,
          ".\u95F2\u7F6E-\u5904\u4E8E\u5F85\u673A\u3001\u7761\u7720\u3001\u95F2\u7F6E\u6A21\u5F0F\u4E0B\u4E0D\u68C0\u67E5\u8BBE\u5907\uFF0C\u5728\u95F2\u7F6E\u72B6\u6001\u4E0B\uFF0C\u5927\u591A\u6570\u78C1\u76D8\u8FD8\u5728\u8F6C\u52A8\uFF0C\u6240\u4EE5\u8FD9\u53EF\u80FD\u4E0D\u9002\u5408\u4F60\u3002"
        ),
      ],
      -1
    ),
    Hx = { class: "cbi-value" },
    Jx = t(
      "label",
      { class: "cbi-value-title" },
      " \u6E29\u5EA6\u76D1\u6D4B\uFF08\u5DEE\u5F02\uFF09 ",
      -1
    ),
    Kx = { class: "cbi-value-field" },
    Xx = { class: "cbi-checkbox" },
    Qx = t("option", { value: 0 }, "\u7981\u7528", -1),
    tk = ["value"],
    ek = t(
      "div",
      { class: "cbi-value-description" },
      " \u81EA\u4E0A\u6B21\u62A5\u544A\u4EE5\u6765\u6E29\u5EA6\u53D8\u5316\u81F3\u5C11 N \u5EA6\uFF0C\u5219\u9700\u62A5\u544A. ",
      -1
    ),
    ak = { class: "cbi-value" },
    ok = t(
      "label",
      { class: "cbi-value-title" },
      " \u6E29\u5EA6\u76D1\u6D4B\uFF08\u6700\u5927\uFF09 ",
      -1
    ),
    nk = { class: "cbi-value-field" },
    ik = { class: "cbi-checkbox" },
    rk = t("option", { value: 0 }, "\u7981\u7528", -1),
    sk = ["value"],
    dk = t(
      "div",
      { class: "cbi-value-description" },
      " \u5982\u679C\u6E29\u5EA6\u5927\u4E8E\u6216\u7B49\u4E8E N \u6444\u6C0F\u5EA6\u5219\u62A5\u544A. ",
      -1
    ),
    ck = { class: "cbi-section cbi-tblsection", id: "cbi-nfs-mount" },
    uk = { class: "table cbi-section-table" },
    lk = t(
      "thead",
      null,
      [
        t("tr", { class: "tr cbi-section-table-titles anonymous" }, [
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u8BBE\u5907"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u578B\u53F7"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u5E8F\u53F7"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u5BB9\u91CF"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u6E29\u5EA6"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u72B6\u6001"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u5065\u5EB7"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u64CD\u4F5C"
          ),
        ]),
      ],
      -1
    ),
    pk = { class: "tr cbi-section-table-row" },
    fk = { class: "td cbi-value-field" },
    mk = { class: "td cbi-value-field" },
    vk = { class: "td cbi-value-field" },
    bk = { class: "td cbi-value-field" },
    gk = { class: "td cbi-value-field" },
    _k = { class: "td cbi-value-field" },
    hk = { class: "td cbi-value-field" },
    xk = { class: "td cbi-value-field" },
    kk = ["onClick"],
    wk = ["onClick"],
    yk = T({
      props: {
        config: { type: Object, required: !0 },
        saveData: { type: Function, required: !0 },
      },
      setup(e) {
        return A(this, null, function* () {
          let a, o;
          const n = e,
            s = rt(n.config),
            m = () => {
              (s.global.tmpDiff = n.config.global.tmpDiff || 0),
                (s.global.tmpMax = n.config.global.tmpMax || 0),
                (s.global.enable = n.config.global.enable || !1),
                (s.global.powermode = n.config.global.powermode || "never"),
                (s.devices = n.config.devices || []),
                (s.tasks = n.config.tasks || []);
            },
            b = F([]),
            f = () =>
              A(this, null, function* () {
                try {
                  const l = yield Y.Smart.List.GET();
                  if (l.data) {
                    const { result: _, error: p } = l.data;
                    _ && _.disks && (b.value = _.disks || []);
                  }
                } catch (l) {}
              });
          ([a, o] = Je(() => f())), yield a, o();
          const u = setInterval(
            () =>
              A(this, null, function* () {
                yield f();
              }),
            5e3
          );
          Ee(() => {
            clearInterval(u);
          });
          const c = () =>
              A(this, null, function* () {
                yield n.saveData({
                  global: s.global,
                  devices: n.config.devices,
                  tasks: n.config.tasks,
                }),
                  m();
              }),
            d = (l) => {
              Sx({ disk: l });
            },
            v = (l, _) =>
              A(this, null, function* () {
                let p = null,
                  h = -1;
                if (s.devices) {
                  for (let g = 0; g < s.devices.length; g++)
                    if (s.devices[g].devicePath == l.path) {
                      (p = s.devices[g]), (h = g);
                      break;
                    }
                }
                Bx({
                  disk: l,
                  device: p,
                  next: (g) =>
                    A(this, null, function* () {
                      g.tmpDiff == -1 && (g.tmpDiff = s.global.tmpDiff),
                        g.tmpMax == -1 && (g.tmpMax = s.global.tmpMax),
                        g.devicePath == "" && (g.devicePath = l.path);
                      let w = [...s.devices];
                      h >= 0 && (w[h] = g);
                      const E = new Map();
                      w.forEach((C) => {
                        C.devicePath != null && E.set(C.devicePath, null);
                      });
                      for (let C = 0; C < b.value.length; C++) {
                        const B = b.value[C];
                        B.path != null &&
                          !E.has(B.path) &&
                          w.push({
                            devicePath: B.path,
                            tmpDiff: s.global.tmpDiff,
                            tmpMax: s.global.tmpMax,
                          });
                      }
                      yield n.saveData({
                        tasks: n.config.tasks,
                        global: n.config.global,
                        devices: w,
                      }),
                        m();
                    }),
                });
              });
          return (l, _) => (
            i(),
            r(
              L,
              null,
              [
                t("fieldset", zx, [
                  t("div", Px, [
                    Tx,
                    t("div", Ix, [
                      t("div", Lx, [
                        P(
                          t(
                            "input",
                            {
                              type: "checkbox",
                              "onUpdate:modelValue":
                                _[0] ||
                                (_[0] = (p) => (y(s).global.enable = p)),
                              value: !y(s).global.enable,
                            },
                            null,
                            8,
                            Mx
                          ),
                          [[Vt, y(s).global.enable]]
                        ),
                      ]),
                    ]),
                  ]),
                  t("div", Ox, [
                    Nx,
                    t("div", jx, [
                      t("div", qx, [
                        P(
                          t(
                            "select",
                            {
                              class: "cbi-input-select",
                              "onUpdate:modelValue":
                                _[1] ||
                                (_[1] = (p) => (y(s).global.powermode = p)),
                            },
                            Wx,
                            512
                          ),
                          [[Q, y(s).global.powermode, void 0, { trim: !0 }]]
                        ),
                      ]),
                      Zx,
                    ]),
                  ]),
                  t("div", Hx, [
                    Jx,
                    t("div", Kx, [
                      t("div", Xx, [
                        P(
                          t(
                            "select",
                            {
                              class: "cbi-input-select",
                              "onUpdate:modelValue":
                                _[2] ||
                                (_[2] = (p) => (y(s).global.tmpDiff = p)),
                            },
                            [
                              Qx,
                              (i(),
                              r(
                                L,
                                null,
                                V(15, (p) =>
                                  t(
                                    "option",
                                    { value: p },
                                    k(p) + "\xB0C",
                                    9,
                                    tk
                                  )
                                ),
                                64
                              )),
                            ],
                            512
                          ),
                          [[Q, y(s).global.tmpDiff, void 0, { number: !0 }]]
                        ),
                      ]),
                      ek,
                    ]),
                  ]),
                  t("div", ak, [
                    ok,
                    t("div", nk, [
                      t("div", ik, [
                        P(
                          t(
                            "select",
                            {
                              class: "cbi-input-select",
                              "onUpdate:modelValue":
                                _[3] ||
                                (_[3] = (p) => (y(s).global.tmpMax = p)),
                            },
                            [
                              rk,
                              (i(),
                              r(
                                L,
                                null,
                                V(20, (p) =>
                                  t(
                                    "option",
                                    { value: p * 5 },
                                    k(p * 5) + "\xB0C",
                                    9,
                                    sk
                                  )
                                ),
                                64
                              )),
                            ],
                            512
                          ),
                          [[Q, y(s).global.tmpMax, void 0, { number: !0 }]]
                        ),
                      ]),
                      dk,
                    ]),
                  ]),
                ]),
                t("div", ck, [
                  t("table", uk, [
                    lk,
                    t("tbody", null, [
                      (i(!0),
                      r(
                        L,
                        null,
                        V(
                          b.value,
                          (p, h) => (
                            i(),
                            r("tr", pk, [
                              t("td", fk, [t("b", null, k(p.path), 1)]),
                              t("td", mk, [t("b", null, k(p.model), 1)]),
                              t("td", vk, [t("b", null, k(p.serial), 1)]),
                              t("td", bk, [t("b", null, k(p.sizeStr), 1)]),
                              t("td", gk, [t("b", null, k(p.temp), 1)]),
                              t("td", _k, [t("b", null, k(p.status), 1)]),
                              t("td", hk, [t("b", null, k(p.health), 1)]),
                              t("td", xk, [
                                t(
                                  "button",
                                  {
                                    class: "btn cbi-button cbi-button-apply",
                                    title: "\u7F16\u8F91",
                                    onClick: (g) => v(p),
                                  },
                                  "\u7F16\u8F91",
                                  8,
                                  kk
                                ),
                                t(
                                  "button",
                                  {
                                    class: "btn cbi-button cbi-button-apply",
                                    title: "\u8BE6\u60C5",
                                    onClick: (g) => d(p),
                                  },
                                  "\u8BE6\u60C5",
                                  8,
                                  wk
                                ),
                              ]),
                            ])
                          )
                        ),
                        256
                      )),
                    ]),
                  ]),
                ]),
                t("span", { class: "cbi-page-actions control-group" }, [
                  t("input", {
                    class: "btn cbi-button cbi-button-apply",
                    type: "button",
                    value: "\u4FDD\u5B58\u5E76\u5E94\u7528",
                    onClick: c,
                  }),
                ]),
              ],
              64
            )
          );
        });
      },
    }),
    Fk = { class: "cbi-section cbi-tblsection", id: "cbi-nfs-mount" },
    Ck = { class: "table cbi-section-table" },
    Ek = t(
      "thead",
      null,
      [
        t("tr", { class: "tr cbi-section-table-titles anonymous" }, [
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u8BBE\u5907"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u7C7B\u578B"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u8C03\u5EA6"
          ),
          t(
            "th",
            { class: "th cbi-section-table-cell", "data-widget": "value" },
            "\u529F\u80FD"
          ),
        ]),
      ],
      -1
    ),
    $k = { class: "tr cbi-section-table-row" },
    Dk = { class: "td cbi-value-field" },
    Bk = { class: "td cbi-value-field" },
    Yk = { class: "td cbi-value-field" },
    Ak = { class: "td cbi-value-field" },
    Sk = ["onClick"],
    zk = ["onClick"],
    Pk = T({
      props: {
        config: { type: Object, required: !0 },
        saveData: { type: Function, required: !0 },
      },
      setup(e) {
        const a = e,
          o = rt(a.config),
          n = (f) => {
            switch (f) {
              case "short":
                return "\u77ED\u6682\u81EA\u68C0";
              case "long":
                return "\u957F\u65F6\u81EA\u68C0";
              case "conveyance":
                return "\u4F20\u8F93\u65F6\u81EA\u68C0";
              case "offline":
                return "\u79BB\u7EBF\u65F6\u81EA\u68C0";
              default:
                return "\u672A\u77E5";
            }
          },
          s = () => {
            Yx({
              config: a.config,
              disks: [],
              next: (f) =>
                A(this, null, function* () {
                  yield a.saveData({
                    tasks: [...o.tasks, f],
                    global: a.config.global,
                    devices: a.config.devices,
                  }),
                    (o.tasks = a.config.tasks || []);
                }),
            });
          },
          m = (f) =>
            A(this, null, function* () {
              const u = [...o.tasks];
              u.splice(f, 1),
                yield a.saveData({
                  tasks: u,
                  global: a.config.global,
                  devices: a.config.devices,
                }),
                (o.tasks = a.config.tasks || []);
            }),
          b = (f) => {
            Ax({ task: f });
          };
        return (f, u) => (
          i(),
          r(
            L,
            null,
            [
              t(
                "button",
                {
                  class: "btn cbi-button cbi-button-apply",
                  onClick: u[0] || (u[0] = (c) => s()),
                },
                "\u65B0\u5EFA"
              ),
              t("div", Fk, [
                t("table", Ck, [
                  Ek,
                  t("tbody", null, [
                    (i(!0),
                    r(
                      L,
                      null,
                      V(
                        y(o).tasks,
                        (c, d) => (
                          i(),
                          r("tr", $k, [
                            t("td", Dk, [t("b", null, k(c.devicePath), 1)]),
                            t("td", Bk, [t("b", null, k(n(c.type)), 1)]),
                            t("td", Yk, [
                              t(
                                "b",
                                null,
                                k(c.month) +
                                  "/" +
                                  k(c.dayPerMonth) +
                                  "/" +
                                  k(c.hour),
                                1
                              ),
                            ]),
                            t("td", Ak, [
                              t(
                                "button",
                                {
                                  class: "btn cbi-button cbi-button-apply",
                                  title: "\u8C03\u8BD5",
                                  onClick: (v) => b(c),
                                },
                                "\u9884\u89C8",
                                8,
                                Sk
                              ),
                              t(
                                "button",
                                {
                                  class: "cbi-button cbi-button-remove",
                                  title: "\u5220\u9664",
                                  onClick: (v) => m(d),
                                },
                                "\u5220\u9664",
                                8,
                                zk
                              ),
                            ]),
                          ])
                        )
                      ),
                      256
                    )),
                  ]),
                ]),
              ]),
            ],
            64
          )
        );
      },
    }),
    Tk = { class: "cbi-section" },
    Ik = ["value"],
    Lk = T({
      setup(e) {
        return A(this, null, function* () {
          let a, o;
          const n = F(""),
            s = () =>
              A(this, null, function* () {
                try {
                  const m = yield Y.Smart.Log.GET();
                  if (m.data) {
                    const { result: b, error: f } = m.data;
                    b && b.result && (n.value = b.result), f && (n.value = f);
                  }
                } catch (m) {
                  n.value = m;
                }
              });
          return (
            ([a, o] = Je(() => s())),
            yield a,
            o(),
            (m, b) => (
              i(),
              r("fieldset", Tk, [
                t("textarea", { value: n.value, disabled: "" }, null, 8, Ik),
              ])
            )
          );
        });
      },
    });
  var Mk = S(Lk, [["__scopeId", "data-v-997c3dee"]]);
  const Ok = {},
    Nk = {
      t: "1659511092204",
      class: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "2332",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "200",
      height: "200",
    },
    jk = t(
      "path",
      {
        d: "M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z",
        "p-id": "2333",
      },
      null,
      -1
    ),
    qk = [jk];
  function Rk(e, a) {
    return i(), r("svg", Nk, qk);
  }
  var Ze = S(Ok, [["render", Rk]]);
  const ke = (e) => (O("data-v-edc69d86"), (e = e()), N(), e),
    Gk = ["onSubmit"],
    Vk = { class: "actioner-dns_header" },
    Uk = { key: 0 },
    Wk = { key: 1 },
    Zk = { class: "actioner-dns_body" },
    Hk = { class: "label-item" },
    Jk = ke(() =>
      t(
        "div",
        { class: "label-item_key" },
        [t("span", null, "\u540D\u79F0")],
        -1
      )
    ),
    Kk = { class: "label-item_value" },
    Xk = { class: "label-item" },
    Qk = ke(() =>
      t(
        "div",
        { class: "label-item_key" },
        [
          t(
            "span",
            null,
            "\u534F\u8BAE\uFF08\u7F51\u7EDC\u83B7\u53D6\u65B9\u5F0F\uFF09"
          ),
        ],
        -1
      )
    ),
    tw = { class: "label-item_value" },
    ew = ke(() => t("option", { value: "dhcp" }, "DHCP\u5BA2\u6237\u7AEF", -1)),
    aw = { key: 0, value: "pppoe" },
    ow = ke(() =>
      t("option", { value: "static" }, "\u9759\u6001\u5730\u5740", -1)
    ),
    nw = { class: "actioner-dns_footer" },
    iw = ["disabled"],
    rw = T({
      props: {
        Close: { type: Function, required: !0 },
        e: { type: String, required: !0 },
        name: { type: String, required: !0 },
        inface: { type: Object, required: !0 },
        next: { type: Function, required: !0 },
      },
      setup(e) {
        const a = e,
          o = F(!1),
          n = F(a.inface),
          s = () =>
            A(this, null, function* () {
              x.Loading("\u914D\u7F6E\u4E2D...").Close(), a.next(n.value), m();
            }),
          m = () => {
            a.Close && a.Close();
          };
        return (b, f) => (
          i(),
          M(
            ot,
            { Close: e.Close, type: 1 },
            {
              default: q(() => [
                t(
                  "form",
                  { class: "actioner-dns", onSubmit: it(s, ["prevent"]) },
                  [
                    t("div", Vk, [
                      e.name == "wan"
                        ? (i(),
                          r(
                            "span",
                            Uk,
                            k(
                              e.e == "edit"
                                ? "\u7F16\u8F91WAN"
                                : "\u6DFB\u52A0WAN"
                            ),
                            1
                          ))
                        : (i(),
                          r(
                            "span",
                            Wk,
                            k(
                              e.e == "edit"
                                ? "\u7F16\u8F91LAN"
                                : "\u6DFB\u52A0LAN"
                            ),
                            1
                          )),
                    ]),
                    t("div", Zk, [
                      t("div", Hk, [
                        Jk,
                        t("div", Kk, [
                          t(
                            "span",
                            null,
                            k(n.value.name.toLocaleUpperCase()),
                            1
                          ),
                        ]),
                      ]),
                      t("div", Xk, [
                        Qk,
                        t("div", tw, [
                          P(
                            t(
                              "select",
                              {
                                "onUpdate:modelValue":
                                  f[0] || (f[0] = (u) => (n.value.proto = u)),
                              },
                              [
                                ew,
                                e.name == "wan"
                                  ? (i(), r("option", aw, "PPPoE"))
                                  : $("", !0),
                                ow,
                              ],
                              512
                            ),
                            [[Q, n.value.proto]]
                          ),
                        ]),
                      ]),
                    ]),
                    t("div", nw, [
                      t(
                        "button",
                        {
                          class: "cbi-button cbi-button-apply app-btn",
                          disabled: o.value,
                        },
                        "\u4FDD\u5B58",
                        8,
                        iw
                      ),
                      t(
                        "button",
                        {
                          class:
                            "cbi-button cbi-button-remove app-btn app-back",
                          onClick: m,
                        },
                        "\u53D6\u6D88"
                      ),
                    ]),
                  ],
                  40,
                  Gk
                ),
              ]),
              _: 1,
            },
            8,
            ["Close"]
          )
        );
      },
    });
  var sw = S(rw, [["__scopeId", "data-v-edc69d86"]]);
  const He = (e) => {
      const a = document.createElement("div");
      document.body.appendChild(a);
      const o = tt(
        sw,
        nt(X({}, e), {
          Close: () => {
            n();
          },
        })
      );
      o.mount(a);
      const n = () => {
        o.unmount(), a.remove();
      };
    },
    _t = (e) => (O("data-v-1609e8d0"), (e = e()), N(), e),
    dw = { id: "page" },
    cw = _t(() =>
      t("h2", { name: "content" }, " \u7F51\u53E3\u914D\u7F6E", -1)
    ),
    uw = { class: "cbi-section cbi-tblsection", id: "cbi-nfs-mount" },
    lw = { class: "table cbi-section-table" },
    pw = { width: "200" },
    fw = _t(() => t("col", null, null, -1)),
    mw = _t(() => t("col", null, null, -1)),
    vw = _t(() => t("col", { width: "200" }, null, -1)),
    bw = { class: "tr cbi-section-table-cell" },
    gw = {
      class: "th cbi-section-table-cell interface-device",
      "data-widget": "value",
    },
    _w = { class: "interface-device-flex" },
    hw = _t(() => t("th", { style: { width: "10px" } }, null, -1)),
    xw = _t(() => t("th", { style: { width: "32px" } }, null, -1)),
    kw = _t(() => t("th", null, null, -1)),
    ww = { class: "tr cbi-section-table-row cbi-rowstyle-1" },
    yw = { class: "td cbi-value-field interface-device info" },
    Fw = ["name", "value", "onUpdate:modelValue", "onInput"],
    Cw = _t(() => t("td", { class: "td cbi-value-field" }, null, -1)),
    Ew = { class: "td cbi-value-field" },
    $w = { class: "td cbi-value-field btns" },
    Dw = ["onClick"],
    Bw = ["onClick"],
    Yw = { class: "tr cbi-section-table-row cbi-rowstyle-1" },
    Aw = { class: "td cbi-value-field" },
    Sw = _t(() => t("td", { class: "td cbi-value-field" }, null, -1)),
    zw = _t(() => t("td", { class: "td cbi-value-field" }, null, -1)),
    Pw = { class: "tr cbi-section-table-row cbi-rowstyle-1" },
    Tw = {
      class: "td cbi-value-field interface-device info",
      "data-widget": "value",
    },
    Iw = ["name", "value", "onUpdate:modelValue", "onInput"],
    Lw = _t(() => t("td", { class: "td cbi-value-field" }, null, -1)),
    Mw = { class: "td cbi-value-field" },
    Ow = { class: "td cbi-value-field btns" },
    Nw = ["onClick"],
    jw = ["onClick"],
    qw = { class: "tr cbi-section-table-row cbi-rowstyle-1" },
    Rw = { class: "td cbi-value-field" },
    Gw = _t(() => t("td", { class: "td cbi-value-field" }, null, -1)),
    Vw = _t(() => t("td", { class: "td cbi-value-field" }, null, -1)),
    Uw = { class: "cbi-page-actions control-group" },
    Ww = ["disabled"],
    Zw = T({
      setup(e) {
        const a = rt({ devices: [], interfaces: [] }),
          o = F(!1),
          n = rt({ lan: [], wan: [] });
        (() => {
          Y.Network.GetInterfaceConfig.GET().then((v) => {
            if (v.data) {
              const { result: l } = v.data;
              if (l) {
                (a.devices = l.devices || []),
                  (a.interfaces = l.interfaces || []);
                for (let _ = 0; _ < a.interfaces.length; _++)
                  a.interfaces[_].firewallType == "wan"
                    ? n.wan.push(a.interfaces[_])
                    : a.interfaces[_].firewallType == "lan" &&
                      n.lan.push(a.interfaces[_]);
              }
            }
          });
        })();
        const m = (v, l) => {
            v == "wan" ? n.wan.splice(l, 1) : v == "lan" && n.lan.splice(l, 1);
          },
          b = (v, l) => {
            if (l == null) {
              let _ = v == "wan" ? n.wan.length : n.lan.length;
              _ == 6 && v == "wan" && _++,
                He({
                  e: "add",
                  name: v,
                  inface: {
                    name: v + `${_}`,
                    proto: "dhcp",
                    ipv4Addr: "",
                    ipv6Addr: "",
                    portName: "",
                    deviceNames: [],
                    ports: [],
                    firewallType: v,
                  },
                  next: (p) => {
                    v == "wan" ? n.wan.push(p) : n.lan.push(p),
                      x.Message(
                        "\u8BF7\u5728\u4FDD\u5B58\u4EE5\u540E\u524D\u5F80'\u7F51\u7EDC-\u63A5\u53E3'\u9875\u9762\u914D\u7F6E\u63A5\u53E3\u8BE6\u7EC6\u53C2\u6570"
                      );
                  },
                });
            } else
              He({
                e: "edit",
                name: v,
                inface: v == "wan" ? n.wan[l] : n.lan[l],
                next: (_) => {
                  v == "wan" ? (n.wan[l] = _) : (n.lan[l] = _);
                },
              });
          },
          f = (v, l) => (v ? v.indexOf(l) : -1),
          u = (v, l) => {
            const p = v.target.value;
            for (let g = 0; g < n.wan.length; g++) {
              const w = f(n.wan[g].deviceNames, p);
              w != -1 && n.wan[g].deviceNames.splice(w, 1);
            }
            for (let g = 0; g < n.lan.length; g++)
              if (g != l) {
                const w = f(n.lan[g].deviceNames, p);
                w != -1 && n.lan[g].deviceNames.splice(w, 1);
              }
            const h = f(n.lan[l].deviceNames, p);
            h != -1
              ? n.lan[l].deviceNames.splice(h, 1)
              : (n.lan[l].deviceNames === null && (n.lan[l].deviceNames = []),
                n.lan[l].deviceNames.push(p));
          },
          c = (v, l) => {
            const p = v.target.value;
            for (let h = 0; h < n.wan.length; h++)
              if (h != l) {
                const g = f(n.wan[h].deviceNames, p);
                g != -1 && n.wan[h].deviceNames.splice(g, 1);
              }
            for (let h = 0; h < n.lan.length; h++) {
              const g = f(n.lan[h].deviceNames, p);
              g != -1 && n.lan[h].deviceNames.splice(g, 1);
            }
            n.wan[l].deviceNames = [p];
          },
          d = () =>
            A(this, null, function* () {
              o.value = !0;
              const v = [];
              for (let _ = 0; _ < n.wan.length; _++) {
                const p = n.wan[_];
                v.push({
                  name: p.name,
                  proto: p.proto,
                  devices: p.deviceNames || [],
                  firewallType: p.firewallType,
                });
              }
              for (let _ = 0; _ < n.lan.length; _++) {
                const p = n.lan[_];
                if (
                  p.name === "lan" &&
                  (!p.deviceNames || p.deviceNames.length == 0) &&
                  !confirm(
                    "LAN\u53E3\u672A\u5173\u8054\u4EFB\u4F55\u7269\u7406\u7F51\u53E3\uFF0C\u53EF\u80FD\u5BFC\u81F4\u8DEF\u7531\u5668\u5931\u8054\uFF0C\u662F\u5426\u7EE7\u7EED\u64CD\u4F5C\uFF1F"
                  )
                ) {
                  o.value = !1;
                  return;
                }
                v.push({
                  name: p.name,
                  proto: p.proto,
                  devices: p.deviceNames || [],
                  firewallType: p.firewallType,
                });
              }
              const l = x.Loading("\u4FDD\u5B58\u4E2D...");
              try {
                const _ = yield Y.Network.POSTInterfaceConfig.POST({
                  configs: v,
                });
                if (_.data) {
                  const { success: p, result: h, error: g } = _.data;
                  if (g) throw g;
                  (p || 0) == 0 && x.Success("\u914D\u7F6E\u6210\u529F");
                }
              } catch (_) {
                x.Error(`${_}`);
              } finally {
                l.Close(), (o.value = !1);
              }
            });
        return (v, l) => (
          i(),
          r("div", dw, [
            cw,
            t("div", null, [
              t("div", uw, [
                t("table", lw, [
                  t("colgroup", null, [
                    (i(!0),
                    r(
                      L,
                      null,
                      V(y(a).devices, (_) => (i(), r("col", pw))),
                      256
                    )),
                    fw,
                    mw,
                    vw,
                  ]),
                  t("thead", null, [
                    t("tr", bw, [
                      (i(!0),
                      r(
                        L,
                        null,
                        V(
                          y(a).devices,
                          (_) => (
                            i(),
                            r("th", gw, [
                              t("div", _w, [
                                z(na, { item: _ }, null, 8, ["item"]),
                              ]),
                            ])
                          )
                        ),
                        256
                      )),
                      hw,
                      xw,
                      kw,
                    ]),
                  ]),
                  t("tbody", null, [
                    (i(!0),
                    r(
                      L,
                      null,
                      V(
                        y(n).lan,
                        (_, p) => (
                          i(),
                          r("tr", ww, [
                            (i(!0),
                            r(
                              L,
                              null,
                              V(
                                y(a).devices,
                                (h) => (
                                  i(),
                                  r("td", yw, [
                                    P(
                                      t(
                                        "input",
                                        {
                                          type: "checkbox",
                                          name: h.name,
                                          value: h.name,
                                          "onUpdate:modelValue": (g) =>
                                            (_.deviceNames = g),
                                          onInput: (g) => u(g, p),
                                        },
                                        null,
                                        40,
                                        Fw
                                      ),
                                      [[Vt, _.deviceNames]]
                                    ),
                                  ])
                                )
                              ),
                              256
                            )),
                            Cw,
                            t("td", Ew, [t("b", null, k(_.name), 1)]),
                            t("td", $w, [
                              t(
                                "button",
                                {
                                  class: "btn cbi-button cbi-button-apply",
                                  title: "\u7F16\u8F91",
                                  onClick: (h) => b("lan", p),
                                },
                                "\u7F16\u8F91",
                                8,
                                Dw
                              ),
                              p != 0
                                ? (i(),
                                  r(
                                    "button",
                                    {
                                      key: 0,
                                      class: "cbi-button cbi-button-remove",
                                      onClick: (h) => m("lan", p),
                                    },
                                    "\u5220\u9664 ",
                                    8,
                                    Bw
                                  ))
                                : $("", !0),
                            ]),
                          ])
                        )
                      ),
                      256
                    )),
                    t("tr", Yw, [
                      (i(!0),
                      r(
                        L,
                        null,
                        V(y(a).devices, (_) => (i(), r("td", Aw))),
                        256
                      )),
                      Sw,
                      zw,
                      t(
                        "td",
                        {
                          class: "td cbi-value-field btns",
                          onClick: l[0] || (l[0] = (_) => b("lan")),
                        },
                        [z(Ze, { class: "icon" })]
                      ),
                    ]),
                    (i(!0),
                    r(
                      L,
                      null,
                      V(
                        y(n).wan,
                        (_, p) => (
                          i(),
                          r("tr", Pw, [
                            (i(!0),
                            r(
                              L,
                              null,
                              V(
                                y(a).devices,
                                (h) => (
                                  i(),
                                  r("td", Tw, [
                                    P(
                                      t(
                                        "input",
                                        {
                                          type: "checkbox",
                                          name: h.name,
                                          value: h.name,
                                          "onUpdate:modelValue": (g) =>
                                            (_.deviceNames = g),
                                          onInput: (g) => c(g, p),
                                        },
                                        null,
                                        40,
                                        Iw
                                      ),
                                      [[Vt, _.deviceNames]]
                                    ),
                                  ])
                                )
                              ),
                              256
                            )),
                            Lw,
                            t("td", Mw, [t("b", null, k(_.name), 1)]),
                            t("td", Ow, [
                              t(
                                "button",
                                {
                                  class: "btn cbi-button cbi-button-apply",
                                  title: "\u7F16\u8F91",
                                  onClick: (h) => b("wan", p),
                                },
                                "\u7F16\u8F91",
                                8,
                                Nw
                              ),
                              p != 0
                                ? (i(),
                                  r(
                                    "button",
                                    {
                                      key: 0,
                                      class: "cbi-button cbi-button-remove",
                                      onClick: (h) => m("wan", p),
                                    },
                                    "\u5220\u9664",
                                    8,
                                    jw
                                  ))
                                : $("", !0),
                            ]),
                          ])
                        )
                      ),
                      256
                    )),
                    t("tr", qw, [
                      (i(!0),
                      r(
                        L,
                        null,
                        V(y(a).devices, (_) => (i(), r("td", Rw))),
                        256
                      )),
                      Gw,
                      Vw,
                      t(
                        "td",
                        {
                          class: "td cbi-value-field btns",
                          onClick: l[1] || (l[1] = (_) => b("wan")),
                        },
                        [z(Ze, { class: "icon" })]
                      ),
                    ]),
                  ]),
                ]),
              ]),
              t("div", Uw, [
                t(
                  "input",
                  {
                    class: "btn cbi-button cbi-button-apply",
                    type: "button",
                    value: "\u4FDD\u5B58\u5E76\u5E94\u7528",
                    onClick: d,
                    disabled: o.value,
                  },
                  null,
                  8,
                  Ww
                ),
              ]),
            ]),
          ])
        );
      },
    });
  var Hw = S(Zw, [["__scopeId", "data-v-1609e8d0"]]);
  const Jw = () => window.vue_base || "/cgi-bin/luci/admin/quickstart/pages",
    ga = Ta({
      history: Ia(Jw()),
      routes: [
        {
          name: "IndexPage",
          path: "/",
          meta: { title: "\u63A7\u5236\u53F0" },
          component: u9,
        },
        {
          name: "NetworkPage",
          path: "/network",
          meta: { title: "\u7F51\u7EDC\u8BBE\u7F6E\u5411\u5BFC" },
          component: f9,
          children: [
            { path: "", component: J9 },
            { path: "pppoe", component: wm },
            { path: "dhcp", component: pv },
            { path: "gateway", component: tb },
          ],
        },
        {
          name: "RaidPage",
          path: "/raid",
          meta: { title: "raid\u5411\u5BFC" },
          component: __,
        },
        {
          name: "SmartPage",
          path: "/smart",
          meta: { title: "smart\u68C0\u6D4B" },
          component: C_,
          children: [
            { path: "", component: yk },
            { path: "task", component: Pk },
            { path: "log", component: Mk },
          ],
        },
        { path: "/interfaceconfig", component: Hw },
      ],
    });
  ga.beforeEach((e, a) => (e.meta.title, !0));
  const vt = tt(to);
  vt.component("svg-menu", so);
  vt.component("svg-system", mo);
  vt.component("svg-download", xo);
  vt.component("svg-store", Do);
  vt.component("svg-info", Po);
  vt.component("svg-disk", nn);
  vt.component("svg-nav", ln);
  vt.component("progress-item", ea);
  vt.component("svg-view-show", hn);
  vt.component("svg-view-hidden", Cn);
  vt.component("article-item", Sn);
  vt.use(aa);
  vt.use(ga);
  vt.use(La());
  vt.mount("#app");
});
export default Kw();
