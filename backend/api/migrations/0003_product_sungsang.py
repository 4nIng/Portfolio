# Generated by Django 2.2.6 on 2019-10-24 01:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_function_ingredient_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='sungsang',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]