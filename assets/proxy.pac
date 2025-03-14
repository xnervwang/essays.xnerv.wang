function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "baidu.com") || shExpMatch(host, "*.baidu.com")) {
        return "SOCKS5 127.0.0.1:8384";
    }
    return "DIRECT";
}
