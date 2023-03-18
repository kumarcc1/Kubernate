
Master
```
    iptables -I INPUT -p tcp --dport 2376 -j ACCEPT
    iptables -I INPUT -p tcp --dport 2377 -j ACCEPT
    iptables -I INPUT -p tcp --dport 7946 -j ACCEPT
    iptables -I INPUT -p udp --dport 7946 -j ACCEPT
    iptables -I INPUT -p udp --dport 4789 -j ACCEPT
```

workers
```
    iptables -I INPUT -p tcp --dport 2376 -j ACCEPT
    iptables -I INPUT -p tcp --dport 7946 -j ACCEPT
    iptables -I INPUT -p udp --dport 7946 -j ACCEPT
    iptables -I INPUT -p udp --dport 4789 -j ACCEPT
```

services
```
iptables -I INPUT 10 -p tcp --dport 80 -j ACCEPT
```

elk stack swarm
https://github.com/mattjtodd/docker-swarm-elk


labby lab 
```
sed -i "s/.*PermitRootLogin.*/PermitRootLogin yes/g" /etc/ssh/sshd_config

systemctl restart sshd

vi /etc/systemd/network/10-static-en.network
[Match]
Name=eth0
[Network]
Address=ip/bit
Gateway=somegw

chmod 644 /etc/systemd/network/10-static-en.network

reboot

iptables -I INPUT -p tcp --dport 2376 -j ACCEPT
iptables -I INPUT -p tcp --dport 7946 -j ACCEPT
iptables -I INPUT -p udp --dport 7946 -j ACCEPT
iptables -I INPUT -p udp --dport 4789 -j ACCEPT
iptables-save > /etc/systemd/scripts/ip4save
systemctl start docker
systemctl enable docker
```
