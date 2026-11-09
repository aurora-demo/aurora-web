# aurora-web

Aurora's web service (demo). Changes reach `main` through a reviewed pull
request with passing CI and signed commits.

Login rate limit: 5 failed attempts per minute per IP.

Session idle timeout: 30 minutes.

Passwords: at least 12 characters.

Config: cache TTL 300s.
