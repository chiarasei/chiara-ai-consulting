output "bucket_name" {
  value = aws_s3_bucket.website.id
}

output "website_url" {
  value = aws_s3_bucket_website_configuration.website_config.website_endpoint
}

output "access_key" {
  value     = aws_iam_access_key.github_key.id
  sensitive = true
}

output "secret_key" {
  value     = aws_iam_access_key.github_key.secret
  sensitive = true
}