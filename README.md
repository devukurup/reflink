# reflink

A simple referral management system built with Ruby on Rails. Supports user authentication, referral invitations via email, and dashboard tracking for accepted invites.

---

### 🔧 Prerequisites

* Ruby (3.0.1)
* Rails (7.0.1)
* MySQL2 (\~> 0.5)
* Mailcatcher

---

### 🚀 Initial Setup

```bash
git clone https://github.com/devukurup/referral_tracker.git
cd referral_tracker
yarn install
./bin/setup
```

Start the server:

```bash
bundle exec rails server
```

Visit: [http://127.0.0.1:3000](http://127.0.0.1:3000)

---

### ✉️ Mailcatcher Setup (for email testing)

```bash
gem install mailcatcher
mailcatcher
```

Visit: [http://127.0.0.1:1080](http://127.0.0.1:1080)

---

### 🔐 Login Credentials

```
Email:    abc@example.com  
Password: welcome123
```
