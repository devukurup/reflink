# Referral Tracker

### Prerequisite
-->  Ruby (3.0.1)

-->  Rails (7.0.1)

-->  MySql2 (~> 0.5)

-->  Mailcatcher
<br/>
<br />

### Initial Setup

```bash
git clone https://github.com/devukurup/referral_tracker.git

cd referral_tracker

yarn install

./bin/setup

To start the server:
bundle exec rails server

Visit: http://127.0.0.1:3000

```
<br />

To verify the referral mails

```bash
gem install mailcatcher

Run: mailcatcher

Visit: http://127.0.0.1:1080
```

Login Credentials:

```
email: "abc@example.com"
password: "welcome123"
```
