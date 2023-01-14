"""create Project table

Revision ID: fd313a3d5121
Revises: 
Create Date: 2022-12-13 17:55:11.092101

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fd313a3d5121'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.execute("""
    create table Projects (
        id bigserial primary key,
        header text,
        rules text,
        pic text,
        description text,
        address text
        )
        """)


def downgrade() -> None:
    op.execute("drop table Projects;")
