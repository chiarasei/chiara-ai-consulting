provider "aws" {
  region = var.aws_region
}

resource "aws_s3_bucket" "website" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "website_config" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.website.id

  depends_on = [
    aws_s3_bucket_public_access_block.public_access
  ]

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.website.arn}/*"
      }
    ]
  })
}

resource "aws_iam_user" "github_user" {
  name = "github-deploy-user"
}

resource "aws_iam_access_key" "github_key" {
  user = aws_iam_user.github_user.name
}

resource "aws_iam_user_policy" "s3_access" {
  name = "s3-deploy-policy"
  user = aws_iam_user.github_user.name

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = ["s3:*"],
        Resource = "*"
      }
    ]
  })
}